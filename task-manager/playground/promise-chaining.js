require('../src/db/mongoose')
const User = require('../src/models/user')

//5d2e689ce5776f28b8c736f4

// User.findByIdAndUpdate('5d3193095361fd1f187ffa35', {age: 1}).then((user) =>{
//     console.log(user)
//     return User.countDocuments({ age: 1})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async(id, age) => {
    const user = await User.findByIdAndUpdate(id,{age })
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5d3193095361fd1f187ffa35', 2).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})