let xBolinha = 300;
let yBolinha = 200;

let vyBolinha = 5;
let vxBolinha = 5;

let diametro = 30;
let raio = diametro / 2;

function setup() {
createCanvas(600, 400);
}

function draw() {
background(0);
circle(xBolinha, yBolinha, diametro);

xBolinha += vxBolinha;
yBolinha += vyBolinha;

if (xBolinha + raio > width || xBolinha - raio < 0) {
    vxBolinha *= -1;
}

if (yBolinha + raio > height || yBolinha - raio < 0) {
vyBolinha *= -1;
}
}