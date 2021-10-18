const square = document.querySelectorAll(".square");

square.forEach(square => {
    square.addEventListener("click", event => {
        console.log(event.target.id);
    });
});
