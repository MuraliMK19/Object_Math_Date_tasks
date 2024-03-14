const calculation = () => {
    let option = document.getElementById("courseselection").value
    let joindate = new Date(document.getElementById("joindate").value)
    switch (option) {
        case "fullstack": {
            joindate.setDate(joindate.getDate() + 90)
            days = 90;
            break;
        }
        case "web": {
            joindate.setDate(joindate.getDate() + 60)
            days = 60
            break;
        }
        case "sap": {
            joindate.setDate(joindate.getDate() + 30)
            days = 30
            break;
        }
        case "ims": {
            joindate.setDate(joindate.getDate() + 50)
            days = 50
            break;
        }
    }
    document.getElementById("duration").innerHTML = `Your course duration is ${days} days and will end on ${joindate.toDateString()}`
}
document.getElementById("btnid").addEventListener("click", calculation)