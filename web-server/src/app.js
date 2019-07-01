const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
//set path to files

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather app',
        name: 'Adrian Cabreros'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        forcast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        about: 'Im a software developer',
        exp: '10',
        name: 'Adrian Cabreros'
    })
})

app.get('/help/', (req, res) => {
    res.render('help', { 
        title: 'Help page',
        description: 'This is some helpful text',
        question: 'more help?',
        name: 'Adrian Cabreros'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Adrian Cabreros',
        errorMessage: 'Help article not found'
    })
    
})

app.get('*', (req,res) => {
    res.render('404', {
        title: '404',
        name: 'Adrian Cabreros',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})

