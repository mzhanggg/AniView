import {drawTopAnime} from "./scripts/topAnime.js";
import {graphTopAnimeGenres} from "./scripts/topAnimeGenres.js";


document.addEventListener('DOMContentLoaded', () => {

    const barGraph = document.querySelector(".bar-graph")
    const bubblePacking = document.querySelector(".bubble-packing")
    

    barGraph.addEventListener("click", drawTopAnime)
    bubblePacking.addEventListener("click", graphTopAnimeGenres)


})