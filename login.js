let showPass = document.querySelector(`.showpass`);
let passwordField = document.querySelector(`.pw_field`);

// Password Change
function password(){
    if(passwordField.type == `password`){
        passwordField.type = `text`;
        showPass.innerHTML = `<i class="bi bi-eye-slash"></i>`; 
    }
    else{
        passwordField.type = `password`;
        showPass.innerHTML = `<i class="bi bi-eye"></i>`;
    }
}

showPass.addEventListener(`click`,password);

// Colormode Change

let body = document.querySelector(`body`);
let button = document.querySelector(`.btn`);
let color = document.querySelector(`body .color h2`);

function darkMode(){
    body.classList.toggle(`darkmode`);
    if(body.classList.contains(`darkmode`)== true){
        document.querySelector(`img`).src=`./image/Dark_Logo.png`;
        color.innerHTML = `Dark Mode`;
    }
    else{
        color.innerHTML = `Light Mode`;
        document.querySelector(`img`).src=`./image/download.png`; 
        
    }
   

}

button.addEventListener(`click`, darkMode);
