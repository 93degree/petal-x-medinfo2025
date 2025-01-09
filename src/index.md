```js
import {petalx} from './components/petalx.js';
import score2 from './components/score2.js';
```

```js
const fullData = FileAttachment("./data/score2_surrogate.json").json();
const labels = FileAttachment("./data/labels_en.json").json();
```

```js
// Inputs
const sexInput = Inputs.radio(labels.sexLevels, {
  value: 0,
  keyof: (d) => d,
  valueof: (_, i) => i,
});
const ageInput = Inputs.range([45, 69], { step: 1, value: 51 });
const sbpInput = Inputs.range([100, 180], { step: 1, value: 120 });
const smokingInput = Inputs.radio(labels.binaryLevels, {
  value: 0,
  keyof: (d) => d,
  valueof: (_, i) => i,
});
const tholInput = Inputs.range([3, 9], { step: 0.1, value: 4.5 });
const hdlInput = Inputs.range([0.5, 2.5], { step: 0.1, value: 0.5 });

const sex = Generators.input(sexInput);
const age = Generators.input(ageInput);
const sbp = Generators.input(sbpInput);
const smoking = Generators.input(smokingInput);
const thol = Generators.input(tholInput);
const hdl = Generators.input(hdlInput);

const patientInput = Inputs.text({
  placeholder: labels.patientPlaceholder,
});
const patient = Generators.input(patientInput);
```

```js
// SCORE2 calculation (for Moderate Risk Regions)
const score2Risk = score2("Moderate", sex, age, smoking, sbp, thol, hdl);
```

```js
// Risk level calculation and legend
// Define risk thresholds [high, veryHigh] based on age groups
const thresholds = age < 50 ? [0.025, 0.075] : [0.05, 0.1];
// Assign risk level index (0: lowModerate, 1: high, 2: veryHigh)
const riskLevel =
  score2Risk >= thresholds[1] ? 2 : score2Risk >= thresholds[0] ? 1 : 0;

// Define risk colors
const riskColors = ["#55bd92", "#f79228", "#ad1e28"];
// Define risk thresholds range labels
const thresholds_labels = [
  `(<${thresholds[0] * 100}%)`,
  `(${thresholds[0] * 100}-${thresholds[1] * 100}%)`,
  `(≥${thresholds[1] * 100}%)`,
];

const riskLegend = Plot.plot({
  color: {
    legend: true,
    type: "categorical",
    tickFormat: (i) =>
      `${labels?.riskLevels?.[i] || ""} ${thresholds_labels[i]}`,
    domain: [0, 1, 2],
    columns: 1,
    className: "legend",
    swatchSize: 16,
    range: ["#55bd92", "#f79228", "#ad1e28"],
  },
});
```

```js
// Check Surrogate Model Error
const score2_surrogate_risk = data.reduce((total, variable) => {
  return (
    total +
    (variable.coefficient * (variable.value - variable.min)) /
      (variable.max - variable.min)
  );
}, 0);

const surrogate_abs_error = Math.abs(score2_surrogate_risk - score2Risk);
```

```js
const nonhdl = thol - hdl;
const numLobes = 10 + sex; // male=10, female=11
let data = fullData
  .filter((d) => d.sex === sex)
  .map((d) => ({
    ...d,
    value:
      d.id === "age"
        ? age
        : d.id === "sbp"
        ? sbp
        : d.id === "smoking"
        ? smoking
        : nonhdl,
  }));
```

```js
// Change values to min if nonhdl is out of range so no petals are drawn
if (nonhdl < 3 || nonhdl > 7) data.forEach((d) => (d.value = d.min));
// Change values to min if error > 2% is out of range so no petals are drawn
if (surrogate_abs_error > 0.02) data.forEach((d) => (d.value = d.min));

const plot = (width, height) =>
  petalx(data, labels, {
    width,
    height,
    radialMargin: 0.55,
    lobes: numLobes,
    joinRatio: 0.5,
    levels: () => labels.binaryLevels,
    color: () => riskColors[riskLevel],
  });
```

