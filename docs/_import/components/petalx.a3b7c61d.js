import * as Plot from "../../_npm/@observablehq/plot@0.6.16/e828d8c8.js";
import * as d3 from "../../_npm/d3@7.9.0/7055d4c5.js";

import geoPetal from "./geoPetal.64d7f1a5.js";

export function petalx(
  variables,
  labels,
  {
    width,
    height,
    lobes = 10,
    joinRatio = 0.5,
    radialMargin = 0.5,
    id = d => d.id,
    coefficient = d => d.coefficient,
    value = d => d.value,
    min = d => d.min,
    max = d => d.max,
    isBinary = d => d.isBinary,
    levels = d => d.levels,
    color = d => d.color,
  } = {}
) {
  // totalRadius corresponds to max. norm. value (1.0), plus some room (radialMargin) for the labels
  const totalRadius = 1 + radialMargin;
  // petalAngleOffset rotation needed for petals to start 12 o'clock instead of 9 o'clock
  const petalAngleOffset = -90;

  // Create the base 360º-petal (unscaled) shape generator
  var petalShape = geoPetal()
    .center([0, 90])
    .precision(2 / lobes)
    .lobes(lobes)
    .joinRatio(joinRatio);

  // Calculate the angular span of each lobe in degrees
  const lobeAngle = 360 / lobes;

  // Sort variables by coefficient in alternate order
  variables = alternateSort(variables, coefficient);

  // Create radius scale for sqrt transformation [0-1] → [0-1] for petal length encoding
  const r = d3.scaleSqrt();

  // Create min-max normalization scales per variable
  const normalize = variables.reduce((scales, variable) => {
    scales[id(variable)] = d3
      .scaleLinear()
      .domain([min(variable), max(variable)])
      .range([0, 1]);
    return scales;
  }, {});

  // Calculate score2 surrogate total risk
  const totalRisk = variables.reduce((total, variable) => {
    return total + coefficient(variable) * normalize[id(variable)](value(variable));
  }, 0);

  // Calculate relative contributions (%)
  let relativeContributions = variables.map(variable => {
    const contribution = coefficient(variable) * normalize[id(variable)](value(variable));
    return (contribution / totalRisk) * 100;
  });

  // Round relative contributions to whole numbers while preserving sum of 100%
  // using Hamilton's method of apportionment
  relativeContributions = hamiltonsApportionment(relativeContributions, 100);

  // Distribute the total number of lobes across variables proportionally
  // using Hamilton's method of apportionment based on coefficients
  const lobesPerPetal = hamiltonsApportionment(Plot.valueof(variables, coefficient), lobes);

  // Petals encodings. Maps variable to petal by:
  // 1. Computing start/end angles based on allocated lobe count
  // 2. Computing petal length: value → normalized [0-1] → sqrt-scaled length [0-1]
  let cumulativeAngle = 0;
  const petals = variables.map((variable, i) => ({
    ...variable,
    lobes: lobesPerPetal[i],
    startAngle: cumulativeAngle,
    endAngle: (cumulativeAngle += lobesPerPetal[i] * lobeAngle),
    length: r(normalize[id(variable)](value(variable))),
    relativeContribution: relativeContributions[i],
  }));

  return Plot.plot({
    width,
    height,
    projection: {
      type: 'azimuthal-equidistant',
      rotate: [petalAngleOffset, -90],
      domain: d3.geoCircle().center([0, 90]).radius(totalRadius)(),
    },
    marks: [
      // Grid
      ...petals.map(petal => {
        const ticks = isBinary(petal) ? [1] : [1, 0.75, 0.5, 0.25];
        const tickFormat = isBinary(petal) ? x => levels(petal)[x] : x => x;
        const labelAngle =
          petalAngleOffset + petal.startAngle + (Math.ceil(petal.lobes / 2) - 0.5) * lobeAngle;
        const midAngle = petalAngleOffset + (petal.startAngle + petal.endAngle) / 2;
        const textLength = String(normalize[id(petal)].invert(0)).length * 14;
        const zero_dx = -Math.cos((midAngle * Math.PI) / 180) * r(textLength);
        const zero_dy = Math.sin((midAngle * Math.PI) / 180) * r(textLength);

        return [
          // grid lines
          Plot.geo(ticks, {
            geometry: t => petalShape.radius(r(t)).span([petal.endAngle, petal.startAngle])(),
            stroke: 'black',
            fill: 'black',
            stroke: '#aaa',
            fill: '#eee',
            fillOpacity: t => (t == 1 ? 1 : 0),
            strokeDasharray: 4,
          }),
          // tick labels
          Plot.text(ticks, {
            // Position labels in the middle lobe (rounded down for even numbers).
            x: labelAngle,
            y: t => 90 - r(t),
            textAnchor: 'middle',
            dominantBaseline: 'middle',
            text: t => tickFormat(normalize[id(petal)].invert(t)),
            fill: 'currentColor',
            stroke: '#eee',
            fontSize: 14,
          }),
          // Zero tick label
          Plot.text(
            [0],
            Plot.centroid({
              geometry: petalShape
                .radius(r(0.035 / petal.lobes))
                .span([petal.endAngle, petal.startAngle])(),
              dx: zero_dx,
              dy: zero_dy,
              text: t => tickFormat(normalize[id(petal)].invert(t)),
              fill: 'currentColor',
              stroke: '#eee',
              fontSize: 14,
            })
          ),
        ];
      }),

      // Axis
      Plot.link(petals, {
        x1: 0,
        y1: 90,
        x2: p => petalAngleOffset + p.startAngle,
        y2: 90 - totalRadius,
        stroke: '#aaa',
        strokeWidth: 2,
      }),
      // Axis labels
      Plot.text(petals, {
        x: p =>
          petalAngleOffset +
          (p.startAngle + p.endAngle) / 2 -
          (p.lobes > 1 && p.lobes % 2 != 0 ? lobeAngle / 2 : 0),
        y: 90 - totalRadius + radialMargin / 2,
        text: p => labels.variables[id(p)],
        textAnchor: 'middle',
        lineAnchor: 'bottom',
        fontSize: 14,
        fontWeight: 'bold',
      }),
      // Axis sub-label: relative contribution
      Plot.text(petals, {
        x: p =>
          petalAngleOffset +
          (p.startAngle + p.endAngle) / 2 -
          (p.lobes > 1 && p.lobes % 2 != 0 ? lobeAngle / 2 : 0),
        y: 90 - totalRadius + radialMargin / 2,
        dy: 16.8,
        text: p =>
          isNaN(p.relativeContribution) ? '—' : p.relativeContribution + labels.contribution,
        fill: '#9980fa',
        textAnchor: 'middle',
        lineAnchor: 'bottom',
        fontSize: 14,
      }),

      // Petals
      Plot.geo(petals, {
        geometry: p =>
          p.length ? petalShape.radius(p.length).span([p.endAngle, p.startAngle])() : null,
        stroke: p => color(p),
        fill: p => color(p),
        fillOpacity: 0.4,
        strokeWidth: 2,
      }),
    ],
  });
}

