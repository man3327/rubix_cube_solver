const colors = ["white", "red", "blue", "green", "orange", "yellow"];

const cubeContainer = document.getElementById("cube-container");

// 6 faces × 9 squares
const cubeState = Array.from({ length: 6 }, () => Array(9).fill(null));

function createCube() {
    for (let face = 0; face < 6; face++) {
        const faceDiv = document.createElement("div");
        faceDiv.className = "face";

        for (let i = 0; i < 9; i++) {
            const square = document.createElement("div");
            square.className = "square";
            square.dataset.face = face;
            square.dataset.index = i;
            square.dataset.colorIndex = -1;

            square.addEventListener("click", () => {
                let nextColor =
                    (parseInt(square.dataset.colorIndex) + 1) % colors.length;

                square.dataset.colorIndex = nextColor;
                square.style.backgroundColor = colors[nextColor];
                cubeState[face][i] = colors[nextColor];
            });

            faceDiv.appendChild(square);
        }

        cubeContainer.appendChild(faceDiv);
    }
}

document.getElementById("solveBtn").addEventListener("click", () => {
    console.log("Current Cube State:", cubeState);
    alert("Solve logic will come next 🚀");
});

createCube();
