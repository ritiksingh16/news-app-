// Store cart items in local storage with key: "items"

var cartItems = JSON.parse(localStorage.getItem("items"))|| [];
const url = 'https://grocery-masai.herokuapp.com/items'
disheshFood()

async function disheshFood(){
    try{
        var food = await fetch(url)
        var data = await food.json()
         
    
    
        //  for (key in data){
        //      console.log(data[key])
        //     //  append(data[key])   
        //  }
          console.log(data.data)
          append(data.data)   
           
       
    
      }catch(err){
      console.log("err:",err)
      }
    }


function append(data){
    document.getElementById("items").innerHTML=null;
    data.forEach(function(elem){
        // console.log(elem)
        let box = document.createElement("div")

        let name = document.createElement("p")
        name.innerText=elem.name;

        let price = document.createElement("p")
        price.innerText=elem.price

        let image = document.createElement("img")
        image.src= elem.image

        let button = document.createElement("button")
        button.innerText="add to cart";
        button.addEventListener("click",function(){
            addCart(elem)

        })

        box.append(name,price,image,button)

        document.getElementById("items").append(box)


    })


function addCart(data){
    cartItems.push(data);
    var count = JSON.parse(localStorage.getItem("items")) || [];
  
    var count1 = document.getElementById("item_count").innerText = count.length + 1;
  
    localStorage.setItem("items", JSON.stringify(cartItems));
    alert("Item Added into Cart")
  
  }
  }

