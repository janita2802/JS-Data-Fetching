async function displayData(event){
    event.preventDefault();

    const movietitle = document.getElementById("movieTitle").value;
    if(!movietitle){
        alert("Please enter a movie name to search");
        return;
    }

    const apikey = "a600572d";
    const url = `http://www.omdbapi.com/?apikey=${apikey}&s=${movietitle}`;

    try {
        const resolved = await fetch(url);
        const moviesdata = await resolved.json();
        console.log(moviesdata);

        if(!moviesdata){
            alert("No results found. Please try a different movie name");
            return;
        }

        const moviescontainer = document.getElementById("movies");
        moviescontainer.innerHTML = "";

        // const data = moviesdata.search;
        
        moviesdata.Search.forEach(movie => {
            let card = document.createElement("div");
            card.className = "card";

            let title = document.createElement("h2");
            title.textContent = movie.Title;
            title.style = "font-size:25px;"

            let poster = document.createElement("img");
            poster.src = movie.Poster;
            poster.style = "width:80%;"

            let releasedyear = document.createElement("p");
            releasedyear.innerHTML = "Release Year: " + movie.Year;
            releasedyear.style = "color:red; align-text:left;"

            let plot = document.createElement("p");
            plot.textContent = movie.Plot;

            card.append(title, poster,releasedyear, plot);
            moviescontainer.appendChild(card);      
         });  
    }
    catch(error) {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching movie data. Please try again later.");
    }
}
