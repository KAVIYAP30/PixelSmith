const modeToggleBtn = document.getElementById('mode-toggle');
const voiceSearchBtn = document.getElementById('voice-search-btn');
const body = document.body;

modeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    modeToggleBtn.textContent = 'Switch to Light Mode';
  } else {
    modeToggleBtn.textContent = 'Switch to Dark Mode';
  }
});

voiceSearchBtn.addEventListener('click', () => {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';

  recognition.start();

  recognition.onresult = (event) => {
    const transcript = event.results[0][0].transcript;
    alert(`You said: ${transcript}`);
  };

  recognition.onerror = (event) => {
    alert('Error occurred while recognizing speech: ' + event.error);
  };
});
