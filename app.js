const square = document.querySelectorAll(".square");
let colorClicked;
let inputNumber;
const generatedSequence = [];

// Clicked squares get stored into colorClicked value
square.forEach(square => {
    square.addEventListener("click", event => {
        colorClicked = event.target.id;
        // call click match function
        checkClickMatch();
    });
});


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
    // call timer function
};


// Check if click matches
    // check if click matches current index of generatedSequence
const checkClickMatch = () => {
    if (colorClicked === generatedSequence[inputNumber]) {
        // if yes > call sequence complete function
        console.log("correct match");
            // increment inputNumber
            inputNumber += 1;
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

    // interate over generatedSequence
    // dislay each value in generatedSequence array to player


// Timer function
    
    // set timer interval value
    // reset timer
    // forEach timer interval
        // check if timer = 0
            // if yes > game over
            // if no > continue countdown


// Game over function


generateNextValue();
// call demo function
// call click function
