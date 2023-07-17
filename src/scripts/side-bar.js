async function fetchAnime() {
    const id = event.target.id
    
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    const data = await response.json();
    
    const animeDetails = [];

    const inData = data.data
    const title = inData.title_english;
    const genres = inData.genres;
    const score = inData.score;
    const synopsis = inData.synopsis;
    const imageURL = inData.images.jpg.image_url;
    const status = inData.status;
    const rating = inData.rating;
    const favorites = inData.favorites;


    animeDetails.push({title, genres, score, synopsis, imageURL, status, rating, favorites});

    return animeDetails;
}

export async function fillSidebar() {
    clearSidebar();

    const loadingSidebar = d3.select("#loading-sidebar")
    loadingSidebar.style("display", "flex")

    const data = await fetchAnime();
    const inData = data[0];

    const title = document.querySelector("#title")
    title.innerHTML = inData.title

    const image = document.querySelector("#image")
    const imageEl = document.createElement('img')
    imageEl.src  = `${inData.imageURL}`
    imageEl.setAttribute("id", "image-id")
    image.append(imageEl)

    const synopsis = document.querySelector("#synopsis")
    synopsis.innerHTML = "<span>Synopsis: </span>" + inData.synopsis
    
    const genres = document.querySelector("#genres")
    genres.innerHTML = "<span>Genres: </span>"
    let genreArray = [];

    inData.genres.forEach( (hash, i) => {
        if (i === (inData.genres.length - 1)) {
            genres.innerHTML += hash.name;
        } else {
            genres.innerHTML += hash.name + ", "
        };
    });

    const score = document.querySelector("#score")
    score.innerHTML = "<span>Score: </span>" + inData.score

    const status = document.querySelector("#status")
    status.innerHTML = "<span>Status: </span>" + inData.status

    const rating = document.querySelector("#rating")
    rating.innerHTML = "<span>Rating: </span>" + inData.rating

    const favorites = document.querySelector("#favorites")
    favorites.innerHTML = "<span>User Favorites Count: </span>" + inData.favorites;

    loadingSidebar.style("display", "none")
}

function clearSidebar() {
    const message = document.querySelector("#message1");
    message.style.display = "none"

    const img = document.querySelector("#image-id");

    if (img) {
        img.remove();
    };

}
