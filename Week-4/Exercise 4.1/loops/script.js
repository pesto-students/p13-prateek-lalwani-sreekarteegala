function drawTriangle() {
    const asterisk = "*"
    const triangleSize = prompt("Enter the size of triangle");
    const outputContainer = document.getElementById('output');

    if (triangleSize === null || triangleSize.trim() === "") {
        let data = document.createElement("p");

        data.innerHTML = "No input provided.";
        data.style.color = "red";
        outputContainer.appendChild(data);

        console.log("No input provided.");
        return;
    }

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

drawTriangle();
