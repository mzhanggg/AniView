import {drawTopAnime} from "./scripts/topAnime.js";
import {graphTopAnimeGenres} from "./scripts/topAnimeGenres.js";
import {closeModalWindow, closeModalBtn, openModal} from "./scripts/modal.js";


document.addEventListener('DOMContentLoaded', () => {

    const barGraph = document.querySelector(".bar-graph");
    const bubblePacking = document.querySelector(".bubble-packing");
    
    barGraph.addEventListener("click", drawTopAnime);
    bubblePacking.addEventListener("click", graphTopAnimeGenres);

    // barGraph.addEventListener("click", () => {
    //     barGraph.setAttribute("id", "selected");
    //     drawTopAnime();
    // });

    const modal = document.querySelector(".modal");
    const closeBtn = document.querySelector(".closeBtn");

    closeBtn.addEventListener("click", closeModalBtn)
    window.addEventListener("click", closeModalWindow)

    const title = document.querySelector('h1');
    title.addEventListener("click", openModal);
    



})