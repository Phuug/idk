const input = document.querySelector(".input");
const btn = document.querySelector(".button");
const main = document.querySelector(".main");

btn.addEventListener("click", () =>{
    const degrees = input.value;
    main.style.background = `linear-gradient(${degrees}deg,rgb(241,193,233),rgb(187,187,243))`;
});