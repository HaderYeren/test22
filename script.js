
let time1 = 60 * 60;
let timer1Element = document.getElementById("timer1");

function updateTimer1() {
    let hours = Math.floor(time1 / 3600);
    let minutes = Math.floor((time1 % 3600) / 60);
    let seconds = time1 % 60;
    
    timer1Element.textContent = 
        (hours < 10 ? "0" : "") + hours + ":" +
        (minutes < 10 ? "0" : "") + minutes + ":" +
        (seconds < 10 ? "0" : "") + seconds;
    
    if (time1 === 30 * 60) {
        alert("Залишилось менше половини часу!");
    }

    if (time1 > 0) {
        time1--;
        setTimeout(updateTimer1, 1000);
    }
}

updateTimer1();

let timer2Element = document.getElementById("timer2");
let startButton = document.getElementById("startTimer2");
let time2 = 30.000;
let interval2;

function updateTimer2() {
    time2 -= 1;
    
    if (time2 <= 10000) {
        timer2Element.classList.add("animate");
    }

    timer2Element.textContent = (time2 / 1000).toFixed(3);

    if (time2 <= 0) {
        clearInterval(interval2);
        startButton.disabled = false;
        timer2Element.textContent = "0.000";
    }
}

startButton.addEventListener("click", () => {
    time2 = 30.000;
    timer2Element.textContent = "30.000";
    timer2Element.classList.remove("animate");
    startButton.disabled = true; 
    interval2 = setInterval(updateTimer2, 1);
});
