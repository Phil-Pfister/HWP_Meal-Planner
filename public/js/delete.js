async function deleteFormHandler(event) {
    event.preventDefault();
  
    const recipe_id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
  
    const response = await fetch(`/api/delete/recipe/${recipe_id}`, {
      method: 'DELETE'
    });
  
    if (response.ok) {
      document.location.replace('/userRecipes');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.delete-button').addEventListener('click', deleteFormHandler);