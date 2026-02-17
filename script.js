/* ================= COUNTDOWN ================= */

const launchDate = new Date("Aug 15, 2026 00:00:00").getTime();
setInterval(()=>{
const now = new Date().getTime();
const distance = launchDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML =
days+"d "+hours+"h "+minutes+"m "+seconds+"s";
},1000);


/* ================= HOME SUBTLE MOTION ================= */

const homeCanvas = document.getElementById("homeCanvas");
const homeCtx = homeCanvas.getContext("2d");
homeCanvas.width = window.innerWidth;
homeCanvas.height = window.innerHeight;

let homeParticles=[];
for(let i=0;i<100;i++){
homeParticles.push({
x:Math.random()*homeCanvas.width,
y:Math.random()*homeCanvas.height,
r:Math.random()*2
});
}

function animateHome(){
homeCtx.clearRect(0,0,homeCanvas.width,homeCanvas.height);
homeCtx.fillStyle="rgba(255,215,0,0.6)";
homeParticles.forEach(p=>{
homeCtx.beginPath();
homeCtx.arc(p.x,p.y,p.r,0,Math.PI*2);
homeCtx.fill();
p.y-=0.3;
if(p.y<0) p.y=homeCanvas.height;
});
requestAnimationFrame(animateHome);
}
animateHome();


/* ================= SPACE GALAXY DRIFT ================= */

const spaceCanvas = document.getElementById("spaceCanvas");
const spaceCtx = spaceCanvas.getContext("2d");
spaceCanvas.width=window.innerWidth;
spaceCanvas.height=window.innerHeight;

let stars=[];
for(let i=0;i<200;i++){
stars.push({
x:Math.random()*spaceCanvas.width,
y:Math.random()*spaceCanvas.height,
r:Math.random()*2
});
}

function animateSpace(){
spaceCtx.fillStyle="black";
spaceCtx.fillRect(0,0,spaceCanvas.width,spaceCanvas.height);
spaceCtx.fillStyle="white";
stars.forEach(s=>{
spaceCtx.beginPath();
spaceCtx.arc(s.x,s.y,s.r,0,Math.PI*2);
spaceCtx.fill();
s.x-=0.2;
if(s.x<0) s.x=spaceCanvas.width;
});
requestAnimationFrame(animateSpace);
}
animateSpace();


/* ================= FRACTURE REALITY CRACKS ================= */

const fractureCanvas=document.getElementById("fractureCanvas");
const fractureCtx=fractureCanvas.getContext("2d");
fractureCanvas.width=window.innerWidth;
fractureCanvas.height=window.innerHeight;

function drawCracks(){
fractureCtx.clearRect(0,0,fractureCanvas.width,fractureCanvas.height);
fractureCtx.strokeStyle="red";
fractureCtx.lineWidth=2;

for(let i=0;i<20;i++){
fractureCtx.beginPath();
fractureCtx.moveTo(Math.random()*fractureCanvas.width,Math.random()*fractureCanvas.height);
fractureCtx.lineTo(Math.random()*fractureCanvas.width,Math.random()*fractureCanvas.height);
fractureCtx.stroke();
}
}
setInterval(drawCracks,800);


/* ================= ASCENT REVERSE BIG BANG ================= */

const ascentCanvas=document.getElementById("ascentCanvas");
const ascentCtx=ascentCanvas.getContext("2d");
ascentCanvas.width=window.innerWidth;
ascentCanvas.height=window.innerHeight;

let particles=[];
for(let i=0;i<200;i++){
particles.push({
x:Math.random()*ascentCanvas.width,
y:Math.random()*ascentCanvas.height
});
}

function animateAscent(){
ascentCtx.fillStyle="black";
ascentCtx.fillRect(0,0,ascentCanvas.width,ascentCanvas.height);
ascentCtx.fillStyle="purple";

particles.forEach(p=>{
ascentCtx.beginPath();
ascentCtx.arc(p.x,p.y,2,0,Math.PI*2);
ascentCtx.fill();

p.x += (ascentCanvas.width/2 - p.x)*0.01;
p.y += (ascentCanvas.height/2 - p.y)*0.01;
});
requestAnimationFrame(animateAscent);
}
animateAscent();
