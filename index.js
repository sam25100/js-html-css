let username;
let age;
document.getElementById("button").onclick = function() {
    username = document.getElementById("input").value;
    age = Number(document.getElementById("input2").value);

    if (isNaN(age)) {
        age = window.prompt("Please enter a valid age.");

        if (age !== null && !isNaN(age)) {
            document.getElementById("input2").value = age;
            age = Number(age);
            if (age <= 1) {
                document.getElementById("H1").textContent = `Welcome ${username}, you are ${age} year old`;
            } else {
                document.getElementById("H1").textContent = `Welcome ${username}, you are ${age} years old`;
            }
        } else {
            alert("Invalid input, please enter a number.");
        }
    } else {
        if (age <= 1) {
            document.getElementById("H1").textContent = `Welcome ${username}, you are ${age} year old`;
        } else {
            document.getElementById("H1").textContent = `Welcome ${username}, you are ${age} years old`;
        }
    }
}
