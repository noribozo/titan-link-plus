// Get references to the taglines
const taglineEn = document.getElementById('tagline-en');
const taglineHu = document.getElementById('tagline-hu');

// Get references to the buttons
const englishBtn = document.getElementById('englishBtn');
const hungarianBtn = document.getElementById('hungarianBtn');

// Get references to the content sections
const englishSection = document.getElementById('english');
const hungarianSection = document.getElementById('hungarian');

// Add event listener for English button
englishBtn.addEventListener('click', () => {
  // Show English, hide Hungarian
  englishSection.classList.remove('hidden');
  hungarianSection.classList.add('hidden');
  // Toggle taglines
  taglineEn.classList.remove('hidden');
  taglineHu.classList.add('hidden');
  // Update button styles
  englishBtn.classList.add('active');
  hungarianBtn.classList.remove('active');
});

// Add event listener for Hungarian button
hungarianBtn.addEventListener('click', () => {
  // Show Hungarian, hide English
  hungarianSection.classList.remove('hidden');
  englishSection.classList.add('hidden');
  // Update button styles
  hungarianBtn.classList.add('active');
  englishBtn.classList.remove('active');
});