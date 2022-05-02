var cartThings= JSON.parse(localStorage.getItem("items")) || []
console.log(cartThings)
append(cartThings)



function append(cartThings){
    cartThings.forEach(function(elem,index){
        console.log(elem)
        let box = document.createElement("div")

        let name = document.createElement("p")
        name.innerText=elem.name;

        let price = document.createElement("p")
        price.innerText=elem.price

        let image = document.createElement("img")
        image.src= elem.image

        let button = document.createElement("button")
        button.innerText="Remove";
        button.setAttribute("id","remove")
        button.addEventListener("click",function(){
            removeCart(index)
            // console.log("red")
            


        })
       

     

        box.append(name,price,image,button)

        document.getElementById("cart").append(box)


    })

}



function removeCart(index){

    cartThings.splice(index, 1);
    localStorage.setItem("items",JSON.stringify(cartThings));
    refresh()

    
    }
    function refresh() {
        location.reload();
      }

      var total = cartThings.reduce(function (a, b) {

        return a + b.price
      },0);
      console.log(cartThings)
      
      document.querySelector("#cart_total").append(total)
      
      function checkOut() {
      
        window.location.href = "checkout.html";
      }