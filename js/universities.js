// Get stream from URL (e.g., ?stream=Engineering)
const params = new URLSearchParams(window.location.search);
const selectedStream = params.get('stream');

fetch('data/universities.json')
  .then(response => response.json())
  .then(data => {
    const filtered = data.filter(u => u.stream === selectedStream);
    const container = document.getElementById('university-list');

    if (filtered.length === 0) {
      container.innerHTML = `<p>No universities found for ${selectedStream}.</p>`;
      return;
    }

    filtered.forEach(university => {
      const card = document.createElement('div');
      card.className = 'stream-card';
      card.innerHTML = `
        <strong>${university.name}</strong><br>
        📍 ${university.location}<br>
        🏫 ${university.type}<br>
        ⭐ Rank: ${university.rank}
      `;
      container.appendChild(card);
    });
  });
