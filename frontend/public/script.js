const movieCardComponent = function (title, year, description){
    return `
        <div class="card">
            <h1 class="title">${title}</h1>
            <h2 class="year">${year}</h2>
            <p class="description">${description}</p>
            <br>
        </div>
    `
}

const loadEvent = function (){
    const rootElement = document.getElementById("root")

    for (const movie of movies.cards) {
        
        rootElement.insertAdjacentHTML("beforeend",movieCardComponent(movie.title, movie.sub, movie.text))
    }
}



window.addEventListener("load", loadEvent)