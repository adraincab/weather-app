const geocode = require('../weather-app/utils/geocode')
const forecast = require('../weather-app/utils/forecast')

const location = process.argv[2]
if(!location){
    console.log('Please provide an address')
}
geocode(location, (error, {latitude, longitude, location }) => {

   if(error){
       return console.log(error)
   }

     forecast(latitude, longitude, (error, forecastData) => {
       if(error) {
           return console.log(error)
       }
       console.log(location)
       console.log('Data', forecastData)
     })


})  