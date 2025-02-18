const palette = document.querySelector("#palette");
const paletteIcon = document.querySelector("#palette>button");
const container = document.querySelector("#palette div");

function iconClick() {
  console.log(container.classList);
  container.classList == ""
    ? container.classList.add(HIDDEN_CLASSNAME)
    : container.classList.remove(HIDDEN_CLASSNAME);
}

paletteIcon.addEventListener("click", iconClick);
