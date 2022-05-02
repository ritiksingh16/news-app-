

document.querySelector("form").addEventListener("submit",myFunction)

function myFunction(){
    event.preventDefault()

    var select = document.getElementById("category").value
    var title = document.getElementById("name").value
    var price = document.getElementById("price").value





    var row = document.createElement("tr")
    

    var col1 = document.createElement("td")
    col1.innerText = select;
    
    var col2 = document.createElement("td")
    col2.innerText = title;

    var col3 = document.createElement("td")
    col3.innerText = price;




    row.append(col1,col2,col3)


    document.querySelector("tbody").append(row)
}
 


