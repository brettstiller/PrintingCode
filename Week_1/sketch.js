var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

r.ellipse(400,300,200,200)
	.fill(0)
	.stroke(0)

r.rect(290,340,170,80)
	.fill(255)
	.stroke(false)

r.triangle(300, 350, 300, 625, 450, 350)
  	.fill(0)
  	.stroke(0)



r.draw();
