const board = document.getElementById('board');
let patterneven = " <div class='esquare'></div>" ;
let patternodd = " <div class='osquare'></div>" ;

for(i=0;i<4;i++){
	board.innerHTML += patterneven.repeat(8);
	board.innerHTML += patternodd.repeat(8);
}






