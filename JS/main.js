const info = document.querySelector('.info');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const instruction = document.querySelector('.instruction');
const exit = document.querySelector('.exit');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const archives = document.querySelector('.archives-box');
const resetBtn = document.querySelector('.reset');
const archivesBtn = document.querySelector('.archives');
const results = document.querySelector('.results');

let timesArray = [];

function showInstr(){
    instruction.style = "visibility: visible";
}

function exitInstruction () {
    instruction.style = "visibility: hidden";
}

let count;
let seconds = 0;
let minutes = 0;

function start () {

    count = setInterval(() =>  {
        if (seconds<9){
            seconds++;
            stopwatch.innerHTML= `0${minutes}:0${seconds}`;
        }else if (seconds<=59) {
            seconds++;
            stopwatch.innerHTML = `0${minutes}:${seconds}`;
        }else{
            minutes++;
            seconds = 0;
            stopwatch.innerHTML = `0${minutes}`;
        }
        }, 500 );

}

function pause() {
    clearInterval(count);
}

function stop(){

    time.innerHTML = `Ostatni czas: ${stopwatch.innerHTML}`
    if(stopwatch.innerHTML !== '00:00'){
        time.style = "visibility: visible";
        timesArray.push(stopwatch.innerHTML)
    } 

    clearInterval(count);
    stopwatch.innerHTML = '00:00';  
    seconds = 0;
    minutes = 0;
}

function handleReset() {
    time.style.visibility = 'hidden';
    stopwatch.innerHTML = '00:00'; 
    results.innerHTML = "";
    timesArray = [];
    seconds = 0;
    minutes = 0;
    
}

function showArchives() {

    timesArray.forEach(time => {
        const newTime = document.createElement('li');
        newTime.innerHTML = `Pomiar nr X : ${time}`

        results.append(newTime);
    })   
}



info.addEventListener('click', showInstr);
exit.addEventListener('click', exitInstruction);
startBtn.addEventListener('click', start);
pauseBtn.addEventListener('click', pause);
stopBtn.addEventListener('click', stop);
resetBtn.addEventListener('click',handleReset);
archivesBtn.addEventListener('click', showArchives);

