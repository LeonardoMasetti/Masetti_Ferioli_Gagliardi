document.querySelector('#btn1').addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(resp => {
            if (!resp.ok) {
                throw new Error();
            }
            return resp.json();
        })
        .then(console.log)
        .catch(console.log);
});