<div class="grid grid-cols-3">
  <div class="card grid-colspan-2 plot-panel">
    <h2>${labels.title}</h2>
    <h3>${labels.subtitle}</h3>
    <div class="plot-container">${riskLegend}${resize(plot)}</div>
    ${(nonhdl < 3 || nonhdl > 7) ? html`<div class="caution absolute-center"  label="${labels.nonhdlWarning.title}">${labels.nonhdlWarning.message}</div>` : ""}
    ${(surrogate_abs_error > 0.02) ? html`<div class="warning absolute-center"  label="${labels.riskExplanationWarning.title}">${labels.riskExplanationWarning.message}</div>` : ""}
  </div>
  <div class="input-panel">
    <div class="card">
      <h2>${labels.risk}</h2>
      ${(nonhdl < 3 || nonhdl > 7) ? html`<span class="big" style="color: ${riskColors[2]}">—</span>` :
      html`<span class="big" style="color: ${riskColors[riskLevel]}">${(score2Risk * 100).toFixed(1)}%</span>`}
    </div>
    <div class="card grid grid-cols-2">
      <div>
        <h3>${labels.inputs.patient}</h3>
        <div>${patientInput}</div>
      </div>
      <div>
        <h3>${labels.inputs.sex}</h3>
        <span class="medium">${labels.sexLevels[sex]}</span>
        <div>${sexInput}</div>
      </div>
    </div>
    <div class="card">
      <h3>${labels.inputs.age}</h3>
      <span class="medium">${age} let</span>
      <div>${ageInput}</div>
    </div>
    <div class="card">
      <h3>${labels.inputs.sbp}</h3>
      <span class="medium">${sbp} mmHg</span>
      <div>${sbpInput}</div>
    </div>
    <div class="card">
      <h3>${labels.inputs.smoking}</h3>
      <span class="medium">${labels.binaryLevels[smoking]}</span>
      <div>${smokingInput}</div>
    </div>
    <div class="card">
      <h3>${labels.inputs.thol}</h3>
      <span class="medium">${thol} mmol/L</span>
      <div>${tholInput}</div>
    </div>
    <div class="card">
      <h3>${labels.inputs.hdl}</h3>
      <span class="medium">${hdl} mmol/L</span>
      <div>${hdlInput}</div>
    </div>
  </div>
</div>

<style>
  .medium {
    font-weight: 600;
    font-size: 18px;
    line-height: 1;
  }

  .plot-d6a7b5-figure {
    position: absolute;
    height: 62px;
    width: 265px;
    right: 10px;
    top: 10px;
    background-color: white;
    padding: 5px 15px;
    border-radius: 0.75rem;
    border: 1px solid #dfdfdf;
  }

  .legend-swatches {
    font-size: 14px;
  }

  input[type="text"] {
    font-weight: 600;
  }

  .plot-container {
    height: 95%;
  }

  .input-panel .card:first-child {
    margin-top: 0;
  }

  .input-panel .card:last-child {
    margin-bottom: 0;
  }

  .plot-panel {
    position: relative;
  }

  .absolute-center {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
    width: 100%;
  }

  .note.absolute-center {
    z-index: 10;
  }

  .warning.absolute-center {
    z-index: 9;
  }
  #observablehq-footer {
    margin-top: 0px;
    padding-top: 0px;
    margin-left: 0.75rem;
  }

  #observablehq-main {
    margin-top: 4rem !important;
    margin-bottom: 0rem !important;
  }

  #header-container {
    padding-right: 0; /* Default padding for smaller screens */
  }

  #header-container > div:first-child {
    display: flex;
    align-items: center;
    gap: 10px; /* Adjust gap if needed */
  }

  @media (min-width: calc(832px + 5rem)) {
    #header-container {
      padding-right: calc(192px + 1rem);
    }
  }
</style>

