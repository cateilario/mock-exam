/**
 * @author Caterina Ilario
 * @GitHub https://github.com/cateilario/mock-exam.git
 */
document.addEventListener("DOMContentLoaded", () => {

const calculateButton = document.getElementById("calculate");
const lengthOutput = document.getElementById("length-output");
const widthOutput = document.getElementById("width-output");

calculateButton.addEventListener("click", () => {

    let length = parseFloat(document.getElementById("length-input").value);
    let width = parseFloat(document.getElementById("width-input").value);

    if (!isNaN(length) && !isNaN(width)){
        const area = length * width;
        const perimeter = (2 *length) + (2*width);

        lengthOutput.innerText = `Rectangle area: ${area}`;
        widthOutput.innerText = `Rectangle perimeter: ${perimeter}`;
    } else{
        lengthOutput.innerText = "Invalid values";
        widthOutput.innerText = "Invalid values";
    }
});

});