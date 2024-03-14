let num1 = document.getElementById("num1").innerHTML = Math.round(Math.random() * 99)
let num2 = document.getElementById("num2").innerHTML = Math.round(Math.random() * 99)
const check = () => {
    let num3 = num1 + num2
    let answer = document.getElementById("answer").value
    if (parseInt(answer) == parseInt(num3)) {
        document.getElementById("message").innerHTML = "Correct Answer!!"
        document.getElementById("message").classList = "correct"
        calculate()
    } else {
        document.getElementById("message").innerHTML = "Incorrect Answer!!"
        document.getElementById("message").classList = "wrong"
    }
}
const calculate = () => {
    document.getElementById("answer").value = ""
    num1 = document.getElementById("num1").innerHTML = Math.round(Math.random() * 99)
    num2 = document.getElementById("num2").innerHTML = Math.round(Math.random() * 99)
}
document.getElementById("btnid").addEventListener("click", check)