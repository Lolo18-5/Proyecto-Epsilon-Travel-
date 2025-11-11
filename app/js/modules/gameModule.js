// js/modules/gameModule.js

const questions = {
    easy: [
        {
            question: "¿Cuál es la capital de Uruguay?",
            options: ["Montevideo", "Buenos Aires", "Asunción", "Santiago"],
            answer: 0
        },
        {
            question: "¿Qué color no está en la bandera de Uruguay?",
            options: ["Azul", "Blanco", "Amarillo", "Rojo"],
            answer: 3
        },
        {
            question: "¿Cuál es el río más importante de Uruguay?",
            options: ["Río Amazonas", "Río Uruguay", "Río de la Plata", "Río Negro"],
            answer: 1
        },
        {
            question: "¿Qué deporte es más popular en Uruguay?",
            options: ["Básquetbol", "Fútbol", "Tenis", "Rugby"],
            answer: 1
        },
        {
            question: "¿Cuál es la bebida tradicional de Uruguay?",
            options: ["Café", "Mate", "Té", "Chocolate"],
            answer: 1
        },
        {
            question: "¿Cómo se llama el balneario más famoso de Uruguay?",
            options: ["Punta del Este", "Cancún", "Miami", "Mar del Plata"],
            answer: 0
        },
        {
            question: "¿Qué animal aparece en el escudo de Uruguay?",
            options: ["León", "Águila", "Caballo", "Toro"],
            answer: 3
        },
        {
            question: "¿Cuál es la moneda de Uruguay?",
            options: ["Dólar", "Euro", "Peso Uruguayo", "Real"],
            answer: 2
        },
        {
            question: "¿Qué famoso escritor uruguayo escribió 'Las venas abiertas de América Latina'?",
            options: ["Mario Benedetti", "Eduardo Galeano", "Juan Carlos Onetti", "Horacio Quiroga"],
            answer: 1
        },
        {
            question: "¿Qué producto es Uruguay famoso por exportar?",
            options: ["Petróleo", "Carne", "Café", "Electrónicos"],
            answer: 1
        }
    ],
    medium: [
        {
            question: "¿En qué año Uruguay ganó su primer Copa del Mundo de Fútbol?",
            options: ["1930", "1950", "1970", "1990"],
            answer: 0
        },
        {
            question: "¿Qué departamento uruguayo es conocido por sus termas?",
            options: ["Salto", "Maldonado", "Rocha", "Canelones"],
            answer: 0
        },
        {
            question: "¿Cuál es el nombre del palacio presidencial en Uruguay?",
            options: ["Palacio de Gobierno", "Palacio Legislativo", "Torre Ejecutiva", "Casa Rosada"],
            answer: 2
        },
        {
            question: "¿Qué famoso monumento se encuentra en Punta del Este?",
            options: ["Los Dedos", "Cristo Redentor", "Torre Eiffel", "Estatua de la Libertad"],
            answer: 0
        },
        {
            question: "¿Cuál es el nombre del aeropuerto internacional de Montevideo?",
            options: ["Aeropuerto de Carrasco", "Aeropuerto de Punta del Este", "Aeropuerto de Laguna del Sauce", "Aeropuerto de Santa Bernardina"],
            answer: 0
        },
        {
            question: "¿Qué batalla importante ocurrió en Uruguay en 1825?",
            options: ["Batalla de Sarandí", "Batalla de Las Piedras", "Batalla de Rincón", "Batalla de Tacuarembó"],
            answer: 0
        },
        {
            question: "¿Qué famoso cantante uruguayo es conocido como 'El Sabalero'?",
            options: ["Jorge Drexler", "Eduardo Mateo", "Alfredo Zitarrosa", "José Carbajal"],
            answer: 3
        },
        {
            question: "¿Qué departamento de Uruguay limita con Brasil?",
            options: ["Rivera", "Colonia", "San José", "Flores"],
            answer: 0
        },
        {
            question: "¿Cuál es el nombre del principal equipo de fútbol de Uruguay?",
            options: ["Peñarol", "Nacional", "Defensor Sporting", "Danubio"],
            answer: 0
        },
        {
            question: "¿Qué famoso festival de música se realiza en Punta del Este?",
            options: ["Lollapalooza", "Festival de Jazz", "Sunset", "Punta del Este Electro"],
            answer: 2
        }
    ],
    hard: [
        {
            question: "¿Quién fue el primer presidente de Uruguay?",
            options: ["José Batlle y Ordóñez", "Fructuoso Rivera", "Luis Batlle Berres", "Juan Antonio Lavalleja"],
            answer: 1
        },
        {
            question: "¿En qué año se promulgó la primera constitución de Uruguay?",
            options: ["1811", "1830", "1851", "1917"],
            answer: 1
        },
        {
            question: "¿Qué famoso pintor uruguayo es conocido por sus obras abstractas?",
            options: ["Pedro Figari", "Joaquín Torres García", "Carlos Páez Vilaró", "Rafael Barradas"],
            answer: 1
        },
        {
            question: "¿Qué tratado estableció los límites entre Uruguay y Brasil en 1851?",
            options: ["Tratado de Montevideo", "Tratado de Río de Janeiro", "Tratado de la Cuenca del Plata", "Tratado de Asunción"],
            answer: 0
        },
        {
            question: "¿Qué famoso escritor uruguayo escribió 'El astillero'?",
            options: ["Mario Benedetti", "Eduardo Galeano", "Juan Carlos Onetti", "Horacio Quiroga"],
            answer: 2
        },
        {
            question: "¿Qué departamento uruguayo es conocido por su producción de vino?",
            options: ["Canelones", "Maldonado", "Colonia", "Salto"],
            answer: 0
        },
        {
            question: "¿Qué famoso científico uruguayo ganó el Premio Nobel?",
            options: ["Clemente Estable", "Rodolfo Gambini", "Mario Wschebor", "Ninguno ha ganado"],
            answer: 3
        },
        {
            question: "¿Qué famoso monumento histórico se encuentra en Colonia del Sacramento?",
            options: ["Faro de Colonia", "Portón de Campo", "Basílica del Santísimo Sacramento", "Todos los anteriores"],
            answer: 3
        },
        {
            question: "¿Qué famoso músico uruguayo compuso 'La cumparsita'?",
            options: ["Gerardo Matos Rodríguez", "Eduardo Fabini", "Héctor Tosar", "Abel Carlevaro"],
            answer: 0
        },
        {
            question: "¿Qué famoso balneario uruguayo fue fundado por Francisco Piria?",
            options: ["Punta del Este", "Piriápolis", "La Paloma", "Punta Ballena"],
            answer: 1
        }
    ]
};

