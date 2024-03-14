let menu = {
    width: 200,
    height: 300,
    title: "My Menu"
}

let multiplyNumeric = (obj) => {
    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === 'number') {
            obj[key] *= 2
        }
    }
}

multiplyNumeric(menu)
console.log(menu);
