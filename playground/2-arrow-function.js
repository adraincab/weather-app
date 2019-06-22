// const square = function(x){
//     return x*x
// }

// const square = (x) => {
//     return x*x
//}

//const square = (x) => x*x

//console.log(square(3))

//NOTE: arrow functions do not bind *this value
//standard functions have its own *this binding

const event = {
    name: 'Birthday Party',
    guestList: ['Adrian', 'Jen', 'Mike'],

    //alternative syntax for methods on objects

    printGuestList() {
        console.log('Guest list for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}
event.printGuestList()