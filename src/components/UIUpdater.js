import { birdsData } from "../../assets/db/data.js";

export class UIUpdater {
    startQuizUi() {
        const quizPage = document.querySelector('.quiz-page');
        const startPage = document.querySelector('.start-page');

        startPage.classList.remove('active');
        quizPage.classList.add('active');
    }

    updateBirdList(categoryBird) {
        const birdList = document.querySelector('#birdList');

        birdList.innerHTML = '';

        categoryBird.forEach((bird) => {
            const li = document.createElement('li');
            li.classList.add('bird-option');
            li.textContent = bird.name;
            li.dataset.bird = bird.name;

            birdList.appendChild(li);
        })
    }

    updateScore(score) {
        const scoreElement = document.querySelector('#score');

        scoreElement.textContent = score;
    }

    showBirdDetail(bird) {
        const BirdDetail = document.querySelector('.bird-details');

        BirdDetail.innerHTML = `
            <img src="${bird.image}" alt="${bird.name}" />
            <h2 class="bird-name">${bird.name}</h2>
            <p class="bird-species">${bird.species}</p>
            <div class="audio-player">
                <button class="play-btn" data-audio="${bird.audio}" id="mysteryAudioButton" aria-label="Play">▶</button>
                <div class="progress-bar">
                    <div class="progress" id="mysteryProgress"></div>
                </div>
                <span class="time" id="mysteryTime">00:00 / 00:00</span>
            </div>
            <p class="bird-description">${bird.description}</p>
        `
    }

    showMysteryBird(bird) {
        const mysteryBirdName = document.querySelector('#mysteryBirdName');
        const mysteryBirdImage = document.querySelector('#mysteryBirdImage');
        const species = document.querySelector('.species');

        mysteryBirdImage.src = bird.image;
        mysteryBirdName.textContent = bird.name;
        species.textContent = bird.species;
    }

    enableNextQuestion() {
        const nextButton = document.querySelector('#nextButton');

        nextButton.disabled = false;
    }

    clear() {
        const BirdDetail = document.querySelector('.bird-details');
        const mysteryBirdImage = document.querySelector('#mysteryBirdImage');
        const mysteryBirdName = document.querySelector('#mysteryBirdName');
        const species = document.querySelector('.species');
        const mysteryAudioButton = document.querySelector('#mysteryAudioButton');

        mysteryAudioButton.dataset.audio = '';
        mysteryBirdName.textContent = '******';
        species.textContent = '******';
        mysteryBirdImage.src = '../../assets/images/bird.jpg';

        birdsData.innerHTML = `
        <p>Послушайте плеер.<br>Выберите птицу из списка.</p>
        `
    }

}
