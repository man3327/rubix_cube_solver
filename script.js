// Cube represented as a simple face (3x3)
// Later you can extend to full 6 faces
let cube = Array(9).fill("white");

function renderCube() {
    const cubeDiv = document.getElementById("cube");
    cubeDiv.innerHTML = "";

    cube.forEach(color => {
        const div = document.createElement("div");
        div.className = "square";
        div.style.backgroundColor = color;
        cubeDiv.appendChild(div);
    });
}

function move(type) {
    // Skeleton for moves
    console.log("Move:", type);

    // Example dummy rotation
    cube.push(cube.shift());
    renderCube();
}

function shuffle() {
    for (let i = 0; i < 20; i++) {
        move("random");
    }
}

function resetCube() {
    cube = Array(9).fill("white");
    renderCube();
}

// Initial render
renderCube();
