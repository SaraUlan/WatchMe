document.addEventListener("DOMContentLoaded", function (event) {
  event.preventDefault();
  var comment_btn = document.getElementById("comment_btn");
  var reviews = document.getElementById("reviews");
  var comment_text = document.getElementById("comment_text");

  comment_btn.addEventListener("click", function (event) {
    event.preventDefault(); 

    var review = document.createElement("div");
    review.classList.add("review");

    var review_author = document.createElement("div");
    review_author.classList.add("review-author");
    var img = document.createElement("img");
    img.setAttribute("src", "images/icon/profile.png");
    var h2 = document.createElement("h2");
    h2.textContent = "Ken";

    var review_content = document.createElement("div");
    review_content.classList.add("review-content");
    var h6 = document.createElement("h6");
    h6.textContent = comment_text.value;

    review_author.append(img, h2);

    review_content.append(h6);

    review.append(review_author, review_content);

    reviews.append(review);
  });
});
