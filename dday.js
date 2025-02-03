const dDayForm = document.getElementById("dday-form");
const dDayInput = dDayForm.querySelector("#dDayInput");
const dDayBlock = document.getElementById("dDayBlock");
const dDayPopBtn = document.querySelector("#container button:last-child");
const dDayPop = document.getElementById("dDayPop");
const dDayDate = dDayForm.querySelector("#dDayDate");
const dDayDelBtn = dDayForm.querySelector("#dDaydelBtn");

const dDaySpan = dDayBlock.querySelector("#dDaySpan");
const dDateSpan = dDayBlock.querySelector("#dDateSpan");
function paintdDay(newdDay, targetDate) {
  console.log(newdDay);
  dDaySpan.innerText = newdDay;
  dDateSpan.innerText = "D - " + countDday(targetDate);
  dDaySpanShow();
  popDday();
}

function dDaySubmit(event) {
  event.preventDefault();
  // console.log(dDayInput.value);
  const newdDay = dDayInput.value;
  const newdDate = dDayDate.value;
  const targetDate = new Date(newdDate); //형식 맞추기...
  // console.log(dDayDate.value);
  dDayDate.value == ""
    ? alert("날짜를 설정해주세요")
    : dDayInput.value == ""
    ? alert("디데이를 입력해주세요")
    : paintdDay(newdDay, targetDate);
  dDayInput.value = "";
  dDayDate.value = "";
}

function popDday() {
  dDayPop.className == ""
    ? dDayPop.classList.add(HIDDEN_CLASSNAME)
    : dDayPop.classList.remove(HIDDEN_CLASSNAME);
}

function dDayDel() {
  dDaySpan.innerText = "";
  // console.log(dDaySpan.innerText);
  dDaySpanShow();
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

function countDday(newdDate) {
  const todayDate = new Date();
  const dayCount = Math.ceil((newdDate - todayDate) / (1000 * 60 * 60 * 24));
  return dayCount;
}

// 헷갈리니까 해야 되는 거 메모//

// 누적해서 써지는데 이전 거 사라지도록 -ok
// localStorage에 저장 삭제 기능 (유지)
// 날짜 설정 -ok
// 날짜 기반 남은 날 계산해서 표시 -ok
// 당일이 되면 메세지가 뜨도록 함
// 삭제 / 저장 버튼 만들고 -ok
// submit 되면 입력 값 지우기 -ok
// 디데이 위에 생성된 span 눌러도 창이 뜨게 함 -ok
// 디데이 창 디자인 바꾸기
// 0시에 디데이 일 수 바뀌게?
