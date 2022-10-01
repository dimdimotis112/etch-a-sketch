const divContainer = document.querySelector(".div-container");
console.log(divContainer);

for (let i = 0; i < 16; i++) {
    const rowHolder = document.createElement("div");
    rowHolder.style.display = "flex";
    rowHolder.style.justifyContent = "center";
    for (let j = 0; j < 16; j++) {
        const container = document.createElement("div");
        container.style.flex = "1"; // sets width to take up the whole width it can.
        container.style.aspectRatio = "1 / 1"; // sets squares to be same width and heigth.
        container.addEventListener("mouseover", changeColor); // So the user can change the color of the square when hovered over.
        rowHolder.appendChild(container);
    } 
    divContainer.appendChild(rowHolder);
}   


function changeColor() {
    this.style.backgroundColor = "black";
}