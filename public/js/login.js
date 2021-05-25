const loginHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
      
    if (response.ok) {
      document.location.replace('/api/users/home');
    } else {
      alert('Failed to log in.');
    }
  }
};

document.querySelector(".login-form").addEventListener("submit", loginHandler);

////////////////////////////BACKGROUND-BLUR////////////////////////////

const password = document.getElementById('password-login')
const background = document.querySelector('.background')

password.addEventListener('input', (e) => {
  const input = e.target.value
  const length = input.length
  const blurValue = 15 - length * 2
  background.style.filter = `blur(${blurValue}px)`
})
