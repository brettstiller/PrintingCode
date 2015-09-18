var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

r.circle(400,300,100,100)
	.fill(0)
	.stroke(0)

r.rect(290,340,170,80)
	.fill(255)
	.stroke(false)

r.triangle(300, 350, 300, 650, 450, 350)
  	.fill(0)
  	.stroke(0)



r.draw();
