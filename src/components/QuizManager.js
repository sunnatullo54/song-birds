import { birdsData } from "../../assets/db/data.js";

export class QuizManager {
    constructor() {
        this.currentCategory = 0;
        this.currentBird = null;
    }

    startQuiz() {
        this.initQuestion();
    }

    initQuestion() {
        const categoryBird = birdsData[this.currentCategory];
        const randomNumber = Math.floor(Math.random() * categoryBird.length);
        this.currentBird = categoryBird(randomNumber);

        console.log(this.currentBird);
    }
}