let currentQuestions = [];
let currentQuestionIndex = 0;
let correctAnswers = 0;
let gameInProgress = false;

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const currentQuestionDisplay = document.getElementById('current-question');
const difficultyFill = document.getElementById('difficulty-fill');
const difficultyText = document.getElementById('difficulty-text');
const progressPercent = document.getElementById('progress-percent');
const progressFill = document.getElementById('progress-fill');
const restartButton = document.getElementById('restart-game');

export function initGame() {
    if (!questionText) return; // Salir si los elementos del juego no están en el DOM
    
    currentQuestions = [
        ...questions.easy.map(q => ({ ...q, difficulty: 'easy' })),
        ...questions.medium.map(q => ({ ...q, difficulty: 'medium' })),
        ...questions.hard.map(q => ({ ...q, difficulty: 'hard' }))
    ];
    
    currentQuestions = shuffleArray(currentQuestions);
    
    currentQuestionIndex = 0;
    correctAnswers = 0;
    gameInProgress = true;
    
    updateProgress();
    showQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        endGame();
        return;
    }

    const question = currentQuestions[currentQuestionIndex];
    currentQuestionDisplay.textContent = currentQuestionIndex + 1;
    questionText.innerHTML = `<span class="question-icon">❓</span><span class="question-main-text">${question.question}</span>`;
    questionText.classList.remove('question-animate');
    void questionText.offsetWidth;
    questionText.classList.add('question-animate');

    if (question.difficulty === 'easy') {
        difficultyFill.style.backgroundColor = '#4CAF50';
        difficultyFill.style.width = '33%';
        difficultyText.textContent = 'Fácil';
    } else if (question.difficulty === 'medium') {
        difficultyFill.style.backgroundColor = '#FFC107';
        difficultyFill.style.width = '66%';
        difficultyText.textContent = 'Intermedio';
    } else {
        difficultyFill.style.backgroundColor = '#F44336';
        difficultyFill.style.width = '100%';
        difficultyText.textContent = 'Difícil';
    }

    optionsContainer.innerHTML = '';

    question.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.className = 'game-option';
        optionButton.textContent = option;
        optionButton.dataset.index = index;
        optionButton.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(optionButton);
    });
}

function checkAnswer(selectedIndex) {
    if (!gameInProgress) return;

    const question = currentQuestions[currentQuestionIndex];
    const optionButtons = document.querySelectorAll('.game-option');

    optionButtons.forEach(button => {
        button.disabled = true;
    });

    optionButtons.forEach(button => {
        const buttonIndex = parseInt(button.dataset.index);
        if (buttonIndex === question.answer) {
            button.classList.add('correct');
        } else if (buttonIndex === selectedIndex && selectedIndex !== question.answer) {
            button.classList.add('incorrect');
        }
    });

    if (selectedIndex === question.answer) {
        correctAnswers++;
    }

    updateProgress();

    setTimeout(() => {
        currentQuestionIndex++;
        showQuestion();
    }, 1500);
}

function updateProgress() {
    const totalRespondidas = currentQuestionIndex > 0 ? currentQuestionIndex : 1;
    const percentage = Math.round((correctAnswers / totalRespondidas) * 100);
    progressPercent.textContent = percentage;
    progressFill.style.width = `${percentage}%`;

    if (percentage >= 70) {
        progressFill.style.backgroundColor = '#4CAF50';
    } else if (percentage >= 40) {
        progressFill.style.backgroundColor = '#FFC107';
    } else {
        progressFill.style.backgroundColor = '#F44336';
    }
}

function endGame() {
    gameInProgress = false;
    questionText.textContent = `¡Juego terminado! Puntuación final: ${correctAnswers}/${currentQuestions.length}`;
    optionsContainer.innerHTML = '';
    currentQuestionDisplay.textContent = currentQuestions.length;
}

// Asociar el evento al botón de reinicio una sola vez
if (restartButton) {
    restartButton.addEventListener('click', initGame);
}