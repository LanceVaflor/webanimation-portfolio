var canvas = document.getElementById('bustersword');
var ctx = canvas.getContext('2d');

//background
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(0, 200);
ctx.lineTo(0, 0);
ctx.lineTo(200, 0);
ctx.lineTo(200, 200);
ctx.closePath();
ctx.fillStyle = 'rgb(0, 50, 175)';
ctx.fill();

//handle
ctx.beginPath()
ctx.rect(87, 120, 9, 70);
ctx.fillStyle = '#645F5B';
ctx.fill();

//bladeedge
ctx.beginPath();
ctx.lineWidth = 1;
ctx.moveTo(70, 3);
ctx.lineTo(115, 25);
ctx.lineTo(115,150);
ctx.lineTo(70, 150);
ctx.closePath();
ctx.fillStyle = '#7F8483';
ctx.fill();
ctx.stroke();

//blade
ctx.beginPath();
ctx.lineWidth= 3;
ctx.moveTo(70, 10);
ctx.lineTo(110, 30);
ctx.lineTo(110, 150);
ctx.lineTo(70, 150);
ctx.closePath();
ctx.fillStyle = '#565858';
ctx.fill();
ctx.stroke();

//line
ctx.beginPath();
ctx.lineWidth = 3;
ctx.moveTo(92, 99);
ctx.lineTo(92, 148);
ctx.strokeStyle = '#7F8483';
ctx.stroke();

//materia
ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(92, 120, 4, 0, 2 * Math.PI);
ctx.strokeStyle = '#000';
ctx.stroke();
ctx.fillStyle = '#00921F';
ctx.fill();
ctx.closePath();

//nomateria
ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(92, 137, 4, 0, 2 * Math.PI);
ctx.strokeStyle = '#000';
ctx.stroke();
ctx.fillStyle = '#AB3FD0';
ctx.fill();
ctx.closePath();

//crossguard
 ctx.beginPath()
 ctx.rect(50, 148, 80, 10);
 ctx.fillStyle = '#553823';
 ctx.fill();

 //pommel
 ctx.beginPath()
 ctx.rect(85, 180, 12, 14);
 ctx.fillStyle = '#000';
 ctx.fill();




