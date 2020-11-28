var canvas = document.getElementById('youtube');
var ctx = canvas.getContext('2d');

//background
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(0, 200);
ctx.lineTo(0, 0);
ctx.lineTo(200, 0);
ctx.lineTo(200, 200);
ctx.closePath();
ctx.fillStyle = '#000';
ctx.fill();

//red
ctx.beginPath()
ctx.moveTo(50, 50);
ctx.bezierCurveTo(160,50, 160, 50, 160, 50);
ctx.bezierCurveTo(173, 70, 182, 80, 169, 130);
ctx.bezierCurveTo(160, 130, 160, 130, 50,130);
ctx.bezierCurveTo(40, 110, 30, 90, 50, 50);
ctx.fillStyle = '#FF0000';
ctx.fill();
ctx.stroke();

//play
ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(90, 70);
ctx.lineTo(140, 90);
ctx.lineTo(90, 110);
ctx.closePath()
ctx.fillStyle = '#FFF';
ctx.fill();
ctx.strokeStyle = '#FFF';
ctx.stroke();