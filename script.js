// Animazione semplice dello scroll indicator
const line = document.querySelector('.scroll-indicator .line');

let height = 60;
let direction = -1;

setInterval(() => {
  height += direction * 0.5;

  if (height <= 40 || height >= 60) {
    direction *= -1;
  }

  line.style.height = height + 'px';
}, 30);

// Funzione per animare il contatore
const animateCounter = () => {
  const counter = document.getElementById("counter");
  const target = 12; // Arriva a 12
  let count = 0;
  const speed = 150; // Millisecondi tra un numero e l'altro

  const updateCount = setInterval(() => {
    count++;
    counter.innerText = count;
    if (count === target) {
      clearInterval(updateCount);
    }
  }, speed);
};

// Avvia l'animazione quando la sezione è visibile
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter();
      observer.unobserve(entry.target); // Ferma l'osservatore dopo l'animazione
    }
  });
}, { threshold: 0.5 }); // Parte quando il 50% della sezione è visibile

// Seleziona la sezione stats da osservare
const statsSection = document.querySelector('.stats-section');
if (statsSection) {
  observer.observe(statsSection);
}
