let finding = document.querySelector(".picture");
let btn = document.querySelector(".btn");
let btn2 = document.querySelector(".btn2");

function dogBreed() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((finding) => {
      let woofers = finding.json();
      return woofers;
    })
    .then((data) => {
      let ul = document.querySelector("ul");
      let li = document.createElement("li");
      let img = document.createElement("img");

      finding.src = data.message;
      img.classList = "img";
      li.appendChild(img);
      ul.appendChild(li);
    })
    .catch((err) => console.log("err", err));
}

btn.addEventListener("click", () => {
    dogBreed();
});

btn2.addEventListener("click", () => {
    dogBreed();
});

dogBreed();