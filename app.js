const square = document.querySelectorAll(".square");
let colorClicked;
let inputNumber;
const generatedSequence = [];
let timerCount;
let timer;


// Game Setup function
const gameSetup = () => {
    // Generate initial sequence value
    generateNextValue();
    // Clicked squares get stored into colorClicked value
    square.forEach(square => {
        square.addEventListener("click", event => {
            colorClicked = event.target.id;
            // call click match function
            checkClickMatch();
        });
    });
    // call timer function
    countdownTimer(1000);
}


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
    }
    console.log(generatedSequence);
    // reset inputNumber
    inputNumber = 0;
    // call demo function
    demoSequence();
};


// Check if click matches
const checkClickMatch = () => {
    // check if click matches current index of generatedSequence
    if (colorClicked === generatedSequence[inputNumber]) {
        // if yes >
        // clear previous timer
        clearInterval(timer);
        // start new timer
        countdownTimer(1000);
        // call sequence complete function
        console.log("correct match");
        // increment inputNumber
        inputNumber++;
        // call sequence complete function
        checkSequenceComplete();
    } else {
        // if no > game over
        console.log("game over");
        // call game over function
    }
};


// Check if sequence complete
const checkSequenceComplete = () => {
    // check if inputNumber and index generatedSequence match
    if (inputNumber === generatedSequence.length) {
        // if yes > call generateNextValue    
        generateNextValue();
    }
    // if no > do nothing
};


// Demo function
const demoSequence = () => {
    // iterate over generatedSequence
    // dislay each value in generatedSequence array to player
    generatedSequence.forEach((selection, i) => {
        setTimeout(() => {
            selectedSquare = document.getElementById(selection);
            console.log("selection", selection);
            setTimeout(() => {
                selectedSquare.classList.add("selected");
                console.log("selected");
            }, 250);
            setTimeout(() => {
                selectedSquare.classList.remove("selected")
                console.log("de-selected");
            }, 500);
        }, i * 750);
    });
    // generatedSequence.forEach(selection => {
    //     selectedSquare = document.getElementById(selection);
    //     console.log(selection);
    //     selectedSquare.classList.add("selected");
    //     setTimeout(() => { selectedSquare.classList.remove("selected") }, 500);
    // });
}


// Timer function
const countdownTimer = (timerInterval) => {
    // reset timer
    timerCount = 5;
    document.querySelector("#timer").innerText = timerCount;

    // setup and run timer
    timer = setInterval(function () {
        timerCount--;
        document.querySelector("#timer").innerText = timerCount;
        // if timer runs out call game over function
        if (timerCount < 1) {
            clearInterval(timer);
            // call game over function
        }
    }, timerInterval);
};


// Game over function

gameSetup();
