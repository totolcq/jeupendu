let canvas = document.getElementById("cnv");
let ctx = canvas.getContext("2d");

//Rectangle rempli
//ctx.fillRect(10,20,100,200);

//border du rectangle
//ctx.strokeRect(300,300,100,100);

//début Une ligne
/* ctx.beginPath();
//Lettre T
ctx.moveTo(200,200);
ctx.lineTo(200,500);
ctx.lineTo(300,500);
ctx.lineTo(300,200);
ctx.lineTo(380,200);
ctx.lineTo(380,150);
ctx.lineTo(120,150);
ctx.lineTo(120,200);
ctx.lineTo(200,200);
ctx.stroke(); */

 
/* ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true);  // Cercle extérieur
    ctx.moveTo(110,75);
    ctx.arc(75, 75, 35, 0, Math.PI, false);  // Bouche (sens horaire)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Oeil gauche
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Oeil droite
    ctx.stroke();  */

ctx.beginPath();

//pieds de poutre
ctx.moveTo(100,550);
ctx.lineTo(200,550);

ctx.moveTo(150,550);
ctx.lineTo(150,300);
ctx.lineTo(350,300);
ctx.lineTo(350,345);

ctx.moveTo(200,300);
ctx.lineTo(150,350);

//tête
ctx.moveTo(375,370);
ctx.arc(350,370,25,0,2*Math.PI);

//corps
ctx.moveTo(350,395);
ctx.lineTo(350,470);

//bras
ctx.moveTo(300,380);
ctx.lineTo(350,430);
ctx.lineTo(400,380);

//pieds
ctx.moveTo(300,530);
ctx.lineTo(350,470);
ctx.lineTo(400,530);





ctx.stroke();
ctx.closePath();
