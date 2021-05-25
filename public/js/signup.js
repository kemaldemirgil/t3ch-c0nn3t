const signupHandler = async (event) => {
  event.preventDefault();
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert('Failed to sign up.');
    }
  }
};

document.querySelector(".signup-form").addEventListener("submit", signupHandler);

////////////////////////////BACKGROUND-BLUR////////////////////////////

const password = document.getElementById('password-signup')
const background = document.querySelector('.background')

password.addEventListener('input', (e) => {
  const input = e.target.value
  const length = input.length
  const blurValue = 15 - length * 2
  background.style.filter = `blur(${blurValue}px)`
})