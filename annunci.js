fetch('./annunci.json').then((response)=> response.json()).then((data)=>{
    data.sort((a, b)=> a.price - b.price);

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


    };

    radioCreate();

    function truncateWord(string){
        if (string.length > 15) {
            return string.split(' ')[0] + '...';
        }else{
            return string;
        }
    };

    function showCards(array){
        cardWrapper.innerHTML = '';
        array.forEach((annuncio, i)=>{
            let div = document.createElement('div');
            div.classList.add('card', 'mx-1', 'mb-2');
            div.innerHTML = `
                <img src="https://picsum.photos/${200 + i}" class="card-img-top img-fluid" alt="Immagine rappresentativa del prodotto">
                <div class="card-body">
                    <h5 class="card-title" title="${annuncio.name}">${truncateWord(annuncio.name)}</h5>
                    <p class="card-text">${annuncio.category}</p>
                    <p class="lead">${annuncio.price}€</p>
                    <a href="#" class="btn btn-custom2">Acquista</a>
                </div>
            `;
            cardWrapper.appendChild(div);

        })
    };

    showCards(data);

    let radioButtons = document.querySelectorAll('.form-check-input');
    function filterByCategory(array){

        let categoria = Array.from(radioButtons).find((button)=> button.checked).id;

        if (categoria != 'All') {
            let filtered = array.filter((annuncio)=> annuncio.category == categoria);
            return filtered;

        }else{
            return array;
        }
    };



    radioButtons.forEach((button)=>{
        button.addEventListener('click', ()=>{
            setPriceInput();
            globalFilter();
        })
    });

    let priceInput = document.querySelector('#priceInput');
    let priceValue = document.querySelector('#priceValue');

    function setPriceInput(){
        let prices = filterByCategory(data).map((annuncio)=> +annuncio.price);
        prices.sort((a, b)=> a - b);
        let maxPrice = Math.ceil(prices.pop());
        priceInput.max = maxPrice;
        priceInput.value = maxPrice;
        priceValue.innerHTML = maxPrice;
    };

    setPriceInput();

    function filterByPrice(array){
        let filtered = array.filter((annuncio)=> +annuncio.price <= priceInput.value);
        return filtered;
    };

    priceInput.addEventListener('input', ()=>{
        priceValue.innerHTML = priceInput.value;
        globalFilter();
    });

    let wordInput = document.querySelector('#wordInput');

    function filterByWord(array){
        let filtered = array.filter((annuncio) => annuncio.name.toLowerCase().includes(wordInput.value.toLowerCase()));
        return filtered
    }

    wordInput.addEventListener('input', ()=>{
        globalFilter();
    })

    function globalFilter(){
        let filteredByCategory = filterByCategory(data);
        let filteredByPrice = filterByPrice(filteredByCategory);
        let filteredByWord = filterByWord(filteredByPrice);

        showCards(filteredByWord);
    }

})