require('../src/db/mongoose')
const Task = require('../src/models/task')

//5d37d2d60c4f21368415ab0e
// Task.findByIdAndDelete('5d37d23ebcad8e2784aa2102').then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})

// }).then((result) =>{
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })


const deleteTaskAndCount = async(id, completed) => {
    // storing variable in task incase we need it
    const task = await Task.findByIdAndDelete(id, { completed })
    const count = await Task.countDocuments({completed})
    return count
}

deleteTaskAndCount('5d2e7bdb95dd8e314868d89f', false).then((count) =>{
    console.log(count)
}).catch((e) =>{
    console.log(e)
})