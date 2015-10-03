var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1035.29,
  debug: true
});

r.rect(0,0,r.width,r.height)
	.fill(0);

for(var i=0; i<50;i++){
	r.circle(Rune.random(r.width), Rune.random(r.height), Rune.random(5))
		.fill(255);
}

var myPin = r.group(Rune.random(-350, 350),Rune.random(-400,400))

r.circle(r.width/2,r.height/2, 50, myPin)
	.stroke(0)
	.fill(255);

r.triangle(r.width/2-44.8, r.height/2+21, r.width/2+44.8, r.height/2+21, r.width/2, r.height/2+100, myPin)
	.fill(255)
	.stroke(false);

r.circle(r.width/2,r.height/2,30, myPin)
	.stroke(0)
	.fill(0);


r.draw();


