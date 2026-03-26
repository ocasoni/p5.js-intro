let topolino;

function preload() {
  topolino = loadImage("image.png");
}


function setup() {
  createCanvas(400, 400);
  background(160, 0, 0);

  let x;
  let y;

  for (let i = 0; i < 100; i = i + 1) {
    x = random(300);
    y = random(300);
    image(topolino, x, y, 100, 50);
  }
}


