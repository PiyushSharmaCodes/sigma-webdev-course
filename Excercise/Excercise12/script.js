let boxes = document.querySelectorAll(".box");
boxes.forEach(e => {
    e.style.backgroundColor =randomColor() ;
});
boxes.forEach(e => {
    e.style.color = randomColor();
});

function randomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;

}