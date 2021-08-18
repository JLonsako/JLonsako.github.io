var gameMode = 6;
var colors = generateRandomColors(gameMode);
var goalColor = pickColor();
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("chosenColor");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	gameMode = 3;
	colors = generateRandomColors(gameMode);
	goalColor = pickColor();
	colorDisplay.textContent = goalColor;
	
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	gameMode = 6;
	colors = generateRandomColors(gameMode);
	goalColor = pickColor();
	colorDisplay.textContent = goalColor;
	
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
})

resetButton.addEventListener("click", function(){
	colors = generateRandomColors(gameMode);
	goalColor = pickColor();
	colorDisplay.textContent = goalColor;
	h1.style.backgroundColor = "steelblue";
	
	messageDisplay.textContent = "";
	this.textContent = "New Colors";
	
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
})
	
colorDisplay.textContent = goalColor;
for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	console.log(colors[i]);
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor);
		if(clickedColor == goalColor)
		{
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			resetButton.textContent = "Play Again!";
			h1.style.backgroundColor = clickedColor;
		}
		
		else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];
	
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	
	return arr;
}


function randomColor(){
		var red = Math.floor(Math.random() * 255);
		var green = Math.floor(Math.random() * 255);
		var blue = Math.floor(Math.random() * 255);
		return "rgb(" + red + ", " + green + ", " + blue + ")";
	
}