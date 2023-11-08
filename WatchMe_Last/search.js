const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");
const searchResultsModal = new bootstrap.Modal(document.getElementById("search-results-modal"));

const moviesData = [
    {
        title: "Dostuchatsya do nebes (1997)",
        genre: "criminal film, komediya, drama",
        country: "Russia",
        duration: "1h 27min"
    },
    {
        title: "Odnazhdy v... Hollywood (2019)",
        genre: "komediya, drama",
        country: "USA",
        duration: "2h 41min"
    },
    {
        title: "Kit (2022)",
        genre: "Drama",
        country: "USA",
        duration: "1h 57min"
    },
];


function performSearch(query) {
    searchResults.innerHTML = "";

    query = query.toLowerCase();

    moviesData.forEach(movie => {
        if (movie.title.toLowerCase().includes(query)) {
            const movieElement = document.createElement("div");
            movieElement.innerHTML = `
                <h4>${movie.title}</h4>
                <p>${movie.genre}</p>
                <p>${movie.country} ${movie.duration}</p>
            `;
            searchResults.appendChild(movieElement);
        }
    });

    if (searchResults.children.length === 0) {
        searchResults.innerHTML = "Nichego ne naydeno...";
    }

    searchResultsModal.show();
}

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const query = searchInput.value;
    performSearch(query);
});
