// inject all requests into container
function injectRequestInfo(data) {
    const container = document.getElementById('requests-container')
    for (const request of data) {
        const textnode = document.createElement('div');
        textnode.innerHTML = request.name
        container.appendChild(textnode)
    }
}

// fetch all requests
fetch(`http://localhost:8080/requests/getRequests`)
    .then(response => {
        // console.log('hey mate ->', response.json())
        return response.json()
    })
    .then(data => {
        console.log('data ->', data)
        injectRequestInfo(data)
    }).catch(err => console.log('err', err))