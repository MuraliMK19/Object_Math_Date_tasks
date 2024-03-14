let salaries = {
    john: 100,
    peter: 300,
    mary: 250
}
let sumSalaries = (obj) => {
    let sum = 0
    if (Object.values(obj).length === 0) {
        return "result = 0";
    }
    else {
        for (let i of Object.values(obj)) {
            sum += i
        }
        return sum
    }
}


console.log(sumSalaries(salaries));