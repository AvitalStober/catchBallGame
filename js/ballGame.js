
// keep the constance values
const ROW = 11;
const COLUMN = 22;

const board = document.getElementById("board");
let score = 0;
let ballsCounter = 0;
let a;

// print the play board
const createBoard = () => {
    for (let i = 0; i <= ROW; i++) {
        for (let j = ROW + 1; j <= COLUMN; j++) {
            const square = document.createElement("div");
            // add classes to each square
            square.classList.add("class" + i);
            square.classList.add("class" + j);
            square.classList.add("square");
            // add the square to the board
            board.appendChild(square);
        }
    }
}

// get random number in provided range
const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

// start game function
const startGame = () => {

    // hide the start button and show the score
    document.getElementById("startButton").style.visibility = "hidden";
    document.getElementById("score").style.visibility = "visible";

    // Player position on the board
    const kid = document.getElementById("kids");
    const row = getRandomNumber(1, ROW - 1);
    const column = getRandomNumber(ROW + 2, COLUMN - 1);
    const mySquer = document.getElementsByClassName(`class${row} class${column} square`)
    kid.style.visibility = "visible";

    mySquer[0].appendChild(kid);

    // Calling the add ball function every 2 seconds
    addBall();
    a = setInterval(addBall, 2000);

}

// Keyboard arrow click event
document.addEventListener('keydown', (event) => {

    // Getting a player's current location
    const kid = document.getElementById("kids");
    const kidParentClass1 = kid.parentElement.classList[0].slice(5);
    const kidParentClass2 = kid.parentElement.classList[1].slice(5);

    let newParent = {};

    // Making the move
    const movement = {

        ArrowUp: () => {
            // New location for the player and checking if there is a ball there
            if (kidParentClass1 > 1) {
                newParent = document.getElementsByClassName(`class${kidParentClass1 - 1} class${kidParentClass2} square`);
                const hisBall = document.getElementsByClassName(`class${kidParentClass1 - 1} class${kidParentClass2} newBall`);
                newParent[0].appendChild(kid);

                if (hisBall.length > 0) score++;
                while (hisBall.length > 0) {
                    newParent[0].removeChild(hisBall[0]);
                    ballsCounter--;
                }

            } else if (kidParentClass1 == 1 && kidParentClass2 == 17) {
                newParent = document.getElementsByClassName(`class10 class17 square`);
                const hisBall = document.getElementsByClassName(`class10 class17 newBall`);
                newParent[0].appendChild(kid);

                if (hisBall.length > 0) score++;
                while (hisBall.length > 0) {
                    newParent[0].removeChild(hisBall[0]);
                    ballsCounter--;
                }
            }
        },
        ArrowDown: () => {
            // New location for the player and checking if there is a ball there
            if (kidParentClass1 < 10) {
                newParent = document.getElementsByClassName(`class${parseInt(kidParentClass1) + 1} class${kidParentClass2} square`);
                const hisBall = document.getElementsByClassName(`class${parseInt(kidParentClass1) + 1} class${kidParentClass2} newBall`);
                newParent[0].appendChild(kid);

                if (hisBall.length > 0) score++;
                while (hisBall.length > 0) {
                    newParent[0].removeChild(hisBall[0]);
                    ballsCounter--;
                }

            } else if (kidParentClass1 == 10 && kidParentClass2 == 17) {
                newParent = document.getElementsByClassName(`class1 class17 square`);
                const hisBall = document.getElementsByClassName(`class1 class17 newBall`);
                newParent[0].appendChild(kid);

                if (hisBall.length > 0) score++;
                while (hisBall.length > 0) {
                    newParent[0].removeChild(hisBall[0]);
                    ballsCounter--;
                }
            }
        },
        ArrowLeft: () => {
            // New location for the player and checking if there is a ball there
            console.log(kidParentClass2);
            if (kidParentClass2 > 13) {
                newParent = document.getElementsByClassName(`class${kidParentClass1} class${kidParentClass2 - 1} square`);
                const hisBall = document.getElementsByClassName(`class${kidParentClass1} class${kidParentClass2 - 1} newBall`);
                newParent[0].appendChild(kid);

                if (hisBall.length > 0) score++;
                while (hisBall.length > 0) {
                    newParent[0].removeChild(hisBall[0]);
                    ballsCounter--;
                }

            } else if (kidParentClass2 == 13 && (kidParentClass1 == 5 || kidParentClass1 == 6)) {
                newParent = document.getElementsByClassName(`class${kidParentClass1} class21 square`);
                const hisBall = document.getElementsByClassName(`class${kidParentClass1} class21 newBall`);
                newParent[0].appendChild(kid);

                if (hisBall.length > 0) score++;
                while (hisBall.length > 0) {
                    newParent[0].removeChild(hisBall[0]);
                    ballsCounter--;
                }
            }
        },
        ArrowRight: () => {
            // New location for the player and checking if there is a ball there
            if (kidParentClass2 < 21) {
                newParent = document.getElementsByClassName(`class${kidParentClass1} class${parseInt(kidParentClass2) + 1} square`);
                const hisBall = document.getElementsByClassName(`class${kidParentClass1} class${parseInt(kidParentClass2) + 1} newBall`);
                newParent[0].appendChild(kid);

                if (hisBall.length > 0) score++;
                while (hisBall.length > 0) {
                    newParent[0].removeChild(hisBall[0]);
                    ballsCounter--;
                }

            } else if (kidParentClass2 == 21 && (kidParentClass1 == 5 || kidParentClass1 == 6)) {
                newParent = document.getElementsByClassName(`class${kidParentClass1} class13 square`);
                const hisBall = document.getElementsByClassName(`class${kidParentClass1} class13 newBall`);
                newParent[0].appendChild(kid);

                if (hisBall.length > 0) score++;
                while (hisBall.length > 0) {
                    newParent[0].removeChild(hisBall[0]);
                    ballsCounter--;
                }
            }
        }
    };

    // Score update
    document.getElementById("inner").innerText = score;
    if (ballsCounter == 0) win(score);

    if (movement[event.key]) {
        movement[event.key]();
    }

});

// Adding a ball to the board
const addBall = () => {

    ballsCounter++;

    const ballImg = document.getElementById("ball");
    const row = getRandomNumber(1, ROW - 1);
    const column = getRandomNumber(ROW + 2, COLUMN - 1);

    const mySquer = document.getElementsByClassName(`class${row} class${column} square`);
    const myClasses = mySquer[0].className.split(' ');

    // Ball copy
    const newBall = ballImg.cloneNode(true);

    newBall.classList.add(myClasses[0]);
    newBall.classList.add(myClasses[1]);
    newBall.classList.add("newBall");

    newBall.style.visibility = "visible";

    // Add to the board
    mySquer[0].appendChild(newBall);

}

const win = () => {
    // Finish adding the balls
    clearInterval(a);
    // Victory announcement
    document.body.innerHTML = 'YOU ARE THE BEST!!🏆';

}

createBoard();

