require('../src/db/mongoose')
const Task = require('../src/models/task')

//5d37d2d60c4f21368415ab0e
Task.findByIdAndDelete('5d37d23ebcad8e2784aa2102').then((task) => {
    console.log(task)
    return Task.countDocuments({completed: false})

}).then((result) =>{
    console.log(result)
}).catch((e) => {
    console.log(e)
})