export class EventHandler {
  constructor(quizManager) {
    this.quizManager = quizManager;
  }

  init() {
    const startQuiz = document.querySelector(".start-button");
    const QuizPage = document.querySelector(".quiz-page");
    const startPage = document.querySelector(".start-page");

    startQuiz.addEventListener("click", () => {
      startPage.classList.remove("active");
      QuizPage.classList.add("active");
      this.quizManager.startQuiz();
    });
  }
}
