import {drawTopAnime} from "./scripts/topAnime.js";
import {graphTopAnimeGenres} from "./scripts/topAnimeGenres.js";
import {closeModalWindow, closeModalBtn} from "./scripts/modal.js";


document.addEventListener('DOMContentLoaded', () => {

    const barGraph = document.querySelector(".bar-graph")
    const bubblePacking = document.querySelector(".bubble-packing")
    
    barGraph.addEventListener("click", drawTopAnime)
    bubblePacking.addEventListener("click", graphTopAnimeGenres)

    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector(".closeBtn");

    closeBtn.addEventListener("click", closeModalBtn)
    window.addEventListener("click", closeModalWindow)

    drawTopAnime()
})