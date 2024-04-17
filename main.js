// Defining constants for empty and full heart symbols.
const EMPTY_HEART = '♡';
const FULL_HEART = '❤';

// Selecting elements from the DOM.
const likeGlyph = document.querySelector('.like-glyph');
const modal = document.querySelector('#modal');
const modalMessage = document.querySelector('#modal-message');
modal.classList.add('hidden');

// Adding event listener to handle like button clicks.
likeGlyph.addEventListener('click', () => {
  // Simulating server call to like the post.
  mimicServerCall()
    .then(() => {
      // On success, change the heart glyph and style.
      likeGlyph.textContent = FULL_HEART;
      likeGlyph.classList.add('activated-heart');
    })
    .catch(error => {
      // On failure, display error message in modal.
      modalMessage.textContent = error;
      modal.classList.remove('hidden');
      // Hide modal after 3 seconds.
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 3000);
    });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

// Function to mimic server call with random success/failure.
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      // Simulate random server failure.
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
