

var cartItem = JSON.parse(localStorage.getItem("CART"));
displayData(cartItem)
function displayData(cartItem){
 
cartItem.map(function(elem){
    // console.log(elem.imgUrl2)
    var box2 = document.createElement("div");


    var image2 = document.createElement("img");
    image2.src=elem.imgUrl;
    


    var fstline2 = document.createElement("p")
    fstline2.innerText=elem.name1;
    
    

    var secline2 = document.createElement("p")
    secline2.innerText=elem.name2;


    var trdline2 = document.createElement("p")
    trdline2.innerText=elem.prodetail;

    var frthline2=document.createElement("p")
    frthline2.innerText=elem.rating;

    var fthline2=document.createElement("p")
    fthline2.innerText=elem.mrp;


    var sixline2=document.createElement("p")
    sixline2.innerText=elem.lastprice;


    // var bru=document.getElementById("javadetail");
    // bru.innerText = elem.name1;


    box2.append(image2,fstline2,secline2,trdline2,frthline2,fthline2,sixline2);

    document.getElementById("data_of_cart").append(box2);
   
});
}







// =======================================================================================================


 const plus = document.querySelector(".plus"),
    minus = document.querySelector(".minus"),
    num = document.querySelector(".num");
    let a = 1;
    plus.addEventListener("click", ()=>{
      a++;
      a = (a < 10) ? "0" + a : a;
      num.innerText = a;
    });

    minus.addEventListener("click", ()=>{
      if(a > 1){
        a--;
        a = (a < 10) ? "0" + a : a;
        num.innerText = a;
      }
    });





// =================firstbox
// var cartItem2 = JSON.parse(localStorage.getItem("CART"));

// displaydData2(cartItem2)
// function displaydData2(cartItem2){

    
// cartItem2.map(function(elem){

//     // console.log(elem.imgUrl2)
//     var box22 = document.createElement("div");


//     var image22 = document.createElement("img");
//     image22.src=elem.imgUrl2;
    


//     var fstline22 = document.createElement("p")
//     fstline22.innerText=elem.name12;
    

//     var secline22 = document.createElement("p")
//     secline22.innerText=elem.name22;


//     var trdline22 = document.createElement("p")
//     trdline22.innerText=elem.prodetail2;

//     var frthline22=document.createElement("p")
//     frthline22.innerText=elem.rating2;

//     var fthline22=document.createElement("p")
//     fthline22.innerText=elem.mrp2;


//     var sixline22=document.createElement("p")
//     sixline22.innerText=elem.lastprice2;

    
//     box22.append(image22,fstline22,secline22,trdline22,frthline22,fthline22,sixline22,);

//     document.getElementById("data_of_cart").append(box22);
   
// });
// }