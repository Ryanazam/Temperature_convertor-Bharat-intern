const button = document.querySelector(".btn");
const display =document.querySelector(".display-container");
const input = document.querySelector(".input");

function calhandler(){

    display.textContent= (input.value * 9/5) +32;
    


}
button.addEventListener('click',calhandler);
