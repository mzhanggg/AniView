async function fetchTopAnimeGenres() {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime`);
    const data = await response.json();

    const animeGenres = { name: 'root', children: [] };

    data.data.forEach(datum => {
        const title = datum.title_english;
        const score = datum.score;
        const genres = datum.genres;
        
        genres.forEach(genre => {
            const genreName = genre.name
            const matchingGenre = animeGenres.children.find(child => child.name === genreName)

            if (matchingGenre) {
                matchingGenre.children.push( {title, score} );
            } else {
                animeGenres.children.push({ name: genreName, children: [ {title, score} ]});
            };

        });
    });
    console.log(animeGenres)
    return animeGenres;
}

export async function graphTopAnimeGenres() {

    const data = await fetchTopAnimeGenres();

    const canva = d3.select('#canva')
    const svg = canva.append('svg')
                .attr('width', 800)
                .attr('height', 800)
                .style('display', 'block')
                .attr('viewBox', "0 0 800 800")
                .style('cursor', 'pointer')
                
    const root = d3.hierarchy(data)
            .sum(d => d.score)

    const pack = d3.pack()
                .size([800, 800])
                .padding(4)
    
    const packedData = pack(root);

    // binds and created circles to each node in the hierarchy
    const circles = svg.selectAll('circle')
                    .data(packedData.descendants())
                    .enter()
                    .append('circle')

    circles.attr('cx', d => d.x)
            .attr('cy', d => d.y)
            .attr('r', d => d.r)
            .attr('stroke', 'steelblue')
            .attr('stroke-width', '2px')
            .attr('fill', 'white')
            .attr('class', 'bubble')

    // makes text elements for labels and bind data
    const labels = svg.selectAll('text')
        .data(packedData.descendants())
        .enter()
        .append('text')
        .attr('text-anchor', 'middle')
        .attr('font-size', d => d.value / 5)

    // gives labels position and text content based on corresponding circle
    labels.attr('x', d => d.x)
        .attr('y', d => d.y)
        .text(d => d.data.title) 

    
    svg.node();
}