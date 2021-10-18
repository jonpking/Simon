const square = document.querySelectorAll(".square");
let colorClicked;
let inputNumber = 0;
const generatedSequence = [];

// call demo function
// call click function


// Clicked squares get stored into colorClicked value
square.forEach(square => {
    square.addEventListener("click", event => {
        colorClicked = event.target.id;
        console.log(colorClicked);
        
        // call click match function

    });
});


// Check if click matches

    // check if click matches current index of generatedSequence
        // if yes > call sequence complete function
        // if no > game over


// Check if sequence complete

    // if yes > check if inputNumber and index generatedSequence match
        // if yes > increment inputNumber
            //      call generate function
        // if no > do nothing


// Generate game sequence to match and store in generatedSequence array

    // generate another number
    // push into generatedSequence
    // reset inputNumber
    // call demo function
    // call timer function


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
