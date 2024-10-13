"use strict";

let btns = document.querySelectorAll(".cities .city button");

btns.forEach(btn => {
    btn.addEventListener("click",function(){
        btns.forEach(button => {
            button.style.backgroundColor="#f1f1f1";
            button.nextElementSibling.classList.add("d-none")
        });
        this.style.backgroundColor="#CCCCCC";
        this.nextElementSibling.classList.remove("d-none")
    })
});