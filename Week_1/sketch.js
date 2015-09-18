var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 800,
  debug: true
});

r.circle(400,300,100,100)
.fill(0)
.stroke(0)

r.rect(290,290,170,120)
.fill(255)
.stroke(false)

r.triangle(300, 300, 300, 600, 450, 340)
  .fill(0)
  .stroke(0)



r.draw();
