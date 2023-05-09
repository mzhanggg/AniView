const sidebarInfo = document.querySelector('.sidebar')

async function fetchAnime() {
    const response = await fetch(`https://api.jikan.moe/v4/anime/{id}`);
    const data = await response.json();
    const animeDetails = [];

    data.data.forEach(datum => {
        const title = datum.title_english;
        const genres = datum.genres;
        const score = datum.score;
        const synopsis = datum.synopsis;
        const imageURL = datum.images.jpg.image_url;
        const status = datum.status;

        animeDetails.push({title, genres, score, synopsis, imageURL, status});
    });
    
    return animeDetails;
}

async function fillSidebar() {
    clearSidebar(); // to be written

    const data = await fetchTopAnimeGenres();
    
}

function clearSidebar() {
  
}
