const elForm = document.querySelector('#form');
const elCards = document.querySelector('.cards');

const elSearchForm = document.querySelector('#search-form');
const elSearch = document.querySelector('#search')

elSearchForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    const searchText = elSearch.value.toLowerCase();

    const filteredArray = [];
    films.forEach((element) => {

        if(element.title.toLowerCase().includes(searchText)) {
            filteredArray.push(element)
        }
    });

    renderFilms(filteredArray)
});

const renderFilms = (array, parentElement = elCards) => {
    parentElement.textContent = ""
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        const card = document.createElement('div')
        card.className = 'card';
        card.style.width = '25rem';
        card.setAttribute('title', 'salom');

        card.innerHTML = `
        <img class="card-img-top" src="${element.poster}"
        alt="${element.title}" width = "200">
        <div class="card-body">
        <h3 class="card-title">${element.title}</h3>
        <p class="card-text">${element.overview}</p>
        <p class="text-primary">${element.release_date}</p>
        <ul>
            <li>${element.genres}</li>
        </ul>
        </div> `
        parentElement.appendChild(card)
    }
}

elForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const img = e.target[1].value;
    const overview = e.target[2].value;
    const date = e.target[3].value;
    const genres = e.target[4].value;
    if (title && img && overview && date && genres) {
        const newFilm = {
            id: films[films.length - 1] || 0,
            title: title,
            poster: img,
            overview: overview,
            release_date: date,
            genres: [genres],
        }
        const newFilmArray = films;
        newFilmArray.unshift(newFilmArray);
        renderFilms(newFilmArray, elCards)

        e.target[0].value = '';
        e.target[1].value = '';
        e.target[2].value = '';
        e.target[3].value = '';
        e.target[4].value = '';
    }
    else {
        alert('iltmos malumotlarning toldiring')
    }
});

renderFilms(films);
