var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");



// draw a circle
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

// draw text
ctx.font = "30px Arial";
ctx.fillText("Matt & Kait's Pub", 10, 150);


// write an image
var img = document.getElementById("bar");
ctx.drawImage(img, 250, 150);
