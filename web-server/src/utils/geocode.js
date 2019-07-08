const request = require('request')

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWRyaWFuY2FiIiwiYSI6ImNqeDQ0ajdmbDAwaTYzeXF3eWs0Zmdqd2oifQ.yl-7xZvu42_H5yABVoVhSw&limit=1'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude:  body.features[0].center[1],
                location: body.features[0].place_name
            })
        }

    })
}

// const forecast = (latitude, longitude, callback) => {
   
//     const url = 'https://api.darksky.net/forecast/788a1670331357d3caead0cdbc7cf261/' + latitude+ ',' + longitude +'?units=us'
    
//     request({ url: url, json: true}, (error, response) => {
//         if(error){
//             callback('Unable to connect to location services!', undefined)
//         }else if (response.body.message){
//             callback('Unable to find location. Try another serch', undefined)
//         }else{
//             calback(undefined, {
//                  temperature: response.body.currently.temperature, 
//                  rainChance: response.body.currently.precipProbability

        
//             })
//         }
//     })
// }


module.exports = geocode