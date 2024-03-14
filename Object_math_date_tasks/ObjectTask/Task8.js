let salaries = {
    john: 100,
    peter: 300,
    mary: 550
}

const topSalaries = (obj) => {
    let maxsalary = 0
    let toppaidperson = null
    for (const [name, salary] of Object.entries(obj)) {
        if (Object.values(obj) === 0) {
            return null
        }
        if (salary > maxsalary) {
            maxsalary = salary
            toppaidperson = name
        }
    }
    return toppaidperson
}

console.log(topSalaries(salaries))