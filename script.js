let APIKey = "677ce260"; 
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

const getData = async (movie) => {
    try {
        let fetchData = await fetch(`http://www.omdbapi.com/?s=${movie}&apikey=${APIKey}`);
        let jsonData = await fetchData.json();

        if (jsonData.Response === "True") {
            document.querySelector(".card").innerHTML = "";
            jsonData.Search.forEach((jsonData) => {
                let div = document.createElement("div");
                div.classList.add("movieCard");
                div.innerHTML = `
                    <img src="${jsonData.Poster}" alt="${movie.Title}">
                    <div class="cardText">
                        <h1><span>${jsonData.Title}</span></h1>
                        <p>Year:<span> ${jsonData.Year}</span></p>
                        <p>Type:<span> ${jsonData.Type}</span></p>
                        <P>imdbID:<span> ${jsonData.imdbID}</span></p>
                    </div>


                `;
                document.querySelector(".card").appendChild(div);
            });
        } else {
            document.querySelector(".card").innerHTML = `<h1>${jsonData.Error}</h1>`;
        }
    } catch (error) {
        document.querySelector(".card").innerHTML = "<h1>Error fetching data</h1>";
        console.error("Error:", error);
    }
};

searchBtn.addEventListener("click", function() {
    let movieName = searchInput.value;
    if (movieName != "") {
        getData(movieName);
    } else {
        document.querySelector(".card").innerHTML = "<h1>First search for a movie name</h1>";
    }
});











