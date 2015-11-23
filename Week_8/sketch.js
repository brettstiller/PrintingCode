
var r = new Rune({ 
  container: "#canvas",
  width: 800,
  height: 600,
});

var lastX;
var lastY;
var lastDripX;
var lastDripY;

var noiseX = new Rune.Noise();
var noiseY = new Rune.Noise();
var noiseX2 = new Rune.Noise();
var noiseY2 = new Rune.Noise();

function randomCircles(x, y, numCircles, minSize, maxSize, minDist, maxDist)
{
	for (var i = 0; i < numCircles; i++)
	{
		var radius = minSize + Rune.random(maxSize-minSize);
		var offsetX = minDist + Rune.random(maxDist - minDist);
		var offsetY = minDist + Rune.random(maxDist - minDist);
		var flipX = Rune.random(1);
		if (flipX > 0.5) offsetX *= -1;
		var flipY = Rune.random(1);
		if (flipY > 0.5) offsetY *= -1;

		r.ellipse(x + offsetX, y + offsetY, radius, radius)
		 .fill(0)
		 .stroke(false)
	}
}

for(var i = 0; i < 2500; i++) {

	var x = (noiseX.get(i/50) * 1200) - 200;
	var y = (noiseY.get(i/30) * 1000) - 200;

	if (i == 0){
		lastX = x;
		lastY = y;
	}

	var point1 = new Rune.Vector(lastDripX, lastDripY);
	var point2 = new Rune.Vector(x, y);
	var distance = point2.sub(point1).length();

	if(distance > 200)
	{
		var numDrips = Rune.random(5);
		randomCircles(x, y, numDrips,2,10,10,30);
		lastDripX = x;
		lastDripY = y;
	}

	var dx = Math.abs(x - lastX);
	var dy = Math.abs(y - lastY);

	var point3 = new Rune.Vector(x, y);
	var point4 = new Rune.Vector(lastX, lastY);
	var distance2 = Math.abs(point4.sub(point3).length());

	var line = r.line(x, y, point4.x, point4.y)
		.strokeCap("round")
		.strokeJoin("round")
	
	if (distance2 < 5)
	{	
		line.strokeWidth(distance2)

		lastX = x;
		lastY = y;
	}
	else if (distance2 < 10)
	{
		line.strokeWidth(distance2 * 1.2)

		lastX = x;
		lastY = y;
		
	}
	else
	{
		line.strokeWidth(150/ (dx+dy+15))
		
		lastX = x;
		lastY = y;
	}
}

// ADDITION OF RED LINE
// ------------------------------------------------------------------------
// for(var j = 0; j < 500; j++) {

// 	var x2 = (noiseX2.get(j/50) * 1200 - 100);
// 	var y2 = (noiseY2.get(j/50) * 1000 - 290);

// 	if (j == 0){
// 		lastX = x2;
// 		lastY = y2;
// 	}

// 	var point1 = new Rune.Vector(lastDripX, lastDripY);
// 	var point2 = new Rune.Vector(x2, y2);
// 	var distance = point2.sub(point1).length();

// 	if(distance > 200)
// 	{
// 		var numDrips = Rune.random(5);
// 		randomCircles(x2, y2, numDrips,2,10,10,30);
// 		lastDripX = x2;
// 		lastDripY = y2;
// 	}

// 	var dx = Math.abs(x2 - lastX);
// 	var dy = Math.abs(y2 - lastY);

// 	var point3 = new Rune.Vector(x2, y2);
// 	var point4 = new Rune.Vector(lastX, lastY);
// 	var distance2 = Math.abs(point4.sub(point3).length());

// 	var line2 = r.line(x2, y2, point4.x, point4.y)
// 		.strokeCap("round")
// 		.strokeJoin("round")
// 		.strokeWidth(1)
// 		.stroke(255,0,0)
	
// 	if (distance2 < 5)
// 	{	
// 		line2.strokeWidth(distance2)

// 		lastX = x2;
// 		lastY = y2;
// 	}
// 	else if (distance2 < 10)
// 	{
// 		line2.strokeWidth(distance2 * 1.2)

// 		lastX = x2;
// 		lastY = y2;
		
// 	}
// 	else
// 	{
// 		line2.strokeWidth(150/ (dx+dy+15))
		
// 		lastX = x2;
// 		lastY = y2;
// 	}
// }

r.play();
