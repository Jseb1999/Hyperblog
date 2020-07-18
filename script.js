
const lightButton = document.querySelector('.light-mode');
const darkButton = document.querySelector('.dark-mode');
// console.log(lightButton);
// console.log(darkButton);

lightButton.addEventListener('click', changeDarkMode);
darkButton.addEventListener('click', changeLightMode);

function changeDarkMode(){
    lightButton.classList.toggle('lm-is-active');
    darkButton.classList.toggle('dm-is-active');

    // Otra alternativa
    // lightButton.style.display = "none";
    // darkButton.style.display = "initial";
}

function changeLightMode(){
    lightButton.classList.toggle('lm-is-active');
    darkButton.classList.toggle('dm-is-active');
}
