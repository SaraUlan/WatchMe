var films = JSON.parse(localStorage.getItem("films")) || [];
const filmList = document.getElementById("page__film-left");

films.forEach(function (film) {
  var item =
    `
        <div class="page__films" id="${film.image}">
             <img src="` +
    film.image +
    `" alt="" id="$()" class="film__img">
                <ul class="list__film">
                <li class="film__title film__info">
                    <a href="detailPage.html" class="link-light">${film.name}</a>
                </li>
                <li class="film__add film__info">${film.about}</li>
                <li class="film__info">
                    Продолжительность: ${film.continuance}<br>
                    Режиссёр: ${film.directedBy}<br>
                    Жанр: ${film.genre}
                </li>
            </ul>
        </div>`;
  filmList.innerHTML += item;
  console.log(localStorage.getItem("films"));
});
