var canvas = document.getElementById('zoom');
var ctx = canvas.getContext('2d');

//background
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(0, 200);
ctx.lineTo(0, 0);
ctx.lineTo(200, 0);
ctx.lineTo(200, 200);
ctx.closePath();
ctx.fillStyle = '#388DFA';
ctx.fill();

//circle
ctx.beginPath();
ctx.lineWidth = 3;
ctx.arc(100, 110, 70, 0, 2 * Math.PI);
ctx.fillStyle = '#388DFA';
ctx.fill();
ctx.strokeStyle ='#FFF';
ctx.stroke();
ctx.closePath();

//camera
ctx.beginPath()
ctx.rect(55, 88, 80, 50);
ctx.fillStyle = '#FFF';
ctx.fill();

//lens
ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(156, 87);
ctx.lineTo(156, 140);
ctx.lineTo(90, 110);
ctx.closePath()
ctx.fillStyle = '#FFF';
ctx.fill();
ctx.strokeStyle = '#FFF';
ctx.stroke();