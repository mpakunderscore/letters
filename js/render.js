let time = new Date().getMilliseconds();

let startRender = function (direction) {

    console.log('startRender');

    time = new Date().getMilliseconds();

    document.getElementById('grid').classList.add(direction);
}

function renderGrid() {

    console.log('renderGrid');

    console.log(new Date().getMilliseconds() - time);

    let size = cellSize;

    document.body.innerHTML = '';

    var ratioW = Math.floor((window.innerWidth || document.documentElement.offsetWidth) / size),
        ratioH = Math.floor((window.innerHeight || document.documentElement.offsetHeight) / size);

    // console.log(ratioW % 2 === 0);

    if (ratioW % 2 === 0) {
        ratioW = ratioW - 1;
    }

    if (ratioH % 2 === 0) {
        ratioH = ratioH - 1;
    }

    let centerX = parseInt(ratioW/2);
    let centerY = parseInt(ratioH/2);

    // console.log('ratioW: ' + ratioW)
    // console.log('ratioW: ' + ratioH)

    grid = document.createElement('div');
    grid.id = 'grid';

    grid.addEventListener("animationend", function() {renderGrid()});

    grid.style.width = (ratioW * size) + 'px';
    grid.style.height = (ratioH * size) + 'px';

    let center;

    for (let j = 0; j < ratioH; j++) {

        for (let i = 0; i < ratioW; i++) {

            let cell = document.createElement('div');
            // cell.style.height = (size) + 'px';
            // cell.style.width = (size) + 'px';
            // cell.style['line-height'] = (size) + 'px';
            cell.classList.add('cell');
            cell.id = i + 'x' + j;
            cell.onclick = function() { move(i + positionX - centerX, j + positionY - centerY); };

            let letter = '';
            if (typeof map[i + positionX - centerX] !== 'undefined' && typeof map[i + positionX - centerX][j + positionY - centerY] !== 'undefined')
                letter = map[i + positionX - centerX][j + positionY - centerY];

            cell.innerHTML = letter;

            if (letter.length > 1)
                cell.classList.add('item');

            //center
            if (i === centerX && j === centerY) {
                // console.log(i + ' ' + j)
                center = cell;
                // center.innerHTML = '';
                center.setAttribute("contenteditable", "true");
                center.classList.add('center');
            }

            //tail
            for (let t = 0; t < positionTailX.length; t++) {

                if (i + positionX - centerX === positionTailX[t] && j + positionY - centerY === positionTailY[t]) {
                    // console.log(i + ' ' + j)
                    // center = cell;
                    // center.setAttribute("contenteditable", "true");
                    cell.innerHTML = positionTailZ[t];
                    cell.classList.add('tail');
                }
            }


            if (i + positionX - centerX === destinationX && j + positionY - centerY === destinationY) {
                // console.log(i + ' ' + j)
                cell.classList.add('destination');
            }

            grid.appendChild(cell);
        }
    }



    document.body.appendChild(grid);

    // grid.classList.add('render');
}

function smooth(direction) {

    return;
    // grid.style['padding-right'] = '33px';
    grid.classList.add(direction);
}

renderGrid();