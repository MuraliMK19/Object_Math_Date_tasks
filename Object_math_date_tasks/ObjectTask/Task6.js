let user = {
    name: "john",
    age: 30,
}

let count = (obj) => {
    let counter = 0
    counter += Object.keys(obj).length
    return counter
}

console.log(count(user))