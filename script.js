var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');


//second tutorial (moving)


var x = canvas.width/2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;
var ballRadius = 10;

//Third tutorial moving paddle
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
var paddleY = canvas.height-paddleHeight;
var rightPressed = false;
var leftPressed = false;

// Code for moving paddle

//  document.addEventListener("event type", fonction activated if there is the event);
document.addEventListener("keydown", keyDownHandler);
document.addEventListener("keyup", keyUpHandler);

// (e) is parameter which represente the event
function keyDownHandler(e) {
  // keyCode correspond to a button of the laptop ex 39 => "right arrow"
  if(e.keyCode == 39) {
    rightPressed = true;
  }
  // 37 => "left arrow"
  else if(e.keyCode == 37) {
    leftPressed = true;
  }
}

function keyUpHandler(e){
  // keyCode correspond to a button of the laptop ex 39 => "right arrow"
  if(e.keyCode == 39) {
    rightPressed = false;
  }
  // 37 => "left arrow"
  else if(e.keyCode == 37) {
    leftPressed = false;
  }
}

// Drawing code
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2, false);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle(){
  ctx.beginPath();
  ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
  ctx.fillStyle ="#0095DD";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  // Avoid repetition
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Drawing code
  drawBall();

  // Collision code

  if(x + dx < ballRadius || x + dx > canvas.width - ballRadius) {
    dx = -dx;
  }

  if(y + dy < ballRadius) {
    dy = -dy;
  }
  // Game over code alert
  else if ( y + dy > canvas.height - ballRadius) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    } else {
      alert("Game Over");
      document.location.reload();
    }
  }
  // paddle code
  drawPaddle();

  if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
  }
  else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  // Moving parameters
  x += dx;
  y += dy;
}

// setInterval(function, milliseconds);
setInterval(draw, 10);

// first tutorial

// ctx.beginPath();
// ctx.rect(20, 40, 50, 50);
// ctx.fillStyle ="#FF0000";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.arc(240, 160, 20, 0, Math.PI*2, false);
// ctx.fillStyle = "green";
// ctx.fill();
// ctx.closePath();

// ctx.beginPath();
// ctx.rect(160, 10, 100, 40);
// ctx.strokeStyle = 'rgba(0, 0, 255, 0.5)';
// ctx.stroke();
// ctx.closePath();
