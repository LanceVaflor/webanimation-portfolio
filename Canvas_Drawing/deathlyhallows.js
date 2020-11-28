var canvas = document.getElementById('deathlyhallows');
var ctx = canvas.getContext('2d');

//background
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(0, 200);
ctx.lineTo(0, 0);
ctx.lineTo(200, 0);
ctx.lineTo(200, 200);
ctx.closePath();
ctx.fillStyle = '#FFE0B2';
ctx.fill();

//circle
ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(100, 110, 45, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();

//triangle
ctx.beginPath();
ctx.lineWidth = 8;
ctx.moveTo(20, 155);
ctx.lineTo(180, 155);
ctx.lineTo(100, 20);
ctx.closePath();
ctx.stroke();

//line
ctx.beginPath()
ctx.lineWidth = 6;
ctx.moveTo(100,20);
ctx.lineTo(100,155);
ctx.closePath();
ctx.stroke();
