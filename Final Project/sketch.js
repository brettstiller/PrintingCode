var r = new Rune({ 
  container: "#canvas",
  width: 850,
  height: 600,
});


//	LOAD FONT/TEXT, TURN INTO POLYGONS AND INFECT
//	-----------------------------------------------------------------
var font = new Rune.Font("SF_Bold.ttf");

font.load(function(err){
	var path = font.toPath("Hello, World!", 10, r.height/2, 120)
	.fill(0)
	.stroke(false)

	r.stage.add(path);

	var polys = path.toPolygons({ spacing: 1}, false);

	for(var i = 0; i < polys.length; i++){
	 	var letters = polys[i];

	 	drawInfection(letters);
	}

	r.draw();

});


//	SET PERCENTAGE OF POSSIBLE INFECTION
//	-----------------------------------------------------------------
var infectionThreshold = 5;


//	CREATE CELL OBJECT
//	-----------------------------------------------------------------

function Cell()
{
	this.x = 0;
	this.y = 0;
	this.infected = false;
	this.neighbours = [];
}

Cell.prototype = {

	setPosition: function(_i, _j)
	{
		this.x = _i;
		this.y = _j;
	},

	infect: function(a)
	{
		this.infected = true;
		this.infectionSize = 1;
	},

	diseaseAesthetics: function()
	{
		if(this.infected == true)
		{	
			if (this.infectionSize == 1)
			{

				r.rect(this.x - this.infectionSize/2, this.y - this.infectionSize/2, this.infectionSize * 2, this.infectionSize * 2)
				.fill(255)
				.stroke(false)

			}

			else if (this.infectionSize == 2)
			{

				r.rect(this.x - this.infectionSize/2, this.y - this.infectionSize/2, this.infectionSize * 2, this.infectionSize * 2)
				.fill(255)
				.stroke(false)

				for (var i = 0; i < 2; i++){
					r.rect(this.x - this.infectionSize/2, this.y - this.infectionSize/2, i * 50, i * 50)
						 .fill(false)
						 .stroke(0)
						 .strokeWidth(0.1)
						 .rotate(-90, this.x, this.y)
						}
				r.rect(this.x + 1, this.y + 1, 2 + i/2, 2 +i/2)
					.fill(0)
					.stroke(false)
					.strokeWidth(0.5)

			}else
			{

				r.rect(this.x - this.infectionSize/2, this.y - this.infectionSize/2, this.infectionSize * 2, this.infectionSize * 2)
				.fill(255)
				.stroke(false)

				for(var i = 0; i < 2; i++){
					if(i % 2 == 0){
						r.rect(this.x - this.infectionSize/2, this.y - this.infectionSize/2, 20 + i * 50, 20 + i * 50)
						 .fill(false)
						 .stroke(Rune.random(255))
						 .strokeWidth(Rune.random(0.5))
						 .rotate(45, this.x, this.y)
						}
					
				}
					r.line(this.x - 1, this.y, this.x + 1, this.y)
					.strokeWidth(0.5)
					.rotate(45, this.x, this.y)
					r.line(this.x, this.y - 1, this.x, this.y + 1)
					.strokeWidth(0.5)
					.rotate(45, this.x, this.y)
			}
		}
	}
}


function drawInfection(text){

	var cellArray = [];

	for(var i = 0; i < r.width; i += 5){
			for(var j = 0; j <r.height; j += 5){
				if(text.contains(i,j)){

					var thisCell = new Cell();

					thisCell.setPosition(i, j);

					cellArray.push(thisCell);
				}
			}
		}


//	MANAGE THE INFECTION
//	--------------------------------------------------------------------------------------------------------------

	for (var i = 0; i < cellArray.length; i++){

			var chance = Rune.random(0,100);
			
			if (chance < infectionThreshold){

				cellArray[i].infect();
			}
	}

	for(var i = 1; i < cellArray.length - 1; i++) {

		var neighbourLeft = cellArray[i-1];
		var neighbourRight = cellArray[i+1];

		 if(neighbourLeft.infected) cellArray[i].infectionSize++;
		 if(neighbourRight.infected) cellArray[i].infectionSize++;

		cellArray[i].diseaseAesthetics();
	}

	infectionThreshold += 5;
}