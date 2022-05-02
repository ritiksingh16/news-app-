document.querySelector("#form").addEventListener("submit", homepage)

var student= JSON.parse(localStorage.getItem("studentDataBase")) || [];
function homepage(event){
    event.preventDefault()
    var name = document.getElementById("name").value
    var age = document.getElementById("age").value
    var gender = document.getElementById("gender").value
    var email = document.getElementById("email").value
    var phone = document.getElementById("phone").value

    var database= {
        name:name,
        age:age,
        gender:gender,
        email:email,
        phone:phone,

    }
    window.location.href = "database.html";

    student.push(database)
    console.log(database)
    localStorage.setItem("studentDataBase",JSON.stringify(student))
    



}
   

