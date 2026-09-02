const loadData = async () => {
    try {
        const chunkFetch = await fetch('https://api.chucknorris.io/jokes/random', {
            Accept: 'application/json'
        });
        const jokeData = await chunkFetch.json()
        document.getElementById('loadingJoke').innerHTML = jokeData.value;
    } catch (error) {
        console.log('Cannot fetch the jokes!', error)
    }
}

document.getElementById('loadJokeBtn').addEventListener('click', loadData);