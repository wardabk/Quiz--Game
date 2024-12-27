const questions = [
    {
        question: "Quel est le résultat de 2+2 ?",
        options: ["3", "4", "5"],
        answer: 1,
    },
    {
        question: "Quelle est la capitale du Sénégal ?",
        options: ["Madrid", "Paris", "Dakar"],
        answer: 2,
    },
    {
        question: "Combien de continents existe-t-il ?",
        options: ["5", "6", "7"],
        answer: 0,
    },
    {
        question: "Quel est l'élément chimique dont le symbole est O ?",
        options: ["Oxygène", "Ozone", "Osmium"],
        answer: 0,
    }, 
    {
        question: "Quelle est la plus grande planète du système solaire ?",
        options: ["Terre", "Jupiter", "Saturne"],
        answer: 1,
    },
    {
        question: "Quel est l'auteur de 'Les Misérables' ?",
        options: ["Émile Zola", "Victor Hugo", "Gustave Flaubert"],
        answer: 1,
    },
    {    
        question: "Quelle est la valeur de Pi (approximative) ?",
        options: ["3.14", "3.15", "3.16"], 
        answer: 0,
    },
    {
        question: "Quel est l'animal terrestre le plus rapide ?",
        options: ["Lion", "Guépard", "Éléphant"],
        answer: 1,
    },
    {
        question: "Quel pays a remporté la Coupe du Monde de football 2018 ?",
        options: ["Brésil", "Allemagne", "France"],
        answer: 2,
    },
    {
        question: "Quel joueur détient le record du plus grand nombre de buts en Coupe du Monde ?",
        options: ["Cristiano Ronaldo", "Miroslav Klose", "Lionel Messi"],
        answer: 1,
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Initialiser les éléments DOM
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionBox = document.getElementById("question-box");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const scoreDisplay = document.getElementById("score-display");
const messageElement = document.getElementById("message");

// Commencer le quiz
startButton.addEventListener("click", () => {
    startButton.classList.add("d-none");
    questionBox.classList.remove("d-none");
    nextButton.classList.remove("d-none");
    scoreDisplay.classList.remove("d-none");
    showQuestion();
});

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    messageElement.textContent = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.className = "btn btn-outline-primary mb-2";
        button.addEventListener("click", () => selectAnswer(index, button));
        optionsElement.appendChild(button);
    });
}

function selectAnswer(selectedIndex, button) {
    const currentQuestion = questions[currentQuestionIndex];

    // Désactiver tous les boutons après une réponse
    const buttons = document.querySelectorAll("#options button");
    buttons.forEach((btn) => btn.disabled = true);

    if (selectedIndex === currentQuestion.answer) {
        score++;
        messageElement.textContent = "Bonne réponse !";
        messageElement.style.color = "green";
    } else {
        messageElement.textContent = "Mauvaise réponse";
        messageElement.style.color = "red";
    }

    scoreDisplay.textContent = `Score : ${score}`;
}

// Passer à la question suivante
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // Masquer le message pour la dernière question
        messageElement.textContent = "";
         // Masquer le button question suivante
        nextButton.classList.add("d-none");

        // Afficher le message final
        questionBox.innerHTML = `
            <h4 class="text-success">Quiz Terminé !</h4>
            <p class="text-center">Votre score est ${score}/${questions.length}</p>
        `;

        scoreDisplay.classList.add("d-none");   
    }
});

