document.querySelector('#btn1').addEventListener('click', () => {
    fetch('www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
        .then(resp => {
            if (!resp.ok) {
                throw new Error();
            }
            return resp.json();
        })
        .then(console.log)
        .catch(console.log);
});