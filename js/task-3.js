const fieldEl = document.querySelector('#name-input');
const greetings = document.querySelector('#name-output');
fieldEl.addEventListener('input', event => {
    if (event.currentTarget.value.trim() === '') {
    greetings.textContent = 'Anonymous';
  } else {
    greetings.textContent = event.currentTarget.value.trim();
  }
   } 
)
