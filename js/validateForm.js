/* Validate email form */
const email = document.getElementById('email');
const button = document.querySelector('.form_btn');

button.addEventListener('click', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    document.querySelector('#error').innerHTML = 'Please write the email in lower case';
  }
});
