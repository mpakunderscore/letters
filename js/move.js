function move(i, j) {

    destinationX = i;
    destinationY = j;

    moveScreen();
}

function moveScreen() {

    console.log(positionX + 'x' + positionY);
    console.log(destinationX + 'x' + destinationY);

    if (positionX < destinationX && map[positionX + 1][positionY] === '' || (positionX + 1 === destinationX && positionY === destinationY)) {
        positionX = positionX + 1;
        moveTimer = setTimeout(moveScreen, timeStep);
        renderGrid();
        smooth('right');
        return;
    }

    if (positionY < destinationY && map[positionX][positionY + 1] === '' || (positionX === destinationX && positionY + 1 === destinationY)) {
        positionY = positionY + 1;
        moveTimer = setTimeout(moveScreen, timeStep);
        renderGrid();
        smooth('top');
        return;
    }

    if (positionX > destinationX && map[positionX - 1][positionY] === '' || (positionX - 1 === destinationX && positionY === destinationY)) {
        positionX = positionX - 1;
        moveTimer = setTimeout(moveScreen, timeStep);
        renderGrid();
        smooth('left');
        return;
    }

    if (positionY > destinationY && map[positionX][positionY - 1] === '' || (positionX === destinationX && positionY - 1 === destinationY)) {
        positionY = positionY - 1;
        moveTimer = setTimeout(moveScreen, timeStep);
        renderGrid();
        smooth('bottom');
        return;
    }

    destinationX = null;
    destinationY = null;
}

document.addEventListener("keydown", function(event) {

    // console.log(event.which);

    if (event.which === 39) {
        positionX = positionX + 1;
        renderGrid();
        smooth('right');
    }

    if (event.which === 37) {
        positionX = positionX - 1;
        renderGrid();
        smooth('left');
    }

    if (event.which === 40) {
        positionY = positionY + 1;
        renderGrid();
        smooth('top');
    }

    if (event.which === 38) {
        positionY = positionY - 1;
        renderGrid();
        smooth('bottom');
    }
});