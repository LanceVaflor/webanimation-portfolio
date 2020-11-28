var canvas = document.getElementById('ration');
var ctx = canvas.getContext('2d');


//background
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(0, 200);
ctx.lineTo(0, 0);
ctx.lineTo(200, 0);
ctx.lineTo(200, 200);
ctx.closePath();
ctx.fillStyle = '#9E8F78';
ctx.fill();

//left
ctx.beginPath()
ctx.lineWidth = 4; 
ctx.moveTo(50,120);
ctx.lineTo(20,100);
ctx.lineTo(20,130);
ctx.fillStyle = '#F69E0E';
ctx.fill();
ctx.closePath();
ctx.stroke();


ctx.beginPath()
ctx.lineWidth = 4; 
ctx.moveTo(30,115);
ctx.lineTo(20,110);
ctx.lineTo(20,120);
ctx.fillStyle = '#000';
ctx.fill();
ctx.closePath();
ctx.stroke();


//right
ctx.beginPath();
ctx.lineWidth = 4;
ctx.moveTo(150, 120);
ctx.lineTo(179,100);
ctx.lineTo(179, 130);
ctx.closePath();
ctx.fillStyle = '#F69E0E';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 4;
ctx.moveTo(170, 115);
ctx.lineTo(179,105);
ctx.lineTo(179, 120);
ctx.closePath();
ctx.fillStyle = '#000';
ctx.fill();
ctx.stroke();




//ration
ctx.beginPath()
ctx.lineWidth = 4;
ctx.rect(50, 90, 100, 60);
ctx.stroke();
ctx.fillStyle = '#F69E0E';
ctx.fill();



ctx.beginPath();
ctx.lineWidth = 4;
ctx.moveTo(115, 130);
ctx.lineTo(110,140);
ctx.lineTo(120, 140);
ctx.closePath();
ctx.fillStyle = '#000';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 4;
ctx.moveTo(125, 110);
ctx.lineTo(120,120);
ctx.lineTo(130, 120);
ctx.closePath();
ctx.fillStyle = '#000';
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.lineWidth = 4;
ctx.moveTo(135, 130);
ctx.lineTo(130,140);
ctx.lineTo(140, 140);
ctx.closePath();
ctx.fillStyle = '#000';
ctx.fill();
ctx.stroke();

