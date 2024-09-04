function getRandomColor() {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}


function changeColor(event) {
    event.target.style.backgroundColor = getRandomColor();
}
const divs = document.querySelectorAll('.color-div');

divs.forEach(div => {
    div.addEventListener('click', changeColor);
});