const canvasMag = 0.6;
const emoji = ["LEG__LAB"];

function setup() {
  createCanvas(3840 * canvasMag, 1920 * canvasMag);

  pixelDensity(1 / canvasMag);
  noStroke();
  textAlign(CENTER, CENTER);
  imageMode(CENTER);

 
}

function draw() {
    background(233,0,220,212);
    generateLogo()
  
    
//  stroke(255,255,255,255)
 
}


function generateLogo() { 
    let pg = createGraphics(width, height);
    pg.textAlign(CENTER, CENTER);
    pg.textSize(134);
    pg.text(random(emoji), pg.width / 2, pg.height / 2);
  
    const imgW = width;
    const imgH = 4;
    const imgX = 0;
  
    const nw = random(1000);
    const nx = random(1000);
    const xDelta = width * 0.000015;
    for (let y = 0; y <= height; y++) {
      const img = pg.get(imgX, y, imgW, imgH);
      let w = imgW * 2 * noise(y * 0.0045, nw);
      let x = map( noise(y * 0.5, nx), 0, 4, -xDelta, xDelta) + width/2;
      image(img, x, y, w, imgH);
    }
}