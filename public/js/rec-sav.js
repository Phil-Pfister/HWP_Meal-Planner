//recipe save handler

const saveButtonHandler = async (event) => {
    event.preventDefault();
   
    
    const name = event.target.getAttribute('data-name');
    const img = event.target.getAttribute('data-image');
    const ingredients = event.target.getAttribute('data-ing');
    const url = event.target.getAttribute('data-id')

    
    if (event.target.hasAttribute('data-id')) {

    
    const response = await fetch('/api/save', {
        method: 'POST',
        body: JSON.stringify({ name, img, ingredients, url }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
       
        document.location.replace('/recipes')
    } else {
        alert('Failed to save');
    }
};
};

document.querySelector('.rec-card-body').addEventListener('mousedown', saveButtonHandler);