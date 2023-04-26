const API = "http://www.omdbapi.com/?i=tt3896198&apikey=33a1b2"


const apiKey = "http://www.omdbapi.com/?i=tt3896198&apikey=33a1b2";
const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}`;

// Get form elements
const searchForm = document.getElementById('search-form');
const movieNameInput = document.getElementById('searchInput');
const movieTypeInput = document.getElementById('typeSelect');

// Add event listener to form submit button
searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // Get search criteria
  const movieName = movieNameInput.value;
  const movieType = movieTypeInput.value;
  
  // Send AJAX request
  const url = `${apiUrl}&s=${movieName}&type=${movieType}`;
  fetch('${apiKey}')
    .then(response => response.json())
    .then(data => {
      // Handle response data
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
