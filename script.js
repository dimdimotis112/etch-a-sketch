const divContainer = document.querySelector(".div-container");
console.log(divContainer);

for (let i = 0; i < 16; i++) {
    const rowHolder = document.createElement("div");
    rowHolder.style.display = "flex";
    rowHolder.style.justifyContent = "center";
    for (let j = 0; j < 16; j++) {
        const container = document.createElement("div");
        container.style.width = "50px";
        container.style.height = "50px";
        rowHolder.appendChild(container);
    } 
    divContainer.appendChild(rowHolder);
}