window.onload = () => {
  //canvas init & canvas dimensions
  let canvas = document.getElementById("canvas");
  let cx = canvas.getContext("2d");
  let w = window.innerWidth;
  let h = window.innerHeight;
  canvas.width = w;
  canvas.height = h;

  //snow variables
  let maxSnow = 150; //max snow
  let snow = [];
  for (let i = 0; i < maxSnow; i++) {
    snow.push({
      x: Math.random() * w, //x-coordinate
      y: Math.random() * h, //y-coordinate
      r: Math.random() * 4 + 1, //radius of each particle
      d: Math.random() * maxSnow //snow density
    });
  }

  //snow draw function
  function draw() {
    cx.clearRect(0, 0, w, h); //clear trail of snow particles

    cx.fillStyle = "rgba(255, 255, 255, 0.7)"; //set snow color & opacity
    cx.beginPath();
    for (let i = 0; i < maxSnow; i++) {
      let p = snow[i];
      cx.moveTo(p.x, p.y);
      cx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    }
    cx.fill();
    move();
  }

  //set angle for move function
  let angle = 0;
  function move() {
    //move function to have snow fall & change directions
    angle += 0.05;
    for (let i = 0; i < maxSnow; i++) {
      let p = snow[i];
      //change y & x coordinates to create motion of snow particles
      p.y += Math.cos(angle + p.d) + 1 * 4; //cos will help to create an up & down motion ever so slightly
      p.x += Math.sin(angle) * 2; //sin will help to create a side to side movement

      //Sending flakes back from the top when it exits

      if (p.y > h || p.y < 0) {
        p.y = Math.random() * 10;
      }
      if (p.x > w + 3 || p.x < -3) {
        if (Math.sin(angle) > 0) {
          snow[i] = {
            x: -3,
            y: Math.random() * h,
            r: p.r,
            d: p.d
          };
        } else {
          snow[i] = {
            x: w + 3,
            y: Math.random() * h,
            r: p.r,
            d: p.d
          };
        }
      }
    }
  }

  setInterval(draw, 33);
};
