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

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  checkCollosion() {
    if (this.x < 0 || this.x > this.width) {
      this.xSpeed = -this.xSpeed;
    }

    if (this.y < 0 || this.y > this.height) {
      this.ySpeed = -this.ySpeed;
    }
  }
}

// let ball = new Ball(canvas);
// console.log(ball.x, ball.y, ball.xSpeed, ball.ySpeed);
// ball.draw();
// ball.move();
// balls.checkCollosion();
// console.log(ball.x, ball.y, ball.xSpeed, ball.ySpeed);

class BallsGame {
  constructor(balls, canvas) {
    this.ctx = canvas.getContext("2d");
    this.width = canvas.width;
    this.height = canvas.height;
    this.balls = balls;
  }

  clear() {
    this.ctx.fillStyle = ctx.clearRect(0, 0, width, height);
  }

  drawBorder() {
    this.ctx.strokeStyle = "grey";
    this.ctx.lineWidth = 3;
    this.ctx.strokeRect(0, 0, this.width, this.height);
  }

  go() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    for (let i = 0; i < 10; i++) {
      this.balls[i].draw();
      this.balls[i].move();
      this.balls[i].checkCollosion();
    }
    this.drawBorder();
  }

  start() {
    setInterval(this.go.bind(this), 30);
  }
}

const balls = [];
for (let i = 0; i < n; i++) {
  balls[i] = new Ball(canvas);
}

const ballsGame = new BallsGame(balls, canvas);

ballsGame.drawBorder();
ballsGame.start();
