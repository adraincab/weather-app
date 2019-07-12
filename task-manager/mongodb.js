// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const { MongoClient, ObjectID } = require ('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()
console.log(id.id)
console.log(id.toHexString())


//connect method connects to db server
MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
       return console.log('Unable to connect to databse!')
    }

   const db = client.db(databaseName)

//    db.collection('users')

//    db.collection('users').insertOne({
//        _id: id,
//        name: 'Vikram',
//        age: 30
//    }, (error, result) => {
//         if (error){
//             return console.log('Unable to insert user')
//         }
//         //contains all documents that was inserted
//         //array of documents
//         console.log(result.ops)
//    })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Jen',
    //         age: 28
    //     }, {
    //         name: 'Gunther',
    //         age: 27
    //     }
    // ], (error, result) => {
    //     if (error){
    //         return console.log('Unable to insert documents!')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Buy basketball shoes',
    //         completed: false
    //     },
    //     {
    //         description: 'Clean your room',
    //         completed: true
    //     },
    //     {
    //         description: 'Finish web design project',
    //         completed: true
    //     }
    // ], (error, result) => {
    //     if (error){
    //         return console.log('Unable to insert taks!')
    //     }
    //     console.log(result.ops)
    // })

})