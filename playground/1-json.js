const fs = require('fs')


//reads from json file and converts to a string
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)


data.name = 'Meegan'
data.planet = 'Mars'
data.age = '21'

//overwrites data in json file 
const userJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', userJSON)

