let mapX = 2000;
let mapY = 2000;
let map = [mapX];

let positionX = 10;
let positionY = 10;

let positionTailX = [11, 12, 13, 13];
let positionTailY = [10, 10, 10, 11];
let positionTailZ = ['<span title="Вас не видно">👓</span>', '🔪', '⚠', 4];

let destinationX;
let destinationY;

let moveTimer;

let cellSize = 33;

let timeStep = 100;

let grid;

function generateMap() {

    // let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    let possible = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";

    // possible += "abcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < mapX; i++) {
        map[i] = [mapY];
        for (let j = 0; j < mapY; j++) {

            let random = Math.random() * 140;
            map[i][j] = '';

            let count = 0;

            if (typeof map[i - 1] !== 'undefined') {

                if (map[i - 1][j] !== '') {
                    random = random + 5;
                    count++;
                }

                if (typeof map[i - 1][j - 1] !== 'undefined') {

                    if (map[i - 1][j - 1] !== '') {
                        random = random + 10;
                        count++;
                    }
                }
            }

            if (typeof map[i][j - 1] !== 'undefined') {
                random = random + 5;
                count++;
            }

            random = random + count * 5;

            if (random > 130)
                map[i][j] = possible.charAt(Math.floor(Math.random() * possible.length));

            // if (random > 150)
            //     map[i][j] = '<span>&#' + (9728 + Math.floor(Math.random() * 200)) + ';</span>';
        }
    }
}

generateMap();

