const request = require('request')

const url = 'https://api.darksky.net/forecast/788a1670331357d3caead0cdbc7cf261/37.8267,-122.4233?units=us'
const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWRyaWFuY2FiIiwiYSI6ImNqeDQ0ajdmbDAwaTYzeXF3eWs0Zmdqd2oifQ.yl-7xZvu42_H5yABVoVhSw&limit=1https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWRyaWFuY2FiIiwiYSI6ImNqeDQ0ajdmbDAwaTYzeXF3eWs0Zmdqd2oifQ.yl-7xZvu42_H5yABVoVhSw&limit=1'

request({ url: url, json: true }, (error, response) => {
    if(error){
        console.log('Unable to connect to weather service!')
    }else if(response.body.message){
        console.log('Unable to find location. Try another search')

    } else{
    const temperature = response.body.currently.temperature
    const rainChance = response.body.currently.precipProbability

       
    console.log(response.body.daily.data[0].summary +' It is currently ' + temperature + ' degrees out. There is a ' + rainChance + '% chance of rain.' )
    }
})



request({ url: geocodeUrl, json: true }, (error, response) => {
    if(error){
        console.log('Unable to connect to a network!')
    }else if(response.body.message){
        console.log('Unable to find location!')
    }else{
    const latitude = response.body.features[0].center[1]
    const longitude = response.body.features[0].center[0]
    console.log(longitude, latitude)
    }
   
})