/**
 * Sorts elements by an accessor in descending order, alternating between beginning and end
 * @param {Array} elements - Array of elements to be sorted
 * @param {*} accessor - Value accessor compatible with Plot.valueof
 * @returns {Array} Elements sorted in alternating order
 */
function alternateSort(elements, accessor) {
  // Get values using Plot.valueof
  const values = Plot.valueof(elements, accessor);

  const sortedElements = [...elements.keys()]
    .sort((a, b) => values[b] - values[a])
    .map(index => elements[index]);

  const evenIndexed = sortedElements.filter((_, i) => i % 2 === 0);
  const oddIndexed = sortedElements.filter((_, i) => i % 2 !== 0);

  return [...evenIndexed, ...oddIndexed.reverse()];
}

/**
 * Hamilton's method of apportionment
 * @param {number[]} values - Array of values to be proportionally distributed
 * @param {number} totalElements - Total number of elements to distribute
 * @returns {number[]} Array containing the apportioned values
 */
function hamiltonsApportionment(values, totalElements) {
  const totalValue = values.reduce((sum, value) => sum + value, 0);
  const quota = totalValue / totalElements;

  const initialApportionment = values.map(value => Math.floor(value / quota));
  const remainders = values.map((value, index) => ({
    index,
    remainder: value / quota - initialApportionment[index],
  }));

  remainders.sort((a, b) => b.remainder - a.remainder);

  const finalApportionment = [...initialApportionment];
  let remainingElements =
    totalElements - initialApportionment.reduce((sum, value) => sum + value, 0);

  for (let i = 0; i < remainingElements; i++) {
    finalApportionment[remainders[i].index]++;
  }

  return finalApportionment;
}
