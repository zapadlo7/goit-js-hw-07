const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', event => {
  event.preventDefault();

  const email = event.target.elements[0].value.trim();
  const password = event.target.elements[1].value.trim();

  if (!email || !password) {
    alert('All form fields must be filled in');
  }

  const formData = {
    email,
    password,
  };

  console.log(formData);

  loginForm.reset();
});
