const query = () => {
    const options = ['beef', 'chicken', 'soup', 'seafood', 'curry', 'pasta', 'dessert', 'breakfast', 'cheese'];
    let i = Math.floor(Math.random() * options.length);
    return options[i];
};

module.exports = query;