const fs = require('fs')
const chalk = require('chalk')


//adds notes to the list
const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)
    if(!duplicateNote){

        notes.push({
            title: title,
            body: body

        })
        
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }

}


//remove a note
const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    
    if(notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep)

    } else{
        console.log(chalk.red.inverse('No Note found!'))
    }
    
}
//saves notes and writes to JSON
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

//loads array of notes
const loadNotes =  () => {
   //error handling to check if file exists
    try{
     const dataBuffer = fs.readFileSync('notes.json')
     const dataJSON = dataBuffer.toString()
     return JSON.parse(dataJSON)

    } catch(e){
        return []

    }
 
}

const listNotes = () => {
    const notes = loadNotes()

    notes.forEach((note) => {
        console.log(chalk.blue(note.title))
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)

    if(note){
        console.log(chalk.blue.inverse(note.title))
        console.log(note.body)
    }else{
        console.log(chalk.red("No note found!"))
    }
    

}

module.exports = {
    addNote: addNote, 
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}