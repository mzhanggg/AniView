async function fetchTopAnimeGenres() {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime`);
    const data = await response.json();
    const animeGenres = {};

    data.data.forEach(datum => {
        const title = datum.title;
        const genres = datum.genres;

        genres.forEach(genre => {
            const genreName = genre.name
            if (Object.keys(animeGenres).includes(genreName)) {
                animeGenres[genreName].push(title);
            } else {
                animeGenres[genreName]= [title];
            };
        });
    });
    
    return animeGenres;
}


fetchTopAnimeGenres()