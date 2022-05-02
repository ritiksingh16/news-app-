document.querySelector("#form").addEventListener("submit",form)

var todoArray= JSON.parse(localStorage.getItem("main_todo")) || [];
console.log(todoArray)


function form(event){
    event.preventDefault()
    window.location.href="todo.html"

    var name = document.getElementById("name").value
    var quantity = document.getElementById("qty").value
    var prio = document.getElementById("priority").value


    var todoObj={
        todoName:name,
        todoQty:quantity,
        todoPrio:prio,
    }

    todoArray.push(todoObj)
    console.log(todoObj)
    localStorage.setItem("main_todo",JSON.stringify(todoArray))
}
    

    

