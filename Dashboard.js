/* SIDEBAR */
function toggleSidebar(){
  document.querySelector(".sidebar").classList.toggle("hidden");
  document.querySelector(".main").classList.toggle("full");
}

/* MENU */
function toggle(id){
  let el=document.getElementById(id);
  el.style.display = (el.style.display==="block")?"none":"block";
}

/* ACTIVE */
function setActive(btn){
  document.querySelectorAll(".sidebar button").forEach(b=>{
    b.classList.remove("active-btn");
  });
  btn.classList.add("active-btn");
}

/* HOME */
function showHome(){
  document.getElementById("content").innerHTML="Welcome 🚀";
}

/* SIMULATION ⭐ */
function openSimulation(type){

document.getElementById("content").innerHTML=`
<h2>Logic Gate Simulation</h2>

<div>
<button class="sim-btn" onclick="setGate('AND')">AND</button>
<button class="sim-btn" onclick="setGate('OR')">OR</button>
<button class="sim-btn" onclick="setGate('NOT')">NOT</button>
<button class="sim-btn" onclick="setGate('NAND')">NAND</button>
<button class="sim-btn" onclick="setGate('NOR')">NOR</button>
<button class="sim-btn" onclick="setGate('XOR')">XOR</button>
<button class="sim-btn" onclick="setGate('XNOR')">XNOR</button>
</div>

<div style="margin-top:10px">
<button class="sim-btn" onclick="toggleA()">A</button>
<button class="sim-btn" onclick="toggleB()">B</button>
</div>

<h3>Output: <span id="out">0</span></h3>

<table>
<tr><th>A</th><th>B</th><th>Out</th></tr>
<tr><td>0</td><td>0</td><td>0</td></tr>
<tr><td>0</td><td>1</td><td>1</td></tr>
<tr><td>1</td><td>0</td><td>1</td></tr>
<tr><td>1</td><td>1</td><td>1</td></tr>
</table>
`;

currentGate="AND";
A=0;B=0;
}

/* GATES */
let A=0,B=0,currentGate="AND";

function setGate(g){currentGate=g;calc();}
function toggleA(){A=!A;calc();}
function toggleB(){B=!B;calc();}

function calc(){
let r=0;

if(currentGate==="AND") r=A&B;
if(currentGate==="OR") r=A|B;
if(currentGate==="NOT") r=A?0:1;
if(currentGate==="NAND") r=!(A&B)?1:0;
if(currentGate==="NOR") r=!(A|B)?1:0;
if(currentGate==="XOR") r=A^B;
if(currentGate==="XNOR") r=!(A^B)?1:0;

document.getElementById("out").innerText=r;
}

/* SIMPLE PAGES */
function openGate(g){
document.getElementById("content").innerHTML=`<h2>${g}</h2>`;
}

function openModel(m){
document.getElementById("content").innerHTML=`<h2>${m}</h2>`;
}

function openSeq(s){
document.getElementById("content").innerHTML=`<h2>${s}</h2>`;
}

function openSeqModel(m){
document.getElementById("content").innerHTML=`<h2>${m}</h2>`;
}

function openSimulation(){

document.getElementById("content").innerHTML = `
<iframe src="simulation.html" 
style="width:100%; height:80vh; border:none; border-radius:12px;">
</iframe>
`;

}
