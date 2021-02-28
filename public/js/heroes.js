// injects nodes with info into the container
function injectHeroInfo(data) {
    const container = document.getElementById('heroes-container')
    for (const hero of data) {
        const textnode = document.createElement('div');
        textnode.innerHTML = hero.name
        textnode.className = 'heroes'
        container.appendChild(textnode)
    }
}


// fetch all heroes and then run container injection
fetch(`http://localhost:8080/api/users/getHeroes`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log('data ->', data)
        injectHeroInfo(data)
    }).catch(err => console.log('err', err))