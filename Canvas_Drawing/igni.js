var canvas = document.getElementById('igni');
var ctx = canvas.getContext('2d');

//background 
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(0, 200);
ctx.lineTo(0, 0);
ctx.lineTo(200, 0);
ctx.lineTo(200, 200);
ctx.closePath();
ctx.fillStyle = '#3F4143';
ctx.fill();

//ignisign
ctx.beginPath()
ctx.lineWidth = 20;
ctx.moveTo(100,30);
ctx.lineTo(30,156);
ctx.lineTo(165,156);
ctx.lineTo(108,60);
ctx.strokeStyle ='#E50A0A';
ctx.stroke();

