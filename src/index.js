import { drawTopAnime } from "./scripts/topAnime.js";
import { graphTopAnimeGenres } from "./scripts/topAnimeGenres.js";
import { closeModalWindow, closeModalBtn, openModal } from "./scripts/modal.js";


document.addEventListener('DOMContentLoaded', () => {

    const barGraph = document.querySelector(".bar-graph");
    const bubblePacking = document.querySelector(".bubble-packing");

    barGraph.addEventListener("click", () => {
        barGraph.id = "selected";
        bubblePacking.id = "";
        drawTopAnime();
    });

    bubblePacking.addEventListener("click", () => {
        barGraph.id = "";
        bubblePacking.id = "selected";
        graphTopAnimeGenres();
    });

    const closeBtn = document.querySelector(".closeBtn");
    closeBtn.addEventListener("click", closeModalBtn);
    window.addEventListener("click", closeModalWindow);

    const title = document.querySelector('h1');
    title.addEventListener("click", openModal);

})