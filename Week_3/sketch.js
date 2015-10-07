var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1035.29,
});

// SHARP
for(var i = 0; i < 20; i++) {
	r.polygon(400, Rune.random(0, 1000))
		.lineTo(0, 0)
		.lineTo(0, Rune.random(20, 78))
		.lineTo(Rune.random(-50, -400), Rune.random(-200, 200))
		.stroke(false)
		.fill(0);
}

// WET
var wet = r.path(550,0)
	.lineTo(150,0)
	.curveTo(300,10,300,90,0,40)
	.curveTo(-150,10,-200,25,0,75)
	.curveTo(50,90,0,110)
	.curveTo(-100,150,0,200)
	.curveTo(100,250,-15,280)
	.curveTo(-250,350,-50,380,50,310)
	.curveTo(100,280,100,360,50,340)
	.curveTo(20,325,10,390,60,360)
	.curveTo(300,220,300,500,100,430)
	.curveTo(40,400,100,400,150,440)
	.curveTo(100,420,200,550,-40,445)
	.curveTo(-100,775,0,730)

	.curveTo(100,690,110,825,-75,789)
	.curveTo(-160,780,-100,850,0,900)
	.curveTo(100,950,0,1035.29)
	.lineTo(-150,1035.29)
	.lineTo(-150,0)
	.closePath()
	.stroke(false)
	.fill(0);



r.draw();


