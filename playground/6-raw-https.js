const https = require('https')
const latitude = "37.7749"
const longitude = "-122.4194"
const url = 'https://api.darksky.net/forecast/788a1670331357d3caead0cdbc7cf261/' + latitude + ',' + longitude +'?units=us'

const request = https.request(url, (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)

    })

})

request.on('error', (error) => {
    console.log('An error', error)
})

request.end()
