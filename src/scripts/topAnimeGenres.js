async function fetchTopAnimeGenres() {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime`);
    const data = await response.json();

    const animeGenres = { name: 'root', children: [] };

    data.data.forEach(datum => {
        const title = datum.title;
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

    return animeGenres;
}

export async function graphTopAnimeGenres() {

    const data = await fetchTopAnimeGenres();

    const canva = d3.select("#canva")
    const svg = canva.append("svg")
                .attr("width", 800)
                .attr("height", 800)

    const root = d3.hierarchy(data)
            .sum(d => d.score)


    const pack = d3.pack()
                .size([700, 700])
                .padding(10);
    
    const packedData = pack(root);

    
    const circles = svg.selectAll('circle')
                    .data(packedData.descendants())
                    .enter()
                    .append('circle')

    circles
        .attr('cx', d => d.x)
        .attr('cy', d => d.y)
        .attr('r', d => d.r)
        .attr('stroke', "steelblue")
        .attr('fill', "white")

}