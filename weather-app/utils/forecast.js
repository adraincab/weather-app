const request = require('request')

const forecast = (latitude, longitude, callback) => {
   
    const url = 'https://api.darksky.net/forecast/788a1670331357d3caead0cdbc7cf261/' + latitude + ',' + longitude +'?units=us'
    
    request({ url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
        }else if (response.body.error){
            callback('Unable to find location. Try another serch', undefined)
        }else{
            callback(undefined, response.body.daily.data[0].summary +' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.' )
        }
    })
}

module.exports = forecast