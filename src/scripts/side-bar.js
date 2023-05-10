// export async function fetchAnime() {
//     const id = event.target.id
    
//     const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
//     const data = await response.json();
    
//     const animeDetails = [];

//     const inData = data.data
//     const title = inData.title_english;
//     const genres = inData.genres;
//     const score = inData.score;
//     const synopsis = inData.synopsis;
//     const imageURL = inData.images.jpg.image_url;
//     const status = inData.status;
//     const rating = inData.rating;

//     animeDetails.push({title, genres, score, synopsis, imageURL, status, rating});

//     return animeDetails;
// }

// export async function fillSidebar() {
//     const data = await fetchAnime();
//     const inData = data[0];

//     const title = document.querySelector("#title")
//     title.innerHTML = inData.title

//     const image = document.querySelector("#image")
//     const imageEl = document.createElement('img')
//     imageEl.src  = `${inData.imageURL}`
//     image.append(imageEl)

//     const synopsis = document.querySelector("#synopsis")
//     synopsis.innerHTML = inData.synopsis
    
//     const genres = document.querySelector("#genres")

//     const score = document.querySelector("#score")
//     score.innerHTML = inData.score

//     const status = document.querySelector("#status")
//     status.innerHTML = inData.status

//     const rating = document.querySelector("#rating")
//     rating.innerHTML = inData.rating
// }

// function clearSidebar() {
  
// }
