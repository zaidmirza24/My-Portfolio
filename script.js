console.log("Hey, Iam Zaid  Mirza");
let hamburger = document.querySelector('.hamburger');
let nav = document.querySelector('.nav-ul');
let toggle = document.querySelector('.toggle');
let cancel = document.querySelector('.cancel');
hamburger.addEventListener('click',()=>{

    toggle.style.display = 'flex';
})
cancel.addEventListener('click',()=>{
    toggle.style.display = 'none';


})
