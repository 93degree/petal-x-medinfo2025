const coefficients = {
  Male: [
    0.3742, 0.6012, 0.2777, 0.6457, 0.1458, -0.2698, -0.0755, -0.0255, -0.0281, 0.0426, -0.0983,
  ],
  Female: [
    0.4648, 0.7744, 0.3131, 0.8096, 0.1002, -0.2606, -0.1088, -0.0277, -0.0226, 0.0613, -0.1272,
  ],
};

const baselineSurvival = {
  Male: 0.9605,
  Female: 0.9776,
};

const recalibrationScales = [
  {sex: 'Male', risk_region: 'Low', scale1: -0.5699, scale2: 0.7476},
  {sex: 'Male', risk_region: 'Moderate', scale1: -0.1565, scale2: 0.8009},
  {sex: 'Male', risk_region: 'High', scale1: 0.3207, scale2: 0.936},
  {sex: 'Male', risk_region: 'Very high', scale1: 0.5836, scale2: 0.8294},
  {sex: 'Female', risk_region: 'Low', scale1: -0.738, scale2: 0.7019},
  {sex: 'Female', risk_region: 'Moderate', scale1: -0.3143, scale2: 0.7701},
  {sex: 'Female', risk_region: 'High', scale1: 0.571, scale2: 0.9369},
  {sex: 'Female', risk_region: 'Very high', scale1: 0.9412, scale2: 0.8329},
];

function normalizeSex(sex) {
  if (typeof sex === 'number') {
    return sex === 0 ? 'Male' : 'Female';
  }
  if (typeof sex === 'string') {
    return sex.toLowerCase().startsWith('m') ? 'Male' : 'Female';
  }
}

function score2(risk_region, sex, age, smoking, sbp, tchol, hdl) {
  // Normalize sex input
  const normalizedSex = normalizeSex(sex);

  // Calculate transformed values
  const cage = (age - 60) / 5;
  const csbp = (sbp - 120) / 20;
  const ctchol = (tchol - 6) / 1;
  const chdl = (hdl - 1.3) / 0.5;
  const diabetes = 0;
  // Diabetes mellitus was included in the modelling since this was necessary for
  // the recalibration approach, which relies data from the whole population,
  // including those with diabetes. However, SCORE2 is not intended for use in
  // individuals with diabetes and has not been validated in this population.
  // For risk prediction in the target population of individuals without diabetes
  // this risk factor will always be 0, meaning the coefficient can effectively
  // be ignored.

  const transformedValues = [
    cage,
    smoking,
    csbp,
    diabetes,
    ctchol,
    chdl,
    cage * smoking,
    cage * csbp,
    cage * ctchol,
    cage * chdl,
    cage * diabetes,
  ];

  // Calculate linear predictor
  const linearPredictor = coefficients[normalizedSex].reduce((sum, coef, index) => {
    return sum + coef * transformedValues[index];
  }, 0);

  // Calculate uncalibrated 10-year risk
  const uncalibrated10yRisk =
    1 - Math.pow(baselineSurvival[normalizedSex], Math.exp(linearPredictor));

  // Find recalibration scales
  const recalibrationScale = recalibrationScales.find(
    scale => scale.sex === normalizedSex && scale.risk_region === risk_region
  );

  const {scale1, scale2} = recalibrationScale;

  // Calculate calibrated 10-year risk
  const calibrated10yRisk =
    1 - Math.exp(-Math.exp(scale1 + scale2 * Math.log(-Math.log(1 - uncalibrated10yRisk))));

  return calibrated10yRisk;
}

export default score2;
