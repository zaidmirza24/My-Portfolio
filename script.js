console.log("Hey, Iam Zaid  Mirza");
let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav-ul');
let toggle = document.querySelector('.toggle');
let cancel = document.querySelector('.cancel');
hamburger.addEventListener('click', () => {

    toggle.style.display = 'flex';
})
cancel.addEventListener('click', () => {
    toggle.style.display = 'none';


})
// rgb ex code generator:

// console.log(red, blue, green)

let capsule_border = document.querySelectorAll('.card-capsule');

// console.log(capsule_border);
capsule_border.forEach((element)=>{
    let red = Math.floor(Math.random() * ((255) + 1))
    let blue = Math.floor(Math.random() * ((255) + 1))
    let green = Math.floor(Math.random() * ((255) + 1))
    let a = Math.random() * ((1))
    // console.log(element)
    element.style.borderColor = `rgb(${red},${blue},${green})`;
})




// capsule_border.style.borderColor  = `rgb(${red},${blue},${green})`
