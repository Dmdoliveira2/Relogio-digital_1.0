
const colorPicker = document.getElementById("colorPicker");
const inputRange = document.getElementById("rangePicker");

const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds(); 

horas.textContent = hr < 10 ? "0" + hr : hr;
minutos.textContent = min < 10 ? "0" + min : min;
segundos.textContent = sec < 10 ? "0" + sec : sec;

});



colorPicker.addEventListener("input", () => {
    document.body.style.backgroundColor = colorPicker.value;
});

inputRange.addEventListener("input", () => {
    document.body.style.opacity = inputRange.value / 100;
}); 

