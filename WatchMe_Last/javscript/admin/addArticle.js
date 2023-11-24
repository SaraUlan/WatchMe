document
  .getElementById("filmForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var filmName = document.getElementById("filmName").value;
    var continuance = document.getElementById("continuance").value;
    var directedBy = document.getElementById("directedBy").value;
    var genre = document.getElementById("genre").value;
    var imageInput = document.getElementById("image");
    var about = document.getElementById("about").value;
    var filmData = {
      name: filmName,
      continuance: continuance,
      directedBy: directedBy,
      image: "",
      genre: genre,
      about: about,
    };
    if (imageInput.files && imageInput.files[0]) {
      var file = imageInput.files[0];

      var reader = new FileReader();

      reader.onload = function (e) {
        var imageData = e.target.result;
        filmData.image = imageData;
        var films = JSON.parse(localStorage.getItem("films")) || [];
        films.push(filmData);
        localStorage.setItem("films", JSON.stringify(films));

        var catalogImage = document.getElementById("image");
        catalogImage.src = filmData.image; 

        console.log(filmData.image);
      };
      if (typeof Storage !== "undefined") {
        window.location.href = "catalog.html";
      } else {
        alert(
          "Sorry, your browser does not support Web Storage. Please use a modern browser."
        );
      }
      reader.readAsDataURL(file);
    }
  });
