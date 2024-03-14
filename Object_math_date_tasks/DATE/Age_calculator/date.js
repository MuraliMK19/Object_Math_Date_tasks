const calculate = () => {
    let dobdate = new Date(document.getElementById("dob").value);
    let current = new Date();

    let year = current.getFullYear() - dobdate.getFullYear();
    let months = current.getMonth() - dobdate.getMonth();
    let date = current.getDate() - dobdate.getDate();

    if (months < 0 || (months === 0 && date < 0)) {
        year--;
        months += 12;
    }
    if (date < 0) {
        months--;
        const tempDate = new Date(current.getFullYear(), current.getMonth(), 0);
        date = tempDate.getDate() - dobdate.getDate() + current.getDate();

    }

    document.getElementById("years").innerHTML = year;
    document.getElementById("months").innerHTML = months;
    document.getElementById("days").innerHTML = date;
};

document.getElementById("btnid").addEventListener("click", calculate);
