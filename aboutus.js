let opener = document.querySelector('.opener');
let check = false;
let flipCard = document.querySelector('.flip-card');
let circle = document.querySelector('.circle');
let creators = [
    { name: 'Cervello', decription: `Colui che ha subito un'emicrania dopo aver replicato il sito in lezione`, url: './media/brain.png' },
    { name: 'Stomaco', decription: `Colui che ha dovuto subire un'oki per calmare il cervello`, url: './media/stomach.png' },
    { name: 'Anime & Manga', decription: 'La mia distrazione dopo la compiuta creazione di Presto Fronted', url: './media/dino.png' },
    { name: 'Riccardo', decription: 'Creatore del sito e studente Aulab', url: './media/Riccardo.jpg' },
];

creators.forEach((creatore) => {
    let div = document.createElement('div');
    div.style.backgroundImage = `url(${creatore.url})`
    div.classList.add('moved');
    circle.appendChild(div);
});

let movedDivs = document.querySelectorAll('.moved');

opener.addEventListener('click', () => {
    if (check == false) {
        opener.style.transform = `rotate(45deg)`;
        movedDivs.forEach((moved, i) => {
            let angle = (360 * i) / movedDivs.length;
            moved.style.transform = `rotate(${angle}deg) translate(150px) rotate(-${angle}deg)`;
        });
        check = true;
    } else {
        check = false;
        opener.style.transform = ``;
        movedDivs.forEach((moved, i) => {
            moved.style.transform = ``;
        });
        flipCard.classList.add('d-none');
    }
});

let innerFace = document.querySelector('.inner-face');
let cardName = document.querySelector('#name');
let cardDescription = document.querySelector('#description');

movedDivs.forEach( (moved, i)=>{
    moved.addEventListener('click', ()=>{
        flipCard.classList.remove('d-none')
        let creator = creators[i];
        innerFace.style.backgroundImage = `url(${creator.url})`
        cardName.innerHTML = creator.name;
        cardDescription.innerHTML = creator.decription;

    })
})
