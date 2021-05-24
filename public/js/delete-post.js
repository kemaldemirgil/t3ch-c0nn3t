async function deleteFormHandler(event) {
    event.preventDefault();
    
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        body: JSON.stringify({
          post_id: id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        alert("Post deleted...")
        fetch('/api/users/dashboard').then(
          document.location.replace('/api/users/dashboard')
        )} else {
        alert(response.statusText);
      }
    
}
  
document.querySelector('.delete-post-button').addEventListener('click', deleteFormHandler);