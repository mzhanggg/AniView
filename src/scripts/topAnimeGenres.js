async function fetchTopAnimeGenres() {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime`);
    const data = await response.json();

    const animeGenres = { name: 'root', children: [] };

    data.data.forEach(datum => {
        const name = datum.title_english;
        const score = datum.score;
        const genres = datum.genres;
        const id = datum.mal_id;
        const imageURL = datum.images.jpg.image_url;
        
        genres.forEach(genre => {
            const genreName = genre.name;
            const matchingGenre = animeGenres.children.find(child => child.name === genreName);

            if (matchingGenre) {
                matchingGenre.children.push({name, score, id, imageURL});
            } else {
                animeGenres.children.push({ name: genreName, children: [ {name, score, id, imageURL} ]});
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
    const rootBase = d3.hierarchy(data)
            .sum(d => d.score);

    const pack = d3.pack()
                .size([1000, 1000])
                .padding(4);
    
    const root = pack(rootBase);

    let focus = root;
    let view;
    let size = 1200;

    const canva = d3.select('#canva')
    const svg = canva.append('svg')
            .attr("viewBox", `-${size / 2} -${size / 2} ${size} ${size}`)
            .style("display", "block")
            .style("cursor", "pointer")
            .on("click", (event) => zoom(event, root));

    const node = svg.append("g")
        .selectAll("circle")
        .data(root.descendants().slice(1))
        .join("circle")
            .attr("pointer-events", d => !d.children ? "none" : null)
            .on("click", (event, d) => focus !== d && (zoom(event, d), event.stopPropagation()));

    const label = svg.append("g")
                    .attr("pointer-events", "none")
                    .attr("text-anchor", "middle")
                    .selectAll("text")
                    .data(root.descendants())
                    .join("text")
                      .style("fill-opacity", d => d.parent === root ? 1 : 0)
                      .text(d => d.data.name);

    zoomTo([root.x, root.y, root.r * 2]);

    function zoomTo(v) {
        const k = size/v[2];

        view = v;

        label.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
        node.attr("transform", d => `translate(${(d.x - v[0]) * k},${(d.y - v[1]) * k})`);
        node.attr("r", d => d.r * k)
    }

    function zoom(event, d) {
        const focus0 = focus;
    
        focus = d;
    
        const transition = svg.transition()
                                .duration(event.altKey ? 7500 : 750)
                                .tween("zoom", d => {
                                const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
                                return t => zoomTo(i(t));
                                });
    
        label
          .style("fill-opacity", d => d.parent != null ? 1 : 0)
          .transition(transition)
            .on("start", function(d) { if (d.parent === focus) this.style.display = "inline"; })
            .on("end", function(d) { if (d.parent !== focus) this.style.display = "none"; });
    }

    loading.style("display", "none")
    
    return svg.node();
}

function clearVisual() {
    const message = d3.select("#message")
    message.remove();

    const svg = d3.select('svg');
    svg.remove();
}