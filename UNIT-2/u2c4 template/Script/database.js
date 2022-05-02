var datapage = JSON.parse(localStorage.getItem("studentDataBase"))


var admittedPage = JSON.parse(localStorage.getItem("admitted")) || [] ;
console.log(admittedPage)
function display(admittedPage){

    document.querySelector("body").innerHTML=null


datapage.map(function (elem){
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

    var col6 = document.createElement("td")
    var btn1 = document.createElement("button")
    btn1.innerText="Accepted";
    btn1.style.fontSize="10px"
    btn1.id="button1";
    btn1.onclick;
    
    col6.append(btn1)
    document.querySelector("body").append(row)

    var col7 = document.createElement("td")
    var btn2 = document.createElement("button")
    btn2.innerText="Rejected";
    btn2.style.fontSize="10px"
    btn2.id="button2";
    

    col7.append(btn2)
    document.querySelector("body").append(row)

    row.append(col1,col2,col3,col4,col5,col6,col7)

    document.querySelector("body").append(row)
   

    admittedPage.push(datapage)
    console.log(admittedPage)

    localStorage.setItem("admitted",JSON.stringify(datapage))

});
}
display(admittedPage)





   





  
