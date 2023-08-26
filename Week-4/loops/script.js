let asterisk = "*"
let triangleSize = prompt("Enter the size of triangle");
const outputContainer = document.getElementById('output');

function drawTriangle(triangleSize) {
    for (let i = 1; i <= triangleSize; i++) {
        let output = asterisk;

        for (j = 1; j <= i; j++) {
            if (j == i) {
                console.log(output)
                let newLine = document.createElement("p");

                newLine.textContent = output;
                outputContainer.appendChild(newLine);
            }

            output = output + asterisk;
        }
    }
}

drawTriangle(triangleSize);
