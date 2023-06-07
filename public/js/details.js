//calls the recipes details page when button is clicked

async function detailsPage (event) {
    event.preventDefault();

    if (!event.target.hasAttribute('name')) {
        return;
    }
    const recipe_id = event.target.getAttribute('data-num');

    const response = await fetch(`api/recipe/details/${recipe_id}`, {
        method: 'GET'
      });

    if (response.ok) {
      document.location.replace(`/api/recipe/details/${recipe_id}`);
    } else {
      alert('No Recipe Found');
    }
  };

  document.querySelector('.rec-card').addEventListener('mousedown', detailsPage);