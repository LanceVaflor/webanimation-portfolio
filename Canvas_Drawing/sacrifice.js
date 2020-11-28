var canvas = document.getElementById('sacrifice');
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

//line
ctx.beginPath()
ctx.lineWidth = 7;
ctx.moveTo(100,40);
ctx.lineTo(100,156);
ctx.closePath();
ctx.strokeStyle ='red';
ctx.stroke();
ctx.fill();

//thorn1
ctx.beginPath()
ctx.lineWidth = 2;
ctx.moveTo(100,50);
ctx.lineTo(104,35);
ctx.closePath();
ctx.strokeStyle ='red';
ctx.stroke();
ctx.fill();

//thorn2
ctx.beginPath()
ctx.lineWidth = 2;
ctx.moveTo(100,50);
ctx.lineTo(100,35);
ctx.closePath();
ctx.strokeStyle ='red';
ctx.stroke();
ctx.fill();

//thorn3
ctx.beginPath()
ctx.lineWidth = 2;
ctx.moveTo(100,50);
ctx.lineTo(96,35);
ctx.closePath();
ctx.strokeStyle ='red';
ctx.stroke();
ctx.fill();

//tri1
ctx.beginPath()
ctx.lineWidth = 7;
ctx.moveTo(100,154);
ctx.lineTo(100,154)
ctx.lineTo(62,120);
ctx.lineTo(99, 95);
ctx.lineTo(130, 75);
ctx.lineTo(130, 25);
ctx.strokeStyle ='red';
ctx.stroke()

//tri2
ctx.beginPath()
ctx.lineWidth = 7;
ctx.moveTo(100,154);
ctx.lineTo(140,120);
ctx.lineTo(70, 75);
ctx.lineTo(70, 25);
ctx.strokeStyle ='red';
ctx.stroke()




