const formEl = document.querySelector('.login-form')
formEl.addEventListener('submit', event => {
    event.preventDefault();
  
    if (formEl.elements.email.value.trim() === '' || formEl.elements.password.value.trim() === '') {
          alert('All form fields must be filled in');
    }
    else {
         const formData = {
        [formEl.elements.email.name]: formEl.elements.email.value.trim(),
        [formEl.elements.password.name]:formEl.elements.password.value.trim(),
        } 
        console.log(formData)
        event.currentTarget.reset();
    }
    
})
