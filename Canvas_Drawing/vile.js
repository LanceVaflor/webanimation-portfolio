var canvas = document.getElementById('vile');
var ctx = canvas.getContext('2d');

//background 
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(0, 200);
ctx.lineTo(0, 0);
ctx.lineTo(200, 0);
ctx.lineTo(200, 200);
ctx.closePath();
ctx.fillStyle = '#5B5A58';
ctx.fill();

//horn
ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(30, 80);
ctx.lineTo(80, 80);
ctx.lineTo(37, 30);
ctx.fillStyle = '#733580';
ctx.fill();
ctx.closePath();
ctx.stroke();

//horn2
ctx.beginPath();
ctx.lineWidth = 2;
ctx.moveTo(176, 85);
ctx.lineTo(120, 80);
ctx.lineTo(170, 30);
ctx.fillStyle = '#733580';
ctx.fill();
ctx.closePath();
ctx.stroke();

//head
ctx.beginPath();
ctx.lineWidth = 2;
ctx.arc(100, 110, 80, 0, 2 * Math.PI);
ctx.fillStyle = '#733580';
ctx.fill();
ctx.stroke();
ctx.closePath();

//eye1
ctx.beginPath();
ctx.lineWidth = 1;
ctx.moveTo(40,100);
ctx.bezierCurveTo(40,100, 60, 100, 85, 100);
ctx.bezierCurveTo(85,115, 78, 117, 55, 117,);
ctx.bezierCurveTo(50,115, 35, 110, 40,100);
ctx.fillStyle = '#D3CA16';
ctx.fill();
ctx.stroke();

//eye2
ctx.beginPath();
ctx.lineWidth = 1;
ctx.moveTo(115,100);
ctx.bezierCurveTo(115,100, 160, 100, 160, 100);
ctx.bezierCurveTo(160,115, 130, 120, 115, 117,);
ctx.bezierCurveTo(115,115, 109, 110, 113,100);
ctx.fillStyle = '#D3CA16';
ctx.fill();
ctx.stroke();

//mouth
ctx.beginPath();
ctx.lineWidth = 3;
ctx.moveTo(40, 130);
ctx.lineTo(50,145);
ctx.lineTo(60,155);
ctx.lineTo(70,140);
ctx.lineTo(80,155);
ctx.lineTo(90,140);
ctx.lineTo(100,155);
ctx.lineTo(110,140);
ctx.lineTo(120,155);
ctx.lineTo(130,140);
ctx.lineTo(140,155);
ctx.lineTo(155,130);

ctx.stroke();




