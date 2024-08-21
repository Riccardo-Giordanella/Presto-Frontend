// Cattura elementi
let navbar = document.querySelector('#navbar');
let btncollapse = document.querySelector('#btncollapse');
let check = false; //variabile di appoggio per far ruotare il button della collapse personalizzato

// Navbar settings
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

// End navbar settings

// Counters
const firstNumber = document.querySelector('#firstNumber');
const secondNumber = document.querySelector('#secondNumber');
const thirdNumber = document.querySelector('#thirdNumber');
let counter = 0;
let timeoutcheck = true;

function counters(n, element, time){
    let interval = setInterval(()=> {
        if (counter < n){
            counter++
            element.innerHTML = counter;
        }else{
            clearInterval(interval);
        }
}, time);

    setTimeout(() => {
        timeoutcheck = true;
    }, 3000);
};

// IntersectionObserve:

let watcher = new IntersectionObserver( (entries)=>{
    entries.forEach( (entry)=>{

        if(entry.isIntersecting && timeoutcheck){
            counters(1500, firstNumber, 25);
            counters(750, secondNumber, 50);
            counters(375, thirdNumber, 100);
            timeoutcheck = false;
        }
    })
})

watcher.observe(firstNumber);