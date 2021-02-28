console.log("hello there")

// const location = document.location.href

const fullPath = location.pathname
const paths = fullPath.split('/')
const id = paths[2]

// inject account info into container
function injectAccountInfo(data) {
    const container = document.getElementById('account-container')
    for (const key in data) {
        const textnode = document.createElement('div');
        textnode.innerHTML = data[key]
        container.appendChild(textnode)
    }
}

// fetch account info
fetch(`http://localhost:8080/api/users/${id}`)
    .then(response => {
        // console.log('hey mate ->', response.json())
        return response.json()
    })
    .then(data => {
        console.log('data ->', data)
        injectAccountInfo(data)
    }).catch(err => console.log('err', err))