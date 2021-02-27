function injectHeroInfo(data) {
    const container = document.getElementById('heroes-container')
    for (const hero of data) {
        const textnode = document.createElement('div');
        textnode.innerHTML = hero.name
        container.appendChild(textnode)
    }
}

fetch(`http://localhost:8080/api/users/getHeroes`)
    .then(response => {
        // console.log('hey mate ->', response.json())
        return response.json()
    })
    .then(data => {
        console.log('data ->', data)
        injectHeroInfo(data)
    }).catch(err => console.log('err', err))