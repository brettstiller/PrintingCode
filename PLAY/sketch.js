

var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

var shape = r.polygon(0,0)
	.lineTo(0,0)
	.lineTo(600,50)
	.lineTo(400,80)
	.lineTo(10,100)

var midway = shape.vectorAt(0.5);
	r.circle(midway.x, midway.y,10);



r.draw();
