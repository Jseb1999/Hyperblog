
const lightButton = document.querySelector('.light-mode');
const darkButton = document.querySelector('.dark-mode');
const container = document.getElementById('container');
const body = document.getElementById('body');
let mode = false;
// console.log(lightButton);
// console.log(darkButton);

lightButton.addEventListener('click', changeMode);
darkButton.addEventListener('click', changeMode);

function changeMode(){
    lightButton.classList.toggle('lm-is-active');
    darkButton.classList.toggle('dm-is-active');
    

    container.classList.toggle('container-dark');
    body.classList.toggle('body-dark');
    // Otra alternativa
    // lightButton.style.display = "none";
    // darkButton.style.display = "initial";

    // if(!mode){
    //     darkMode();
    //     mode = true;
    // }
    // else{
    //     lightMode();
    //     mode = false;
    // }
    
}
