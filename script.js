const state = { A: 0, B: 0 };
const gateInfo = {
  AND: "True when both A and B are 1.",
  OR: "True when either A or B is 1.",
  NOT: "Inverts A.",
  NAND: "Inverse of AND.",
  NOR: "Inverse of OR.",
  XOR: "True only when A and B differ."
};
const outputEl = document.getElementById("output");
const gateInfoEl = document.getElementById("gateInfo");
const gateDiagramEl = document.getElementById("gateDiagram");
const gateDiagramImg = document.getElementById("gateDiagramImg");
const truthTableBody = document.querySelector("#truthTable tbody");
const gateButtons = document.querySelectorAll(".gate-btn");
const btnA = document.getElementById("btnA");
const btnB = document.getElementById("btnB");
const resetBtn = document.getElementById("resetBtn");
let currentGate = "AND";



function evaluateGate(gate, a, b) {
  switch (gate) {
    case "AND": return a && b;
    case "OR":  return a || b;
    case "NOT": return Number(!a);
    case "NAND": return Number(!(a && b));
    case "NOR": return Number(!(a || b));
    case "XOR": return Number(a !== b);
    default: return 0;
  }
}

function updateToggleButton(button, key) {
  button.textContent = `${key}: ${state[key] ? "ON" : "OFF"}`;
  button.setAttribute("aria-pressed", state[key].toString());
  button.classList.toggle("active", state[key] === 1);
}

function setInputMode(gate) {
  const isNot = gate === "NOT";
  btnB.style.display = isNot ? "none" : "inline-block";
  if (isNot) {
    state.B = 0;
    updateToggleButton(btnB, "B");
  }
}

function refreshTruthTable() {
  truthTableBody.innerHTML = "";
  const gate = currentGate;

  if (gate === "NOT") {
    for (const a of [0, 1]) {
      const result = evaluateGate(gate, a, 0);
      const row = document.createElement("tr");
      row.innerHTML = `<td>${a}</td><td>—</td><td>${result}</td>`;
      truthTableBody.appendChild(row);
    }
    return;
  }

  for (const a of [0, 1]) {
    for (const b of [0, 1]) {
      const result = evaluateGate(gate, a, b);
      const row = document.createElement("tr");
      row.innerHTML = `<td>${a}</td><td>${b}</td><td>${result}</td>`;
      truthTableBody.appendChild(row);
    }
  }
}

function setActiveGateButton(gate) {
  gateButtons.forEach((button) => {
    const isActive = button.dataset.gate === gate;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", isActive.toString());
  });
}

function updateGateDiagram(gate) {
  const imagePath = `images/${gate.toLowerCase()}.png`;
  gateDiagramImg.src = imagePath;
  gateDiagramImg.alt = `${gate} gate diagram`;
}

function setSelectedGate(gate) {
  currentGate = gate;
  setActiveGateButton(gate);
  setInputMode(gate);
  updateGateDiagram(gate);
  calculate();
}

function calculate() {
  const gate = currentGate;
  const result = evaluateGate(gate, state.A, state.B);

  outputEl.textContent = `OUTPUT: ${result}`;
  outputEl.classList.toggle("ok", result === 1);
  outputEl.classList.toggle("fail", result === 0);
  outputEl.classList.toggle("active", true);

  gateInfoEl.textContent = `${gate}: ${gateInfo[gate] || "Select valid gate."}`;
  refreshTruthTable();
}

function toggleInput(key) {
  state[key] = state[key] ? 0 : 1;
  updateToggleButton(key === "A" ? btnA : btnB, key);
  calculate();
}

btnA.addEventListener("click", () => toggleInput("A"));
btnB.addEventListener("click", () => toggleInput("B"));
resetBtn.addEventListener("click", () => {
  state.A = 0;
  state.B = 0;
  updateToggleButton(btnA, "A");
  updateToggleButton(btnB, "B");
  setSelectedGate("AND");
});

gateButtons.forEach((button) => {
  button.addEventListener("click", () => setSelectedGate(button.dataset.gate));
});

// Initialize
updateToggleButton(btnA, "A");
updateToggleButton(btnB, "B");
setSelectedGate(currentGate);

