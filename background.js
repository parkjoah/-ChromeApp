const images = ["CA0.jpg", "CA01.jpg", "CA02.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// console.log(bgImage);

document.body.appendChild(bgImage);
