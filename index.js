const accordions = document.querySelectorAll(".dropdown-container");
const questionTexts = document.querySelectorAll(".question-text");
const questionTextsArr = Array.from(questionTexts);
const arrows = document.querySelectorAll(".arrow");
const arrowsArr = Array.from(arrows);
const answerContainers = document.querySelectorAll(".answer-container");
const answerContainersArr = Array.from(answerContainers);

function toggleClasses(index) {
  questionTextsArr[index].classList.toggle("bold");
  arrowsArr[index].classList.toggle("flip");
  answerContainersArr[index].classList.toggle("active");
}

accordions.forEach((accordion, index) => {
  accordion.addEventListener("click", function () {
    toggleClasses(index);
    questionTextsArr[index].classList.remove("hover");
  });

  accordion.addEventListener("mouseenter", function () {
    if (!questionTextsArr[index].classList.contains("bold")) {
      questionTextsArr[index].classList.add("hover");
    }
  });

  accordion.addEventListener("mouseleave", function () {
    questionTextsArr[index].classList.remove("hover");
  });
});
