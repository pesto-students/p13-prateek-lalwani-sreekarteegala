function calcWordFrequencies() {
    const sentence = prompt("Enter the text to Calculate Word Frequency");
    const element = document.getElementById("output");

    if (sentence === null || sentence.trim() === "") {
        let data = document.createElement("p");

        data.innerHTML = "No input provided.";
        data.style.color = "red";
        element.appendChild(data);

        console.log("No input provided.");
        return;
    }

    const words = sentence.trim().split(' ');
    const wordMap = new Map();

    for (const word of words) {
        const lowercaseWord = word.toLowerCase();

        if (wordMap.has(lowercaseWord))
            wordMap.set(lowercaseWord, wordMap.get(lowercaseWord) + 1);
        else
            wordMap.set(lowercaseWord, 1);

    }

    for (const [word, frequency] of wordMap) {
        let data = document.createElement("p");

        console.log(`${word} ${frequency}`);

        data.innerHTML = `${word} ${frequency}`;
        element.appendChild(data)
    }
}

calcWordFrequencies()