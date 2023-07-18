import { fillSidebar } from './side-bar'
import { clearVisual } from './util';

async function fetchTopAnime() {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime`);
    const data = await response.json();
    const animeDetails = [];

    data.data.forEach(datum => {
        const title = datum.title_english;
        const genres = datum.genres;
        const favoritesCount = datum.favorites;
        const id = datum.mal_id;
        
        animeDetails.push({title, genres, favoritesCount, id});
    }); 

    return animeDetails;
}
 
export async function drawTopAnime() {
    clearVisual();
    
    const loading = d3.select("#loading-gif")
    loading.style("display", "flex")

    const data = await fetchTopAnime();
    
    let margin = { top: 10, right: 30, bottom: 40, left: 90 };
    let width = 800;
    let height = 800; 

    const canva = d3.select("#canva")

    const svg = canva.append("svg")
                .attr("width", width - margin.left - margin.right)
                .attr("height", height - margin.top - margin.bottom)
                .attr("viewBox", [0, 0, 800, 800]);

    const x = d3.scaleLinear()
        .domain([0, 250000])
        .range([margin.left, width - margin.right]);

    const y = d3.scaleBand()
        .domain(d3.range(data.length))
        .range([margin.top, height - margin.bottom])
        .padding(0.3);

    svg.append('g')
        .attr('fill', '#F29580')
        .attr('cursor', 'pointer')
        .selectAll('rect')
        .data(data.sort( (a,b) => d3.descending(a.favoritesCount, b.favoritesCount)))
        .join('rect')
            .attr('x', margin.left)
            .attr('y', (d, i) => y(i))
            .attr('width', d => x(d.favoritesCount) - margin.left)
            .attr('height', y.bandwidth())
            .attr('id', d => d.id)

    const rects = Array.from(document.querySelectorAll('rect'))

    rects.forEach( rect => {
        rect.addEventListener('click', fillSidebar)
    })
        
    function yAxis(g) {
        g.attr('transform', `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(y).tickFormat( i => data[i].title ))
        .selectAll('text')
            .style('text-anchor', 'start')
            .attr('dx', '15px')
            .attr('font-size', '18px')
            .style('font-family', "'Space Grotesk', sans-serif")
            .classed('axis-label', true)
            .attr('id', (d, i) => data[i].id)
            .style('cursor', 'pointer')
    }

    function xAxis(g) {
        g.attr('transform', `translate(0, ${height - margin.bottom})`);
        g.call(d3.axisBottom(x).tickFormat(d => d / 1000 + 'k'));
        g.attr('font-size', '18px')
    }

    svg.append("text")
        .attr("class", "x-axis-label")
        .attr("text-anchor", "middle")
        .attr("x", width / 2)
        .attr("y", height + 20)
        .text("Favorites Count")
        .style("font-size", "25px")

    svg.append("text")
        .attr("class", "y-axis-label")
        .attr("text-anchor", "middle")
        .attr("x", -height / 2)
        .attr("y", margin.left / 2)
        .attr("transform", "rotate(-90)")
        .text("Title")
        .style("font-size", "25px");

    svg.append('g').call(xAxis);
    svg.append('g').call(yAxis);

    loading.style("display", "none")

    const titles = Array.from(selectAnimeTitle());
    titles.forEach( title => {
        title.addEventListener('click', fillSidebar)
    })

    return svg.node();

}

function selectAnimeTitle() {
    const titles = [];
    
    for (let i = 2; i <= 26; i++) {
        const selected = `#canva > svg > g:nth-child(5) > g:nth-child(${i}) > text`
        const element = document.querySelector(selected);
        titles.push(element);
    }

    return titles;
}
