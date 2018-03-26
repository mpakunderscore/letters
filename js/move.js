function move(i, j) {

    destinationX = i;
    destinationY = j;

    moveScreen();
}

function moveTail() {

    //eat letter
    if (typeof map[positionX] !== 'undefined' && typeof map[positionX][positionY] !== 'undefined' && map[positionX][positionY] !== '') {
        positionTailX.unshift(positionX);
        positionTailY.unshift(positionY);
        positionTailZ.unshift(map[positionX][positionY]);

        if (positionTailZ[0] === 'Г' && positionTailZ[1] === 'О' && positionTailZ[2] === 'Б') {

            positionTailX.splice(0, 2);
            positionTailY.splice(0, 2);
            positionTailZ.splice(0, 2);

            // positionTailX.shift();
            // positionTailY.shift();
            // positionTailZ.shift();

            // positionTailZ[0] = 10;

        } else
            return;
    }

    for (let i = positionTailX.length - 1; i > 0; i--) {
        positionTailX[i] = positionTailX[i - 1];
        positionTailY[i] = positionTailY[i - 1];
    }

    positionTailX[0] = positionX;
    positionTailY[0] = positionY;
}

function moveScreen() {

    console.log(positionX + 'x' + positionY);
    console.log(destinationX + 'x' + destinationY);

    if (positionX < destinationX && map[positionX + 1][positionY] === '' || (positionX + 1 === destinationX && positionY === destinationY)) {
        moveTail();
        positionX = positionX + 1;
        moveTimer = setTimeout(moveScreen, timeStep);
        renderGrid();
        smooth('right');
        return;
    }

    if (positionY < destinationY && map[positionX][positionY + 1] === '' || (positionX === destinationX && positionY + 1 === destinationY)) {
        moveTail();
        positionY = positionY + 1;
        moveTimer = setTimeout(moveScreen, timeStep);
        renderGrid();
        smooth('top');
        return;
    }

    if (positionX > destinationX && map[positionX - 1][positionY] === '' || (positionX - 1 === destinationX && positionY === destinationY)) {
        moveTail();
        positionX = positionX - 1;
        moveTimer = setTimeout(moveScreen, timeStep);
        renderGrid();
        smooth('left');
        return;
    }

    if (positionY > destinationY && map[positionX][positionY - 1] === '' || (positionX === destinationX && positionY - 1 === destinationY)) {
        moveTail();
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
        moveTail();
        positionX = positionX + 1;
        renderGrid();
        smooth('right');
    }

    if (event.which === 37) {
        moveTail();
        positionX = positionX - 1;
        renderGrid();
        smooth('left');
    }

    if (event.which === 40) {
        moveTail();
        positionY = positionY + 1;
        renderGrid();
        smooth('top');
    }

    if (event.which === 38) {
        moveTail();
        positionY = positionY - 1;
        renderGrid();
        smooth('bottom');
    }
});