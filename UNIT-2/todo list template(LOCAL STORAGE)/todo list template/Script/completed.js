var allDone = JSON.parse(localStorage.getItem("completedtodo"))


allDone.map(function(elem){

    var row = document.createElement("tr")

    var col1 = document.createElement("td")
    col1.innerText=elem.todoName

    var col2 = document.createElement("td")
    col2.innerText=elem.todoQty

    var col3 = document.createElement("td")
    col3.innerText=elem.todoPrio



    row.append(col1,col2,col3)

    document.querySelector("#body").append(row)

});



