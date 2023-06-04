
const searchFormHandler = async (event) => {
    event.preventDefault();
    const QUERY = document.querySelector('#search-bar').value;
    const response = await fetch(`/search/${QUERY}`, {
      method: 'GET',
      
      
    });
    if (response.ok) {
      document.location.replace(`/search/${QUERY}`);
    } else {
      alert('SOMETHING BAD HAPPENED');
    }
  };

document.querySelector('#search-form').addEventListener('submit', searchFormHandler);
