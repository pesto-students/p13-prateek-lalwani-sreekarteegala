const image = document.getElementById('img');

console.log(image.style.left)
console.log(image.style.top)

function moveImage(x, y) {
    // image.style.left = `${x > 100 ? (x - 100) : x}px`;
    // image.style.top = `${y > 100 ? (y - 100) : y}px`;

    let left = (x - 150) + "px"
    let top = (y - 150) + "px"
    console.log(`translate(${left}, ${top})`)
    image.style.transform = `translate(${left}, ${top})`;
}


document.addEventListener('click', function (e) {
    console.log(e.clientX, e.clientY)

    console.log(image.style.left, image.style.top);

    moveImage(e.clientX, e.clientY);
})

