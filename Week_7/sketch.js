var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1000,
  debug: false
});

 for (i = 0; i<200; i++){
	 bezierX = Rune.random(i-100,i+20)
	 bezierY = Rune.random(i)


}
var ribbon = r.path(400,200)
	.curveTo(bezierX, bezierY,-40,200)
	.lineTo(-100,200)
	.curveTo(bezierX, bezierY,50,0)
	.closePath()

	.fill(51,86,127) 	//MAINSTAGE
	.stroke(false)

	//.fill(77,128,191) 	//DEVELOPMENT

	//.fill(false) 		//EDUCATION
	

var text = r.group(200,0)

var sydney = r.text("Sydney",100,215,text)
.fontFamily('Merriweather')
.fontSize(24)

.fill(0) 				//MAINSTAGE & DEVELOPMENT

//.fill(255,0,0) 			// EDUCATION
//.stroke(255,0,0) 	

var theatre = r.text("Theatre",100,245,text) 
.fontFamily('Merriweather')
.fontSize(24)

.fill(0) 				// MAINSTAGE & DEVELOPMENT

//.fill(0,255,0) 			//EDUCATION
//.stroke(0,255,0) 	

var company = r.text("Company",100,275,text)
.fontFamily('Merriweather')
.fontSize(24)

.fill(0) 				// MAINSTAGE & DEVELOPMENT

//.fill(255,255,0) 			// EDUCATION
//.stroke(255,255,0) 	

r.draw();

