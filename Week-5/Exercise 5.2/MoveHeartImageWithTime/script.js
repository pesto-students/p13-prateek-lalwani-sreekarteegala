const image = document.getElementById('img');

function moveImage(x, y) {
    console.log(x, y);
    // image.style.left += 1;
    // image.style.top = (y + 1) + "px";

    // Calculate the distance and direction to move
    const deltaX = clickX - imgX;
    const deltaY = clickY - imgY;

    // Determine the distance to move in the x and y directions
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

let timerId;

function startAnimation(e) {

    console.log(timerId);
    if (timerId != null) {
        clearInterval(timerId);
    }

    timerId = setInterval(moveImage, 10000, e.clientX, e.clientY);

}

document.addEventListener('click', startAnimation);