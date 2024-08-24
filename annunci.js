fetch('./annunci.json').then((response)=> response.json()).then((data)=>{
    let radioWrapper = document.querySelector('#radioWrapper');

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

    radioCreate()

})