// Typing effect
const phrases = ["Engineer.", "Security enthusiast.", "Aspiring entrepreneur."];
let currentPhraseIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;

function typeEffect() {
  const typingElement = document.getElementById("typingText");
  const currentPhrase = phrases[currentPhraseIndex];
  
  if (isDeleting) {
    // Remove one character
    typingElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
    currentCharIndex--;
    
    if (currentCharIndex === 0) {
      // Done deleting, move to next phrase
      isDeleting = false;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      setTimeout(typeEffect, 500); // Brief pause before typing next phrase
      return;
    }
  } else {
    // Add one character
    typingElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
    currentCharIndex++;
    
    if (currentCharIndex === currentPhrase.length) {
      // Done typing, start deleting after a pause
      isDeleting = true;
      setTimeout(typeEffect, 2000); // Pause before deleting
      return;
    }
  }
  
  // Continue typing or deleting
  const speed = isDeleting ? 50 : 100; // Deleting is faster than typing
  setTimeout(typeEffect, speed);
}

// Start the typing effect
typeEffect();

fetch('./.netlify/functions/lastUpdatedDate')
.then(response => response.json())
.then(response => {
  document.getElementById("lastUpdatedDate").innerHTML = response.value;
});

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
if (currentTheme === 'dark') {
  body.classList.add('dark-mode');
  themeToggle.textContent = 'Light Mode';
}

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Update button text based on current mode
  if (body.classList.contains('dark-mode')) {
    themeToggle.textContent = 'Light Mode';
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = 'Dark Mode';
    localStorage.setItem('theme', 'light');
  }
});

