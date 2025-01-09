/**
 * This file is based on:
 * https://github.com/d3/d3-geo/blob/main/src/circle.js
 * Version: v3.1.1 (dcca6b2)
 *
 * Copyright 2010-2024 Mike Bostock
 * Copyright 2008-2012 Charles Karney
 *
 * For full license text, see the LICENSE file in the project root.
 */

import {cartesian, cartesianNormalizeInPlace, spherical} from 'npm:d3-geo@3.1.1/src/cartesian.js';
import constant from 'npm:d3-geo@3.1.1/src/constant.js';
import {acos, cos, degrees, epsilon, radians, sin, tau, pi} from 'npm:d3-geo@3.1.1/src/math.js';
import {rotateRadians} from 'npm:d3-geo@3.1.1/src/rotation.js';

// Generates a multilobed petal with given lobes, joinRatio, and precision,
// inscribed in a circumference centered at [0°, 0°] with a given radius.
export function petalStream(
  stream,
  radius,
  delta,
  direction,
  t0,
  t1,
  {lobes = 10, joinRatio = 0.5} = {}
) {
  if (!delta) return;
  var step = direction * delta,
    lobeAngle = tau / lobes;

  if (t0 == null) {
    t0 = direction * tau;
    t1 = -step / 2;
  } else {
    stream.point(0, 0); // Ensure proper non-360° petal closure by including the origin
    var cosRadius = cos(radius);
    t0 = circleRadius(cosRadius, t0);
    t1 = circleRadius(cosRadius, t1);
    if (direction > 0 ? t0 < t1 : t0 > t1) t0 += direction * tau;
  }

  for (var point, t = t0; direction > 0 ? t > t1 : t < t1; t -= step) {
    var r = radius * (joinRatio + (1 - joinRatio) * sin((pi * (t % lobeAngle)) / lobeAngle));
    point = spherical([cos(r), -sin(r) * cos(t), -sin(r) * sin(t)]);
    stream.point(point[0], point[1]);
  }
}

// Returns the signed angle of a cartesian point relative to [cosRadius, 0, 0].
function circleRadius(cosRadius, point) {
  (point = cartesian(point)), (point[0] -= cosRadius);
  cartesianNormalizeInPlace(point);
  var radius = acos(-point[1]);
  return ((-point[2] < 0 ? -radius : radius) + tau - epsilon) % tau;
}

export default function () {
  var center = constant([0, 0]),
    radius = constant(90),
    precision = constant(0.2), // default: 2 / lobes
    lobes = constant(10),
    joinRatio = constant(0.5),
    span,
    ring,
    rotate,
    stream = {point: point};

  function point(x, y) {
    ring.push((x = rotate(x, y)));
    (x[0] *= degrees), (x[1] *= degrees);
  }

  function petal() {
    var c = center.apply(this, arguments),
      r = radius.apply(this, arguments) * radians,
      p = precision.apply(this, arguments) * radians,
      n = lobes.apply(this, arguments),
      j = joinRatio.apply(this, arguments),
      s = span && [].concat(span.apply(this, arguments)).map(angle => angle * radians);

    ring = [];
    rotate = rotateRadians(-c[0] * radians, -c[1] * radians, 0).invert;

    var t0 = s && [-r * cos(s[0]), -r * sin(s[0])];
    var t1 = s && (s.length > 1 ? [-r * cos(s[1]), -r * sin(s[1])] : [-r, 0]); // If span only one angle, petal goes from 0 to that angle

    petalStream(stream, r, p, 1, t0, t1, {lobes: n, joinRatio: j});
    c = {type: 'Polygon', coordinates: [ring]};
    ring = rotate = null;
    return c;
  }

  petal.center = function (_) {
    return arguments.length
      ? ((center = typeof _ === 'function' ? _ : constant([+_[0], +_[1]])), petal)
      : center;
  };

  petal.radius = function (_) {
    return arguments.length
      ? ((radius = typeof _ === 'function' ? _ : constant(+_)), petal)
      : radius;
  };

  petal.precision = function (_) {
    return arguments.length
      ? ((precision = typeof _ === 'function' ? _ : constant(+_)), petal)
      : precision;
  };

  petal.lobes = function (_) {
    return arguments.length ? ((lobes = typeof _ === 'function' ? _ : constant(+_)), petal) : lobes;
  };

  petal.joinRatio = function (_) {
    return arguments.length
      ? ((joinRatio = typeof _ === 'function' ? _ : constant(+_)), petal)
      : joinRatio;
  };

  petal.span = function (_) {
    return arguments.length ? ((span = typeof _ === 'function' ? _ : constant(_)), petal) : span;
  };

  return petal;
}
