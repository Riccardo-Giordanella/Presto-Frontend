// Cattura elementi
let navbar = document.querySelector('#navbar');
let btncollapse = document.querySelector('#btncollapse');
let check = false; //variabile di appoggio per far ruotare il button della collapse personalizzato

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 0){
        navbar.style.height = '70px';

    }else{
        navbar.style.height = '140px';

    }

})

btncollapse.addEventListener('click', ()=>{
    if(check == false){
        check = true;
        btncollapse.style.transform = 'rotate(0deg)';
    }else{
        check = false;
        btncollapse.style.transform = 'rotate(180deg)';
    }
})
