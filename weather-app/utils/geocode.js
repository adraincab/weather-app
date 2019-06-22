const request = require('request')

const geocode = (address, callback) => {

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYWRyaWFuY2FiIiwiYSI6ImNqeDQ0ajdmbDAwaTYzeXF3eWs0Zmdqd2oifQ.yl-7xZvu42_H5yABVoVhSw&limit=1https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWRyaWFuY2FiIiwiYSI6ImNqeDQ0ajdmbDAwaTYzeXF3eWs0Zmdqd2oifQ.yl-7xZvu42_H5yABVoVhSw&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.message) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }

    })
}



module.exports = geocode