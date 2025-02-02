const dDayForm = document.getElementById("dday-form");
const dDayInput = dDayForm.querySelector("input");
const dDayBlock = document.getElementById("dDayBlock");

function paintdDay(newdDay) {
  console.log(newdDay);
  const span = document.createElement("span");
  span.innerText = newdDay;
  dDayBlock.appendChild(span);
}

function dDaySubmit(event) {
  event.preventDefault();
  // console.log(dDayInput.value);
  const newdDay = dDayInput.value;
  dDayInput.value = "";
  paintdDay(newdDay);
}

dDayForm.addEventListener("submit", dDaySubmit);
