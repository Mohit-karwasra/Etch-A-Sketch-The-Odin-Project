const container = document.createElement("div");
container.className = "container";
document.querySelector("body").append(container);
container.style.width = "750px";
container.style.height = "750px";

const buttonContainer = document.createElement("div");
buttonContainer.className = "buttonContainer";
document.querySelector("body").append(buttonContainer);

const btnRandomColor = document.createElement("button");
btnRandomColor.className = "random-color-button";
btnRandomColor.innerText = "Random Color";
document.querySelector(".buttonContainer").append(btnRandomColor);

const btnDefaultColor = document.createElement("button");
btnDefaultColor.className = "default-color-button";
btnDefaultColor.innerText = "Default Color";
document.querySelector(".buttonContainer").append(btnDefaultColor);

const resetBtn = document.createElement("button");
resetBtn.className = "reset-button";
resetBtn.innerText = "Reset Background";
document.querySelector(".buttonContainer").append(resetBtn);

const eraserBtn = document.createElement("button");
eraserBtn.className = "eraser-button";
eraserBtn.innerText = "Eraser";
document.querySelector(".buttonContainer").append(eraserBtn);

function makeGrid(rows, cols) {
	container.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${cols}, 1fr)`;
	let gridSize = rows * cols;
	for (let c = 0; c < gridSize; c++) {
		let cell = document.createElement("div");
		container.appendChild(cell).className = "grid-item";
	}
}

document.querySelector(".setPixels").addEventListener("click", () => {
	const input = Number(document.getElementById("userInput").value);
	makeGrid(input, input);
	resetGrid();
	defaultColor();
});

document.querySelector(".random-color-button").addEventListener("click", () => {
	colorFull();
});

document.querySelector(".default-color-button").addEventListener("click", () => {
	defaultColor();
});

document.querySelector(".reset-button").addEventListener("click", () => {
	resetGrid();
});

document.querySelector(".eraser-button").addEventListener("click", () => {
	eraser();
});

function defaultColor() {
	[...document.querySelectorAll(".grid-item")].forEach(function (item) {
		item.addEventListener("mouseover", function () {
			item.style.backgroundColor = "black";
		});
	});
}

function eraser() {
	[...document.querySelectorAll(".grid-item")].forEach(function (item) {
		item.addEventListener("mouseover", function () {
			item.style.backgroundColor = "white";
		});
	});
}

function colorFull() {
	[...document.querySelectorAll(".grid-item")].forEach(function (item) {
		item.addEventListener("mouseover", function () {
			item.style.backgroundColor = newColorFind();
		});
	});
}

function resetGrid() {
	[...document.querySelectorAll(".grid-item")].forEach((item) => {
		item.style.backgroundColor = "white";
	});
}

const arrayOfColorFunctions = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
];

function newColorFind() {
	let randomColorString = "#";
	for (let x = 0; x < 6; x++) {
		let index = Math.floor(Math.random() * 16);
		let value = arrayOfColorFunctions[index];

		randomColorString += value;
	}
	console.log(randomColorString);
	return randomColorString;
}
