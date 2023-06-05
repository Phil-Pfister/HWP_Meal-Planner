// login form handler and API call

const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  // console.log(email, password);

  try {
    if (email && password) {

      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      // console.log(response);

      if (response.ok) {
        // const res = await response.json();
        // alert(res.message);

        document.location.replace("/");
      } else {
        const res = await response.json();
        alert(res.message);
      }
    } else {
      alert('Please enter email and password');
    }
  } catch (error) {
    console.log(JSON.stringify(error));
    alert('An error occurred. Please try again later.');
  }
};

document
  .querySelector('#login-form')
  .addEventListener('submit', loginFormHandler);