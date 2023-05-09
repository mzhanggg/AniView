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
    
    const data = await fetchTopAnime();
    
    let margin = { top: 30, right: 30, bottom: 30, left: 30 };
    let width = 1200;
    let height = 1000; 
    
    const canva = d3.select("#canva")
                    .attr("width", width)
                    .attr("height", height);
    
    const svg = canva.append("svg")
                .attr("height", height - margin.top - margin.bottom)
                .attr("width", width - margin.left - margin.right)
                .attr("viewBox", [0, 0, 1075, 1075]);
                
    
    const x = d3.scaleBand()
        .domain(d3.range(data.length))
        .range([margin.left, width - margin.right])
        .padding(0.3);
    
    const y = d3.scaleLinear()
        .domain([0, 250000])
        .range([height - margin.bottom, margin.top]);
    
    svg.append('g')
        .attr('fill', 'lightblue')
        .attr('cursor', 'pointer')
        .selectAll('rect')
        .data(data.sort( (a,b) => d3.descending(a.favoritesCount, b.favoritesCount)))
        .join('rect')
            .attr('x', (d, i) => x(i))
            .attr('y', (d) => y(d.favoritesCount))
            .attr('height', d => y(0) - y(d.favoritesCount))
            .attr('width', x.bandwidth())
            .attr('id', d => d.id);

    function xAxis(g) {
        g.attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickFormat( i => data[i].title ))
        .selectAll('text')
            .style('text-anchor', 'start')
            .attr('dx', '10px')
            .attr('dy', '-5px')
            .attr('transform', 'rotate(-90)');
    }
    
    function yAxis(g) {
        g.attr('transform', `translate(${margin.left}, 0)`);
        g.call(d3.axisLeft(y).ticks(null, data.format));
        g.attr('font-size', '15px');
    }
    
    svg.append('g').call(xAxis);
    svg.append('g').call(yAxis);
    svg.node();
}
    
function clearVisual() {
    const loading = d3.select("#loading")
    loading.remove();
    
    const svg = d3.select('svg');
    svg.remove();
}



