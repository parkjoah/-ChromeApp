const images = ["CA01.jpg", "CA02.jpg", "CA03.jpg", "CA04.jpg", "CA05.jpg"];

const imgChangeBtn = document.querySelector("#container button:nth-child(2)");

const bgImage = document.createElement("img");
bgImage.src = `img/CA05.jpg`;

document.body.appendChild(bgImage);

let bgNow = "";

function imgChange() {
  let chosenImage;
  do {
    chosenImage = images[Math.floor(Math.random() * images.length)];
  } while (bgNow == chosenImage);
  bgNow = chosenImage;
  bgImage.src = `img/${chosenImage}`;
}

imgChangeBtn.addEventListener("click", imgChange);
