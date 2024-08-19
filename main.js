// Cattura elementi
let navbar = document.querySelector('#navbar');
let togglerNavbarBtn = document.querySelector('#togglerNavbarBtn');

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 0){
        navbar.style.height = '70px';

    }else{
        navbar.style.height = '140px';

    }

})

togglerNavbarBtn.addEventListener('click', ()=>{
    let check = false;
    if(check == false){
        togglerNavbarBtn.style.transform = 'rotate(0deg)';
        check = true;
    }else{
        togglerNavbarBtn.style.transform = 'rotate(180deg)';
        check = false;
    }
})
