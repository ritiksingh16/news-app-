var todoArray= JSON.parse(localStorage.getItem("main_todo"))

var completedArray=JSON.parse(localStorage.getItem("completedtodo")) || [];

todoArray.map(function(elem){

    var row = document.createElement("tr")

    var col1 = document.createElement("td")
    col1.innerText=elem.todoName

    var col2 = document.createElement("td")
    col2.innerText=elem.todoQty

    var col3 = document.createElement("td")
    col3.innerText=elem.todoPrio

    var col4 =document.createElement("button")
    col4.innerText="Mark as Complete"
    col4.addEventListener("click", function(){
    butClick(elem);
    });
    

    row.append(col1,col2,col3,col4)

    document.querySelector("#body").append(row)

});

function butClick(elem){
    
    console.log(elem);
    completedArray.push(elem);

    localStorage.setItem("completedtodo",JSON.stringify(completedArray))

}

