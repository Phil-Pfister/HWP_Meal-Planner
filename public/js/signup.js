// signup form handler and api call 

const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  try {
    if (username && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        const errorData = await response.json();
        console.log(errorData);
        alert(errorData.message || 'An error occurred during signup.');
      }
    } else {
      alert('Please fill in all fields.');
    }
  } catch (error) {
    console.log(JSON.stringify(error));
    alert('An error occurred. Please try again later.');
  }
};

document
  .querySelector('#signup-form')
  .addEventListener('submit', signupFormHandler);