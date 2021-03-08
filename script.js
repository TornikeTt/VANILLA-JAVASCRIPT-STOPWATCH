"use strict"
function StopWatch(){
    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let reset = document.getElementById("reset");
    let paragraph = document.querySelector("p");


    let timer_start = 0;
    let start_control  = false;
    let seconds = 0;
    let tens = 0;

    start.addEventListener('click', () => {
        
        if(start_control == false){
            start_control = true;
            paragraph.innerHTML = 0;

            
            timer_start = setInterval(() => { 

                tens = tens < 10 ? "0" + tens : tens;
                
                if(tens > 59){
                    tens = 0;
                    seconds++
                }else if(seconds < 10){
                    paragraph.innerHTML = "0" + seconds + ":" + tens
                }else{
                    paragraph.innerHTML = seconds + ":" + tens
                }      
                tens++
            }, 10);

            
        }


    })
    
    stop.addEventListener("click", () => {
        clearInterval(timer_start)
        start_control = false;
    })

    reset.addEventListener("click", () => {
        clearInterval(timer_start)
        paragraph.innerHTML = "00:00";
        start_control = false;
        seconds = 0;
        tens = 0;
    })
}



let watch = new StopWatch()

