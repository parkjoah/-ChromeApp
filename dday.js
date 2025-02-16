const dDayForm = document.getElementById("dday-form");
const dDayInput = dDayForm.querySelector("#dDayInput");
const dDayBlock = document.getElementById("dDayBlock");
const dDayPopBtn = document.querySelector("#container button:last-child");
const dDayPop = document.getElementById("dDayPop");
const dDayDate = dDayForm.querySelector("#dDayDate");
const dDayDelBtn = dDayForm.querySelector("#dDaydelBtn");

const NEWDDAY_KEY = "newdDay";
const TARGETDATE = "targetDate";

const dDaySpan = dDayBlock.querySelector("#dDaySpan");
const dDateSpan = dDayBlock.querySelector("#dDateSpan");
function paintdDay(newdDay, targetDate) {
  console.log(newdDay);
  dDaySpan.innerText = newdDay;
  dDateSpan.innerText = "D - " + countDday(targetDate);
  dDaySpanShow();
}

function dDaySubmit(event) {
  event.preventDefault();

  const newdDay = dDayInput.value;
  const newdDate = dDayDate.value;
  const targetDate = new Date(newdDate); //형식 맞추기...
  localStorage.setItem(NEWDDAY_KEY, newdDay);
  localStorage.setItem(TARGETDATE, targetDate);
  dDayDate.value == ""
    ? alert("날짜를 설정해주세요")
    : dDayInput.value == ""
    ? alert("디데이를 입력해주세요")
    : paintdDay(newdDay, targetDate);
  dDayInput.value = "";
  dDayDate.value = "";
  popDday();
}

function popDday() {
  dDayPop.className == ""
    ? dDayPop.classList.add(HIDDEN_CLASSNAME)
    : dDayPop.classList.remove(HIDDEN_CLASSNAME);
  toDoPopup.className == "" ? toDoPopup.classList.add(HIDDEN_CLASSNAME) : null;
}

function dDayDel() {
  dDaySpan.innerText = "";
  dDaySpanShow();
  localStorage.removeItem(NEWDDAY_KEY);
  localStorage.removeItem(HIDDEN_CLASSNAME);
}

dDayForm.addEventListener("submit", dDaySubmit);

dDayPopBtn.addEventListener("click", popDday);
dDayDelBtn.addEventListener("click", dDayDel);
dDayBlock.addEventListener("click", popDday);

function dDaySpanShow() {
  dDaySpan.innerText !== ""
    ? dDayBlock.classList.remove(HIDDEN_CLASSNAME)
    : dDayBlock.classList.add(HIDDEN_CLASSNAME);
}

function countDday(targetDate) {
  const todayDate = new Date();

  const dayCount = Math.ceil(
    (targetDate.getTime() - todayDate) / (1000 * 60 * 60 * 24)
  );
  return dayCount;
}

const savedDDay = localStorage.getItem(NEWDDAY_KEY);
const savedTargetDate = localStorage.getItem(TARGETDATE);

if ((savedDDay !== null) & (savedTargetDate !== null)) {
  paintdDay(savedDDay, new Date(savedTargetDate));
}
