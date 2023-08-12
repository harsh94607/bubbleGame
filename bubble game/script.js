var score = 0;
var timer = 30;
var rnhit = 0;

function bubbleGenerator() {
    var clutter = "";
    for (var i = 1; i <= 176; i++) {
        var rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runtimer(){
    setInterval(function(){
        if(timer>=0){
            document.querySelector("#timerval").textContent = timer;
            timer--;
        }
        else{
            clearInterval(timer)
            document.querySelector("#pbtm").innerHTML =`<h1>Game Over <br> Score =  ${score}<h1>`
        }

    },1000);

}

function getNewHit(){
    rnhit = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = rnhit
}

function incScore(){
    score += 10;
    document.querySelector(".scoreval").textContent = score

}

document.querySelector("#pbtm").addEventListener("click",function(a){
    var clickednum = Number(a.target.textContent)
    if(clickednum == rnhit){
        incScore();
        getNewHit();
        bubbleGenerator();
    }
    else{
        decScore();
    }
})

bubbleGenerator();
runtimer();
getNewHit();

alert(clickednum);