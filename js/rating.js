// rating.js
let selectedRating = 0;

function initializeRatingCard() {
  document.querySelectorAll('.star').forEach((star, index) => {
    star.addEventListener('click', () => {
      selectedRating = index + 1;
      highlightStars(selectedRating);
    });
  });
}

function highlightStars(rating) {
  document.querySelectorAll('.star').forEach((star, i) => {
    star.textContent = i < rating ? '★' : '☆';
  });
}

function submitRating() {
  const comment = document.getElementById('comment').value;
  const college = document.querySelector('[data-college]').getAttribute('data-college');
  const key = `rating_${college.replace(/\s+/g, '_')}`;
  
  const previousRatings = JSON.parse(localStorage.getItem(key)) || [];
  previousRatings.push({ rating: selectedRating, comment });
  localStorage.setItem(key, JSON.stringify(previousRatings));

  document.getElementById('thanks').classList.remove('hidden');
  document.getElementById('comment').value = "";
  highlightStars(0);
  selectedRating = 0;
}
