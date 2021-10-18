const square = document.querySelectorAll(".square");
let colorClicked;
let inputNumber = 2;
const generatedSequence = [];

// Clicked squares get stored into colorClicked value
square.forEach(square => {
    square.addEventListener("click", event => {
        colorClicked = event.target.id;
        console.log(colorClicked);
        
        // call click match function

    });
});


// Generate game sequence to match and store in generatedSequence array
const generateNextValue = () => {
    // generate next in sequence and push into generatedSequence
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
}


// Check if click matches

    // check if click matches current index of generatedSequence
        // if yes > call sequence complete function
        // if no > game over


// Check if sequence complete

    // if yes > check if inputNumber and index generatedSequence match
        // if yes > increment inputNumber
            //      call generate function
        // if no > do nothing


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
            
generateNextValue();
// call demo function
// call click function
