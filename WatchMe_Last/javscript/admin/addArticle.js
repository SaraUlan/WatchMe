document
  .getElementById("filmForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var filmName = document.getElementById("filmName").value;
    var continuance = document.getElementById("continuance").value;
    var directedBy = document.getElementById("directedBy").value;
    var genre = document.getElementById("genre").value;
    var image = document.getElementById("image").value;
    var imageFile = imageInput.files[0];
    var about = document.getElementById("about").value;

    var filmData = {
      name: filmName,
      continuance: continuance,
      directedBy: directedBy,
      genre: genre,
      image: image,
      about: about,
    };
    
    if (typeof Storage !== "undefined") {
      var films = JSON.parse(localStorage.getItem("films")) || [];
      films.push(filmData);
      localStorage.setItem("films", JSON.stringify(films));

      var catalogImage = document.getElementById("image");
      catalogImage.src = image;

      window.location.href = "catalog.html";
    } else {
      alert(
        "Sorry, your browser does not support Web Storage. Please use a modern browser."
      );
    }
  });
