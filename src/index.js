import topAnime from './scripts/topAnime';


document.addEventListener('DOMContentLoaded', () => {

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
    
    
})

// bar graph with dummy data 

// const data = [
//     { name: 'a2', score: 50 },
//     { name: 'a1', score: 40 },
//     { name: 'a4', score: 20 },
//     { name: 'a3', score: 10 },

// ];

// let margin = { top: 20, right: 20, bottom: 20, left: 20 };
// let width = 500;
// let height = 500; 

// const canva = d3.select("#canva")
//                 .attr("width", 500)
//                 .attr("height", 500)

// const svg = canva.append("svg")
//             .attr("height", height - margin.top - margin.bottom)
//             .attr("width", width - margin.left - margin.right)
//             .attr("viewBox", [0, 0, width, height]);

// const x = d3.scaleBand()
//     .domain(d3.range(data.length))
//     .range([margin.left, width - margin.right])
//     .padding(0.1);

// const y = d3.scaleLinear()
//     .domain([0, 100])
//     .range([height - margin.bottom, margin.top])

// svg
//     .append('g')
//     .attr('fill', 'blue')
//     .selectAll('rect')
//     .data(data.sort( (a,b) => d3.descending(a.score, b.score)))
//     .join('rect')
//         .attr('x', (d, i) => x(i))
//         .attr('y', (d) => y(d.score))
//         .attr('height', d => y(0) - y(d.score))
//         .attr('width', x.bandwidth())

// function xAxis(g) {
//     g.attr('transform', `translate(0, ${width - margin.bottom})`)
//     g.call(d3.axisBottom(x).tickFormat( i => data[i].name))
// }

// function yAxis(g) {
//     g.attr('transform', `translate(${margin.left}, 0)`)
//     g.call(d3.axisLeft(y).ticks(null, data.format))
// }

// svg.append('g').call(xAxis)
// svg.append('g').call(yAxis)
// svg.node();