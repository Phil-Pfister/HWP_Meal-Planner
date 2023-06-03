async function deleteFormHandler(event) {
    event.preventDefault();
  
    const recipe_id = event.target.getAttribute('data-id');
  
  
    const response = await fetch(`/api/delete/recipe/${recipe_id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/recipes');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-button').addEventListener('click', deleteFormHandler);