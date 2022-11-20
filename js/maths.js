// Javascript Math Properties & Methods
// Math docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

const pi = Math.PI
const name = 'Thatsuyha Jake Luena'
const mathsExecution = (pi) => {
    // trunc(), trunc method removes all fraction/decimal digits. Don't be fooled that this is the same as the round method
    let truncate = Math.trunc(pi) // 3
    let round = Math.round(pi) // 3
    let up = Math.ceil(3.1) // 4
    let down = Math.floor(3.1) // 3
    
    // pow(), pow method takes two argument, first argument is the base and second is the power
    let power = Math.pow(2, 4) // 16
    let min = Math.min(1, 3, 0, -1) // -1
    let max = Math.max(1, 3, 0, -1) // 3
    let randomize = Math.random() // returns a random number from 0 - 1
}

const mathChallenge = (name) => {
    // return a single letter from your name
    // console.log(name.length - 1)
    if(name.length < 2) return name

    // create a randomizer first
    let operation = Math.floor((Math.random() * name.length - 1))
    if(name[operation] === ' ' || name[operation] === undefined) return mathChallenge(name)
    return console.log(`You've got letter: '${name[operation]}'`)
}

export { pi, mathsExecution, mathChallenge, name }

/*
    Two ways to export functions
    export default userFunction
    or
    export { func1, func2 }
*/