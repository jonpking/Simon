const square = document.querySelectorAll(".square");
let colorClicked;
let inputNumber;
const generatedSequence = [];
let countdownTimerDisplayValue;
let countdownTimerDisplay;


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
    // clear previous timer
    clearInterval(countdownTimerDisplay);
    // call demo function
    demoSequence().then(() => {
        // call timer function
        countdownTimer(1000);
    });
};


// Check if click matches
const checkClickMatch = () => {
    // check if click matches current index of generatedSequence
    if (colorClicked === generatedSequence[inputNumber]) {
        // if yes >
        // clear previous timer
        clearInterval(countdownTimerDisplay);
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
// const demoSequence = () => {
//     return new Promise(resolve => {
//         // iterate over generatedSequence
//         // dislay each value in generatedSequence array to player
//         generatedSequence.forEach((selection, i) => {
//             setTimeout(() => {
//                 selectedSquare = document.getElementById(selection);
//                 console.log("selection", selection);
//                 setTimeout(() => {
//                     selectedSquare.classList.add("selected");
//                     console.log("selected");
//                 }, 250);
//                 setTimeout(() => {
//                     selectedSquare.classList.remove("selected")
//                     console.log("de-selected");
//                 }, 500);
//                 if (i + 1 === generatedSequence.length) {
//                     resolve();
//                 }
//             }, i * 750);
//         });
//     });
// }

const demoSequence = () => {
    return new Promise(async resolve => {
        // iterate over generatedSequence
        // dislay each value in generatedSequence array to player
        for (let i = 0; i < generatedSequence.length; i++) {
            selectedSquare = document.getElementById(generatedSequence[i]);
            // console.log("selection", generatedSequence[i]);
            await timeout(250);
            selectedSquare.classList.add("selected");
            // console.log("selected");
            await timeout(500);
            selectedSquare.classList.remove("selected")
            // console.log("de-selected");
            if (i + 1 === generatedSequence.length) {
                resolve();
            }
        }
    });
}

const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}


// Timer function
const countdownTimer = () => {
    // reset timer
    countdownTimerDisplayValue = 5;
    document.querySelector("#timer").innerText = countdownTimerDisplayValue;
    // setup and run timer
    countdownTimerDisplay = setInterval(function () {
        countdownTimerDisplayValue--;
        document.querySelector("#timer").innerText = countdownTimerDisplayValue;
        // if timer runs out call game over function
        if (countdownTimerDisplayValue < 1) {
            clearInterval(countdownTimerDisplay);
            // call game over function
        }
    }, 1000);
};


// Game over function

gameSetup();
