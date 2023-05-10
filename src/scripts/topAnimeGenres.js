async function fetchTopAnimeGenres() {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime`);
    const data = await response.json();

    const animeGenres = { name: 'root', children: [] };

    data.data.forEach(datum => {
        const title = datum.title_english;
        const score = datum.score;
        const genres = datum.genres;
        const id = datum.mal_id;
        const imageURL = datum.images.jpg.image_url;
        
        genres.forEach(genre => {
            const genreName = genre.name;
            const matchingGenre = animeGenres.children.find(child => child.name === genreName);

            if (matchingGenre) {
                matchingGenre.children.push({title, score, id, imageURL});
            } else {
                animeGenres.children.push({ name: genreName, children: [ {title, score, id, imageURL} ]});
            };

        });
    });

    return animeGenres;
}

export async function graphTopAnimeGenres() {
    clearVisual();

    const loading = d3.select("#loading-gif")
    loading.style("display", "flex")

    const data = await fetchTopAnimeGenres();

    const canva = d3.select('#canva')
    const svg = canva.append('svg')
                .attr('width', 800)
                .attr('height', 800)
                .style('display', 'block')
                .attr('viewBox', "0 0 800 800")
                .style('cursor', 'pointer')
                
    const root = d3.hierarchy(data)
            .sum(d => d.score);

    const pack = d3.pack()
                .size([800, 800])
                .padding(4);
    
    const packedData = pack(root);

    const circles = svg.selectAll('circle')
                    .data(packedData.descendants())
                    .enter()
                    .append('circle');

    circles.attr('cx', d => d.x)
            .attr('cy', d => d.y)
            .attr('r', d => d.r)
            .attr('stroke', 'steelblue')
            .attr('stroke-width', '2px')
            .attr('fill', 'white')
            .attr('class', 'bubble')
            .attr('id', d => d.data.id);

    const labels = svg.selectAll('text')
        .data(packedData.descendants())
        .enter()
        .append('text')
        .attr('text-anchor', 'middle')
        .attr('font-size', d => d.value / 5);

    labels.attr('x', d => d.x)
        .attr('y', d => d.y)
        .text(d => d.data.title) ;

    loading.style("display", "none")
    
    return svg.node();
}

function clearVisual() {
    const message = d3.select("#message")
    message.remove();

    const svg = d3.select('svg');
    svg.remove();
}