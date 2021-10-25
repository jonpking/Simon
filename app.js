const square = document.querySelectorAll(".square");
const startResetBtn = document.querySelector("#startResetBtn");
let colorClicked;
let inputNumber;
let generatedSequence = [];
let timerValue = 100;
let timerInterval;
let round = 1;
let btnState = "start";
const sounds = {
    red: new Audio("sounds/redSound.mp3"),
    blue: new Audio("sounds/blueSound.mp3"),
    green: new Audio("sounds/greenSound.mp3"),
    yellow: new Audio("sounds/yellowSound.mp3")
};

const enableClickable = () => {
    square.forEach(square => {
        square.addEventListener("click", colorClickFunc);
        square.classList.add("active");
    });
};

const disableClickable = () => {
    square.forEach(square => {
        square.removeEventListener("click", colorClickFunc);
        square.classList.remove("active");
    });
};

const colorClickFunc = (event) => {
    // Clicked squares get stored into colorClicked value
    colorClicked = event.target.id;
    // Buttons play audio when clicked
    sounds[colorClicked].play();
    // Call click match function
    checkClickMatch();
};

// Game Setup function
const gameSetup = () => {
    // Generate initial sequence value
    generateNextValue();
    btnState = "reset";
};

const resetGame = () => {
    // Reset values for new game
    clearInterval(timerInterval);
    disableClickable();
    timeout(100).then(() => {
        document.querySelector("#gameOver").classList.add("hidden");
        document.querySelector("#timerBorder").classList.remove("hidden");
        square.forEach(square => {
            square.classList.remove("gameOver");
        });
    });
    generatedSequence = [];
    roundUpdate();
    updateTimerValue(100);
    inputNumber = 0;
    btnState = "start";

};

const startResetFunc = () => {
    startResetBtn.addEventListener("click", function () {
        if (btnState === "start") {
            startResetBtn.innerText = "Reset Game";
            console.log("start text");
            gameSetup();
        } else if (btnState === "reset") {
            startResetBtn.innerText = "Start Game";
            console.log("reset text");
            resetGame();
        };
    });
};

// Generate game sequence to match and store in generatedSequence array
const generateNextValue = () => {
    switch (Math.floor(Math.random() * 4)) {
        case 0:
            generatedSequence.push("red");
            break;
        case 1:
            generatedSequence.push("green");
            break;
        case 2:
            generatedSequence.push("blue");
            break;
        case 3:
            generatedSequence.push("yellow");
            break;
        default:
            break;
    };
    // reset inputNumber
    inputNumber = 0;
    // Display/update score
    roundUpdate();
    disableClickable();
    // clear previous timer
    clearInterval(timerInterval);
    updateTimerValue(100);
    // call demo function
    demoSequence().then(() => {
        // call timer function
        countdownTimer();
        enableClickable();
    });
};

// Check if click matches
const checkClickMatch = () => {
    // check if click matches current index of generatedSequence
    if (colorClicked === generatedSequence[inputNumber]) {
        // if yes >
        // clear previous timer
        clearInterval(timerInterval);
        // start new timer
        updateTimerValue(100);
        countdownTimer();
        // increment inputNumber
        inputNumber++;
        // call sequence complete function
        checkSequenceComplete();
    } else {
        // if no > call game over function
        gameOver();
    };
};

// Check if sequence complete
const checkSequenceComplete = () => {
    // check if inputNumber and index generatedSequence match
    if (inputNumber === generatedSequence.length) {
        // if yes > call generateNextValue    
        generateNextValue();
    };
    // if no > do nothing
};

const demoSequence = () => {
    return new Promise(async resolve => {
        // iterate over generatedSequence
        // dislay each value in generatedSequence array to player
        for (let i = 0; i < generatedSequence.length; i++) {
            selectedSquare = document.getElementById(generatedSequence[i]);
            await timeout(250);
            selectedSquare.classList.add("selected");
            await timeout(500);
            selectedSquare.classList.remove("selected")
            if (i + 1 === generatedSequence.length) {
                resolve();
            };
        };
    });
};

const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

// Timer function
const countdownTimer = () => {
    // setup and run timer
    timerInterval = setInterval(function () {
        updateTimerValue(timerValue - generatedSequence.length * .5);
        // if timer runs out call game over function
        if (timerValue <= 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 100);
};

const updateTimerValue = (value) => {
    timerValue = value;
    document.querySelector("#timer").style["width"] = timerValue + "%";
};

// Game over function
const gameOver = () => {
    disableClickable();
    timeout(100).then(() => {
        document.querySelector("#gameOver").classList.remove("hidden");
        document.querySelector("#timerBorder").classList.add("hidden");
        square.forEach(square => {
            square.classList.add("gameOver");
        });
    });
};

const roundUpdate = () => {
    round = generatedSequence.length;
    document.querySelector("#round").innerText = round;
};

startResetFunc();
