// Cattura elementi
let navbar = document.querySelector('#navbar');
let btncollapse = document.querySelector('#btncollapse');
let check = false; //variabile di appoggio per far ruotare il button della collapse personalizzato
let reviews = [
    { name: 'Riccardo', body: 'Adoro gli anime e questo sito mi piace molto', rank: 5},
    { name: 'Roberto', body: 'Non mi piace per niente', rank: 1},
    { name: 'Francesco', body: 'Così Così', rank: 3},
]

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
let timeoutcheck = true;

function counters(n, element, time){
    let counter = 0;

    let interval = setInterval(()=> {
        if (counter < n){
            counter++
            element.innerHTML = counter;
        }else{
            clearInterval(interval);
        }
}, time);

    setTimeout(()=> {
        timeoutcheck = true;
    }, 16000);
};

// IntersectionObserve:

let watcher = new IntersectionObserver( (entries)=>{
    entries.forEach( (entry)=>{

        if(entry.isIntersecting && timeoutcheck){
            counters(1000, firstNumber, 0.1);
            counters(750, secondNumber, 0.1);
            counters(375, thirdNumber, 0.1);
            timeoutcheck = false;
        }
    })
})

watcher.observe(firstNumber);


// Reviews

let swiperWrapper = document.querySelector('.swiper-wrapper');

reviews.forEach((review)=>{
    let div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.innerHTML = `
        <div class="cardreview d-flex flex-column justify-content-center align-items-center">
            <p class="h4 text-center">${review.name}</p>
            <p class="lead text-center"><strong>${review.body}</strong></p>
            <div class="d-flex justify-content-center starwrappers">
            </div>
        </div>
    `
    swiperWrapper.appendChild(div);
});

let starwrappers = document.querySelectorAll('.starwrappers');
starwrappers.forEach((starwrapper, index) => {
    // Aggiungi le stelline piene
    for (let i = 1; i <= reviews[index].rank; i++) {
        let icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-star', 'text-warning');
        starwrapper.appendChild(icon);
    }

    // Aggiungi le stelline vuote
    let difference = 5 - reviews[index].rank;
    for (let i = 1; i <= difference; i++) {
        let icon = document.createElement('i');
        icon.classList.add('fa-regular', 'fa-star', 'text-warning');
        starwrapper.appendChild(icon);
    }
});




// Swiper settings
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});