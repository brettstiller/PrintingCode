var r = new Rune({
  container: "#canvas",
  width: 800,
  height: 1000,
  debug: false
})

r.rect(0,0,r.width,r.height)
.fill(191,6,0)
.stroke(false)


var margin = 10;

var myGrid = r.grid({
  x: margin,
  y: margin,
  columns: 3,
  rows: 5,
  gutter: 20,
  width: r.width - (margin*2),
  height: r.height - (margin*2)


});

var roofPointX = Rune.random(30,170)
var roofPointY = Rune.random(-150,-180)

for(i = 0; i<11; i++){
	var house = r.path(0,180)
	.lineTo(0,-90)
	.lineTo(roofPointX,roofPointY)
	.lineTo(247,-90)
	.lineTo(247,0)
	.closePath()
	.fill(false)
	.strokeWidth(3)
	.stroke(255)

var selectedCols = [1, 2, 3];
var selectedRows = [1, 2, 3, 4, 5];

var randomCol = selectedCols[Math.floor(Rune.random(selectedCols.length))];
var randomRow = selectedRows[Math.floor(Rune.random(selectedRows.length))];

myGrid.add(house,randomCol, randomRow)
}

var title = "The House on Haunted Hill";
var splitTitle = title.split(" ")

var selectedCols = [1, 2, 3];
var selectedRows = [1, 2, 3, 4, 5];

for(var i = 0; i < splitTitle.length; i++) {
  
  var word = splitTitle[i];

  var randomCol = selectedCols[Math.floor(Rune.random(selectedCols.length))];

  var textWord = r.text(word, 5, 175)
    .fontSize(72)
    .fill(0)
    .fontFamily('Anton')

  myGrid.add(textWord, randomCol, i+1);

  }

  var author = r.text("A Novel by Shirley Jackson",15,20)
	.fontFamily('Anton')
	.fontSize(20)
	.fill(255)
	.stroke(false)

	myGrid.add(author,randomCol,randomRow);

var myGrid2 = r.grid({
	x: margin,
  	y: margin,
  	columns: 2,
  	rows: 5,
  	gutter: 20,
  	width: r.width - (margin*2),
  	height: r.height - (margin*2)

})

var hauntedHouse = r.path(55,160)
	.lineTo(0,-90)
	.lineTo(roofPointX,roofPointY)
	.lineTo(247,-90)
	.lineTo(247,0)
	.closePath()
	.fill(false)
	.strokeWidth(4)
	.stroke(0)

var selectedCols = [1, 2];
var selectedRows = [1, 2, 3, 4, 5];

var randomCol = selectedCols[Math.floor(Rune.random(selectedCols.length))];
var randomRow = selectedRows[Math.floor(Rune.random(selectedRows.length))];


	myGrid2.add(hauntedHouse,randomCol,randomRow)

r.draw();