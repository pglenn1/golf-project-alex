
const gamesContainer = document.getElementById('gamesContainer');

// Create 29 cards
for (let i = 1; i <= 29; i++) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <h2>Name ${i}</h2>
    <p>Description</p>
    <a href="#">Link</a>
  `;
  gamesContainer.appendChild(card);
}
