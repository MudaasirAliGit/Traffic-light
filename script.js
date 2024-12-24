let btn = document.getElementById("click-btn");
let btn2 = document.getElementById("reset-btn");

let red = document.getElementById("red");
red.classList.remove("red-shadow");
let yellow = document.getElementById("yellow");
yellow.classList.remove("yellow-shadow");
let green = document.getElementById("green");
green.classList.remove("green-shadow");

let num = 0;
btn.addEventListener("click", function() {
    if(num%3 === 0){
        red.style.opacity = "1";
        red.classList.add("red-shadow");
        yellow.style.opacity = "0.4";
        yellow.classList.remove("yellow-shadow");
        green.style.opacity = "0.4";
        green.classList.remove("green-shadow");
    }
    else if(num%3 === 1){
        red.style.opacity = "0.4";
        red.classList.remove("red-shadow");
        yellow.style.opacity = "1";
        yellow.classList.add("yellow-shadow");
        green.style.opacity = "0.4";
        green.classList.remove("green-shadow");
    }
    else if(num%3 === 2){
        red.style.opacity = "0.4";
        red.classList.remove("red-shadow");
        yellow.style.opacity = "0.4";
        yellow.classList.remove("yellow-shadow");
        green.style.opacity = "1";
        green.classList.add("green-shadow");
    }
    num++;
});

btn2.addEventListener("click", function(){
    num = 0;
    red.style.opacity = "0.4";
    red.classList.remove("red-shadow");
    yellow.style.opacity = "0.4";
    yellow.classList.remove("yellow-shadow");
    green.style.opacity = "0.4";
    green.classList.remove("green-shadow");
});