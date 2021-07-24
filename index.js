const questionTexts = document.querySelectorAll(".question-text");
const questionTextsArr = Array.from(questionTexts);
const arrows = document.querySelectorAll(".arrow");
const arrowsArr = Array.from(arrows);
const answerContainers = document.querySelectorAll(".answer-container");
const answerContainersArr = Array.from(answerContainers);

questionTexts.forEach((text, index) => {
  text.addEventListener("click", function () {
    toggleClasses(index);
  });
});

arrows.forEach((arrow, index) => {
  arrow.addEventListener("click", function () {
    toggleClasses(index);
  });
});

function toggleClasses(index) {
  questionTextsArr[index].classList.toggle("bold");
  arrowsArr[index].classList.toggle("flip");
  answerContainersArr[index].classList.toggle("active");
}
