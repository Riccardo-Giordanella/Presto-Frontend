fetch('./annunci.json').then((response)=> response.json()).then((data)=>{
    let radioWrapper = document.querySelector('#radioWrapper');
    let cardWrapper = document.querySelector('#cardWrapper');

    function radioCreate(){
        let categories = data.map( (annuncio)=> annuncio.category);
        let uniqueCategories = Array.from(new Set(categories));
        uniqueCategories.forEach((category)=>{
            let div = document.createElement('div');
            div.classList.add('form-check');
            div.innerHTML = `
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="${category}">
                <label class="form-check-label" for="${category}">
                    ${category}
                </label>
            `;
            radioWrapper.appendChild(div);
        });


    }

    radioCreate();

    function showCards(){
        data.forEach((annuncio, i)=>{
            let div = document.createElement('div');
            div.classList.add('card', 'mx-1', 'mb-2');
            div.innerHTML = `
                <img src="https://picsum.photos/${200 + i}" class="card-img-top img-fluid" alt="Immagine rappresentativa del prodotto">
                <div class="card-body">
                    <h5 class="card-title">${annuncio.name}</h5>
                    <p class="card-text">${annuncio.category}</p>
                    <p class="lead">${annuncio.price}€</p>
                    <a href="#" class="btn btn-custom2">Acquista</a>
                </div>
            `;
            cardWrapper.appendChild(div);

        })
    }

    showCards();

})