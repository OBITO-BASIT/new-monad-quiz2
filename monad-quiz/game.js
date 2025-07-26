// Grab elements
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const timerElement = document.getElementById('timer');
const resultElement = document.getElementById('result');
const restartButton = document.getElementById('restart-button');
const backHomeBtn = document.getElementById("back-home-button");

let currentQuestionIndex = 0;
let selectedQuestions = [];
let score = 0;
let timer;
let timeLeft = 13;

// Load player info from localStorage/sessionStorage
// We'll get the user object with name and token
let player = null;

function loadPlayer() {
  const storedUser = localStorage.getItem('monadQuizUser');
  if (storedUser) {
    player = JSON.parse(storedUser);
    sessionStorage.setItem('playerName', player.name);
  } else {
    // fallback guest user
    player = { name: 'Guest', token: null };
    sessionStorage.setItem('playerName', 'Guest');
  }
}

loadPlayer();
const playerName = player.name;

// Utility: generate random token for user locking
function generateToken() {
  return Math.random().toString(36).substr(2, 9);
}

// Call this on username submit in your landing page to save user with token
function saveUser(name) {
  const stored = localStorage.getItem('monadQuizUser');
  if (!stored) {
    const token = generateToken();
    const userObj = { name, token };
    localStorage.setItem('monadQuizUser', JSON.stringify(userObj));
    player = userObj;
    sessionStorage.setItem('playerName', name);
    return true;
  } else {
    const userObj = JSON.parse(stored);
    if (userObj.name === name) {
      player = userObj;
      sessionStorage.setItem('playerName', name);
      return true;
    } else {
      alert('This username is already taken on this device.');
      return false;
    }
  }
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function pickRandomQuestions() {
  const shuffled = shuffle(questions);
  return shuffled.slice(0, 18);
}

function startTimer() {
  timeLeft = 13;
  timerElement.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      markAnswer(null); // Timeout, no answer chosen
    }
  }, 1000);
}

function showQuestion() {
  resetState();
  if (currentQuestionIndex >= selectedQuestions.length) {
    showResult();
    return;
  }
  const q = selectedQuestions[currentQuestionIndex];
  questionElement.textContent = q.question;
  q.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('answer-btn');
    button.addEventListener('click', () => {
      clearInterval(timer);
      markAnswer(option);
    });
    answerButtons.appendChild(button);
  });
  startTimer();
}

function resetState() {
  answerButtons.innerHTML = '';
  resultElement.textContent = '';
  restartButton.style.display = 'none';
}

function markAnswer(selectedOption) {
  const q = selectedQuestions[currentQuestionIndex];
  const buttons = answerButtons.querySelectorAll('button');
  buttons.forEach(button => {
    button.disabled = true;
    if (button.textContent === q.answer) {
      button.classList.add('correct');
    }
    if (button.textContent === selectedOption && selectedOption !== q.answer) {
      button.classList.add('wrong');
    }
  });

  if (selectedOption === q.answer) {
    score++;
  }
  currentQuestionIndex++;

  setTimeout(() => {
    showQuestion();
  }, 1000);
}

function showResult() {
  resetState();
  questionElement.textContent = '';
  timerElement.textContent = '';
  resultElement.textContent = `${playerName}, you scored ${score} / ${selectedQuestions.length}`;

  // Save to leaderboard in localStorage
  saveScore(player, score);

  restartButton.style.display = 'inline-block';
}

function saveScore(userObj, score) {
  // userObj: {name, token}
  let scores = JSON.parse(localStorage.getItem('monadQuizScores') || '[]');

  // Find if this user (by token) already exists
  const existingIndex = scores.findIndex(entry => entry.token === userObj.token);

  if (existingIndex !== -1) {
    // Update only if new score is higher
    if (score > scores[existingIndex].score) {
      scores[existingIndex].score = score;
      scores[existingIndex].name = userObj.name; // Update name if needed
    }
  } else {
    scores.push({ name: userObj.name, token: userObj.token, score });
  }

  // Sort descending and keep top 10
  scores.sort((a, b) => b.score - a.score);
  scores = scores.slice(0, 10);

  localStorage.setItem('monadQuizScores', JSON.stringify(scores));
}

restartButton.addEventListener('click', () => {
  currentQuestionIndex = 0;
  score = 0;
  selectedQuestions = pickRandomQuestions();
  resultElement.textContent = '';
  restartButton.style.display = 'none';
  showQuestion();
});

// On page load:
window.onload = () => {
  selectedQuestions = pickRandomQuestions();
  showQuestion();
};

// Back to Home button listener
document.addEventListener("DOMContentLoaded", () => {
  const backHomeBtn = document.getElementById("back-home-button");
  if (backHomeBtn) {
    backHomeBtn.addEventListener("click", () => {
      window.location.href = "index.html"; // Adjust if your homepage filename differs
    });
  }
});
