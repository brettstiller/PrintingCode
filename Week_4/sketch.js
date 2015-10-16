var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1000,
});

for(j = 10; j<20; j++){
		r.rect(0,j*20,r.width,20)
			.stroke(false)
      .fill('hsv',10, Rune.random(10,50), Rune.random(50,90)) // GOOD
			//.fill('hsv',Rune.random(360), Rune.random(100), Rune.random(100))	// BAD		
	}

for(i = 0; i < 5; i++){

      r.path(0, 250 + i*40)
  			.lineTo(200, 0)
  			.lineTo(250, 100)
  			.lineTo(400, 50)
  			.lineTo(415,10)
  			.lineTo(435,0)
  			.lineTo(500,0)
  			.lineTo(550,200)
  			.lineTo(600,200)
  			.lineTo(680,150)
			  .lineTo(720,200)
  			.lineTo(800,200)
  			.lineTo(800,220)
  			.lineTo(720,220)
  			.lineTo(680,170)
  			.lineTo(600,220)
  			.lineTo(550,220)
  			.lineTo(500,20)
  			.lineTo(435,20)
  			.lineTo(415,30)
  			.lineTo(400,70)
  			.lineTo(250,120)
  			.lineTo(200,20)
  			.lineTo(0,20)
  			.stroke(false)
        .fill('hsv',110, Rune.random(50,90), Rune.random(10,50)) // GOOD
  			//.fill('hsv',Rune.random(360), Rune.random(100), Rune.random(100)) // BAD
  }


r.draw();