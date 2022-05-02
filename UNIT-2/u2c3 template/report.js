// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit", markSheet);


function markSheet(){
    event.preventDefault()

    var imag =document.getElementById("image").value;
    var name1 = document.getElementById("name").value;
    var batch = document.getElementById("batch").value;
    var dsa = document.getElementById("dsa").value;
    var skill = document.getElementById("cs").value;
    var code = document.getElementById("coding").value;
   
    var tr1 = document.createElement("tr");
    
    var td1 = document.createElement("td");
    var im = document.createElement("img")
    imag.src = imag;

    td1.append(im)


    var td2 = document.createElement("td")
    td2.innerText = name1;

    var td3 = document.createElement("td")
    td3.innerText = batch;

    var td4 = document.createElement("td");
    td4.innerText = dsa;

    var td5 = document.createElement("td");
    td5.innerText = skill;

    var td6 = document.createElement("td");
    td6.innerText = code;

        var td7 =document.createElement("td")
        td7.innerText = (dsa+skill+code/300)*100;
    
        tr1.append(td7);
        document.querySelector("tbody").append(tr1)  
    
    tr1.append(td1,td2,td3,td4,td5,td6,td7);
    document.querySelector("tbody").append(tr1)  
}

// document.querySelector("form").addEventListener("submit", total);




