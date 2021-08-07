sec = 12310;

function Timer() {
   
   console.log(sec);
}

function StartTimer() {
    Timer();
    setInterval(Timer, 1000);
}
