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

