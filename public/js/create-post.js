async function createNewPost(event) {
  event.preventDefault();

  const title = document.querySelector('#post-title').value;
  const content = document.querySelector('#post-content').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      content
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    fetch('/api/users/dashboard').then(
      document.location.replace('/api/users/dashboard')
  );
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.create-post').addEventListener('submit', createNewPost);