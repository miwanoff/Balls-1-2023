const canvas = document.getElementById("canvas");
const n = 10;

class Ball {
  constructor(canvas, x = 100, y = 100) {
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
    this.x = x;
    this.y = y;
    this.radius = 3;
    this.xSpeed = Math.floor(Math.random() * 10);
    this.ySpeed = Math.floor(Math.random() * 10);
    // ctx.fillStyle = ctx.clearRect(0, 0, width, height);
    this.color = "blue";
  }

  circle(x, y, radius, fillCircle) {
    this.ctx.beginPath();
    this.ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    if (fillCircle) {
      this.ctx.fill();
    } else {
      this.ctx.stroke();
    }
  }

  draw() {
    this.ctx.fillStyle = "blue";
    this.circle(this.x, this.y, this.radius, true);
  }
}

let ball = new Ball(canvas);
console.log (ball.x, ball.y, ball.xSpeed, ball.ySpeed);
ball.draw();
