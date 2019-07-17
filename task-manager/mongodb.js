// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require ('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id)
// console.log(id.toHexString())


//connect method connects to db server
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
       return console.log('Unable to connect to databse!')
    }

   const db = client.db(databaseName)

//    db.collection('users').deleteMany({
//        age: 27
//    }).then((result) => {
//        console.log(result)
//    }).catch((error) => {
//        console.log(error)
//    })
    
    db.collection('tasks').deleteMany({
        description: 'Clean your room'
    }).then((result) =>{
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

    

})