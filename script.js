
const lightButton = document.querySelector('.light-mode');
const darkButton = document.querySelector('.dark-mode');
let mode = false;
// console.log(lightButton);
// console.log(darkButton);

lightButton.addEventListener('click', changeMode);
darkButton.addEventListener('click', changeMode);

function changeMode(){
    lightButton.classList.toggle('lm-is-active');
    darkButton.classList.toggle('dm-is-active');
    
    // Otra alternativa
    // lightButton.style.display = "none";
    // darkButton.style.display = "initial";

    if(!mode){
        darkMode();
        mode = true;
    }
    else{
        lightMode();
        mode = false;
    }
    
}


function darkMode(){

}