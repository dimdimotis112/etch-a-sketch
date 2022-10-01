const divContainer = document.querySelector(".div-container");
const button = document.querySelector("#square-button");
const errorParagraph = document.querySelector("#error");

let squareAmount = 16;

createGrid(squareAmount);

button.addEventListener('click', buttonPress);


function changeColor() {
    this.style.backgroundColor = "black";
}

function buttonPress() {
    squareAmount = Number(prompt());
    if (squareAmount <= 100 || squareAmount <= 0) {
        createGrid(squareAmount);
    } else {
        errorParagraph.textContent = "This value can't be used to create the grid!";
    }
}

function createGrid(squares) {
    // clears the grid before making a new one.
    while(divContainer.firstChild) {
        divContainer.removeChild(divContainer.firstChild);
    }

    for (let i = 0; i < squares; i++) {
        const rowHolder = document.createElement("div");
        rowHolder.style.display = "flex";
        rowHolder.style.justifyContent = "center";
        for (let j = 0; j < squares; j++) {
            const container = document.createElement("div");
            container.style.flex = "1"; // sets width to take up the whole width it can.
            container.style.aspectRatio = "1 / 1"; // sets squares to be same width and heigth.
            container.addEventListener("mouseover", changeColor); // So the user can change the color of the square when hovered over.
            rowHolder.appendChild(container);
        }
        divContainer.appendChild(rowHolder);
    }   
}