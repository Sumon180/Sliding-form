

let form = document.querySelector('#form');
let bg = document.querySelector('.bg');

const signupbutton = () => {
    form.classList.add("shift");
    bg.classList.add("bg-change");
};
//For mobile
const signupMobileButton = () => {
    form.classList.add("shift");
    bg.classList.add("bg-change");
};

const signinbutton = () => {
    form.classList.remove("shift");
    bg.classList.remove("bg-change");
};
//For mobile
const signinMobileButton = () => {
    form.classList.remove("shift");
    bg.classList.remove("bg-change");
};