var rejectpage = JSON.parse(localStorage.getItem("admitted"))

function display(){
    document.querySelector("").innerHTML
    document.addEventListener()
}

rejectpage.map(function (elem){
    var row = document.createElement("tr")

    var col1 = document.createElement("td")
    col1.innerText=elem.name

    var col2 = document.createElement("td")
    col2.innerText=elem.age

    var col3 = document.createElement("td")
    col3.innerText=elem.gender

    var col4 = document.createElement("td")
    col4.innerText=elem.email

    var col5 = document.createElement("td")
    col5.innerText=elem.phone


    row.append(col1,col2,col3,col4,col5)

    document.querySelector("body").append(row)
    console.log(rejectpage)

});
   