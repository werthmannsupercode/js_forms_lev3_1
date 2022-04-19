let inputText = document.getElementById('input_text');
let ergebnis = document.getElementById('ergebnis');
let fontSize = document.getElementById('font_size');
let fontFamily = document.getElementById('fonts');

function changeFontSize() {
    ergebnis.innerHTML = inputText.value;
    ergebnis.style.fontSize = fontSize.value + "px";
    ergebnis.style.fontFamily = fontFamily.value;
}
