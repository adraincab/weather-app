const path = require('path')
const express = require('express')

const app = express()
//set path to files
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))



app.get('/help', (req, res)=>{
    res.send([{
        name: 'Adrian'
    },{
        name: 'Sarah'
    }])
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forcast: 'It is snowing',
        location: 'Sacramento'
    })
})



app.listen(3000, () => {
    console.log('Server is up on port 3000')
})