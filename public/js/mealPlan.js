const dropDown = () => {
    
}

const mealPlan = async () => {
    const response = await fetch(`/api/update/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        id,
        name,
        ingredient,
        url,
        img,
        day,
       }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
        alert('Added to your meal plan!')
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#meal-plan').addEventListener('click', mealPlan);
  document.querySelector('#dropdown-toggle').addEventListener('click', dropDown);