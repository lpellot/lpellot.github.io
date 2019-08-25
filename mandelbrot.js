let maxIt = 80;
let shiftLR;
let shiftTB;

function setup(){
  createCanvas(300, 200);
  background(0);
  fill(255);
}

function draw(){
  translate(200, 100);
  
  let area = create2DArray(width, height);

  let c, n;

  for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
      c = math.complex(i, j);
      n = mandelbrot(n);
      console.log(i + ", " + j + ": ");
    }
  }

  /*for(x = -2; x < 1; x+= 0.01){
    for(y = -1; y < 1; y += 0.01){
      let c = math.complex(x, y);

      
    }
  }*/
}

function mandelbrot(c){
  let n = 0;
  let z = math.complex(0, 0);

  while (math.abs(z) <= 2 && n < maxIt){
    z = math.add(math.multiply(z, z), c);
    n++;
  }

  return n;
}

function create2DArray(cols, rows){
  let arr = new Array(cols);
  
  for(let i = 0; i < cols; i ++){
    arr[i] = new Array(rows);
  }

  return arr;
}