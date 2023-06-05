async function deleteFormHandler(event) {
    event.preventDefault();
    if (event.target.hasAttribute('id')) {
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
  };

  async function detailsPage (event) {
    event.preventDefault();
    const recipe_id = event.target.getAttribute('data-num');

    if (event.target.hasAttribute('name')) {
      const response = await fetch(`api/recipe/details/${recipe_id}`, {
        method: 'GET'
      });

    
    if (response.ok) {
      // const recList = document.getElementById('rec-list');
      // const recIng = ingredients.split(',')
      // for (i = 0; i < recIng.length; i++) {
      //     recIng[i] = document.createElement('li')
      //     recList.appendChild(recIng[i]);
      // }
      
      document.location.replace(`/api/recipe/details/${recipe_id}`);
    } else {
      alert('No Recipe Found');
    }
  };
  };
  
  document.querySelector('.rec-card').addEventListener('mousedown', deleteFormHandler);
  document.querySelector('.rec-card').addEventListener('mousedown', detailsPage);