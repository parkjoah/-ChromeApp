const dDayForm = document.getElementById("dday-form");
const dDayInput = dDayForm.querySelector("#dDayInput");
const dDayBlock = document.getElementById("dDayBlock");
const dDayPopBtn = document.querySelector("#container button:last-child");
const dDayPop = document.getElementById("dDayPop");
const dDayDate = dDayForm.querySelector("#dDayDate");
const dDayDelBtn = dDayForm.querySelector("#dDaydelBtn");

const span = dDayBlock.querySelector("span");
function paintdDay(newdDay) {
  console.log(newdDay);
  span.innerText = newdDay;
  spanShow();
}

function dDaySubmit(event) {
  event.preventDefault();
  // console.log(dDayInput.value);
  const newdDay = dDayInput.value;
  // console.log(dDayDate.value);
  dDayDate.value == ""
    ? alert("날짜를 설정해주세요")
    : dDayInput.value == ""
    ? alert("디데이를 입력해주세요")
    : paintdDay(newdDay);
  dDayInput.value = "";
  dDayDate.value = "";
}

function popDday() {
  dDayPop.className == ""
    ? dDayPop.classList.add(HIDDEN_CLASSNAME)
    : dDayPop.classList.remove(HIDDEN_CLASSNAME);
}

function dDayDel() {
  span.innerText = "";
  // console.log(span.innerText);
  spanShow();
}

dDayForm.addEventListener("submit", dDaySubmit);

dDayPopBtn.addEventListener("click", popDday);
dDayDelBtn.addEventListener("click", dDayDel);

function spanShow() {
  span.innerText !== ""
    ? dDayBlock.classList.remove(HIDDEN_CLASSNAME)
    : dDayBlock.classList.add(HIDDEN_CLASSNAME);
}

// 헷갈리니까 해야 되는 거 메모//

// 누적해서 써지는데 이전 거 사라지도록 -ok
// localStorage에 저장 삭제 기능 (유지)
// 날짜 설정 -ok
// 날짜 기반 남은 날 계산해서 표시
// 당일이 되면 메세지가 뜨도록 함
// 삭제 / 저장 버튼 만들고 -ok
// submit 되면 입력 값 지우기 -ok
// 디데이 위에 생성된 span 눌러도 창이 뜨게 함
// 디데이 창 디자인 바꾸기
