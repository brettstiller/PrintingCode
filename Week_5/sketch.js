var r = new Rune({
  container: "#canvas",
  width: 1800,
  height: 900,
})

  var numPleats =  Rune.random(2,5);
  var angle = 60 / numPleats;
  var radius = 180;

  for(i = 0; i < numPleats; i++){

    var curAngle = i * angle;
    var x = Math.cos(Rune.radians(curAngle)) * radius;
    var y = Math.sin(Rune.radians(curAngle)) * radius;

    
    var P = r.group(50,100);
      r.triangle(0,50,0,150,x-55,y*3,P)
      .fill(false)

    var E = r.group(190,100);
     r.triangle (20,300, x*1.2, y-10, 40,190,E)
     .fill(false)

    var A = r.group(290,100);
      r.triangle(250,300,x+5,y+15,100,400,A)
      .fill(false)

    var K = r.group(600,100);
      r.triangle(0,50+y+15, 150,300, 130, 90,K)
      .fill(false)
      r.triangle(0, 0, i*20, 250-i, 10, 300, K)
      .fill(false)

    var S = r.group(800,100);
      r.triangle(0,90,x*.8,y,20,50, S)
      .move(0,220)
      .fill(false)
      r.triangle(0,90,x*.8,y,20,50, S)
      .fill(false)
      .rotate(180,70,-10,true)

  }

r.draw();