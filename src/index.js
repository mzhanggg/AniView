import Sidebar from './scripts/side-bar';


document.addEventListener('DOMContentLoaded', () => {

    const canva = d3.select("#canva")
    const svg = canva.append("svg")
    svg.attr('width', 400).attr("height", 400)
    svg.append("circle")
        .attr("cx", 50)
        .attr("cy", 50)
        .attr("r", 50)


    // d3.select('.content-header').style("color", "blue")

    // fetch(`https://api.jikan.moe/v4/anime/1`)
    //     .then(response => {
    //         if (response.ok) {
    //             return response.json();
    //         } else {
    //             throw new Error(response);
    //         }
    //     })
    //     .then(data => {
    //         console.log(data)
    //     })

})