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
            .attr('id', d => d.id);
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
        .style("font-size", "25px")
        // .attr('id', 0);

    svg.append('g').call(xAxis);
    svg.append('g').call(yAxis);

    loading.style("display", "none")

    return svg.node();

}
    
function clearVisual() {
    const message = d3.select("#message")
    message.remove();
    
    const svg = d3.select('svg');
    svg.remove();
}

async function fillSidebar() {
    clearSidebar();

    const data = await fetchAnime();
    const inData = data[0];

    const title = document.querySelector("#title")
    title.innerHTML = inData.title

    const image = document.querySelector("#image")
    const imageEl = document.createElement('img')
    imageEl.src  = `${inData.imageURL}`
    imageEl.setAttribute("id", "image-id")
    image.append(imageEl)

    const synopsis = document.querySelector("#synopsis")
    synopsis.innerHTML = "<span>Synopsis: </span>" + inData.synopsis
    
    const genres = document.querySelector("#genres")
    genres.innerHTML = "<span>Genres: </span>"
    let genreArray = [];

    inData.genres.forEach( (hash, i) => {
        if (i === (inData.genres.length - 1)) {
            genres.innerHTML += hash.name;
        } else {
            genres.innerHTML += hash.name + ", "
        };
    });

    const score = document.querySelector("#score")
    score.innerHTML = "<span>Score: </span>" + inData.score

    const status = document.querySelector("#status")
    status.innerHTML = "<span>Status: </span>" + inData.status

    const rating = document.querySelector("#rating")
    rating.innerHTML = "<span>Rating: </span>" + inData.rating

    const favorites = document.querySelector("#favorites")
    favorites.innerHTML = "<span>User Favorites Count: </span>" + inData.favorites
}

async function fetchAnime() {
    const id = event.target.id
    
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
    const data = await response.json();
    
    const animeDetails = [];

    const inData = data.data
    const title = inData.title_english;
    const genres = inData.genres;
    const score = inData.score;
    const synopsis = inData.synopsis;
    const imageURL = inData.images.jpg.image_url;
    const status = inData.status;
    const rating = inData.rating;
    const favorites = inData.favorites;


    animeDetails.push({title, genres, score, synopsis, imageURL, status, rating, favorites});

    return animeDetails;
}

function clearSidebar() {
    const message = document.querySelector("#message1");
    message.style.display = "none"

    const img = document.querySelector("#image-id");

    if (img) {
        img.remove();
    };

}
