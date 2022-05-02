
 
var imgData = [{
    imgUrl:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1629975380/cp6ivak8ii869hnhsmpa.jpg",
    name1:"Digene Acidity & Gas",
    name2:"Relief gel Orange",
    prodetail:"bottle of 450ml Oral Gel",
    rating:"264 ratings",
    mrp:"209.33",
    lastprice:"Rs 163"

},
{
    imgUrl:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601161815/cropped/zolg3xv8s5klfpfqzoil.jpg",
    name1:"Digene Acidity & Gas",
    name2:"Relief gel Orange",
    prodetail:"bottle of 450ml Oral Gel",
    rating:"264 ratings",
    mrp:"209.33",
    lastprice:"Rs 163"

},
{
    imgUrl:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1643707207/dsckq8hq4b2buvkpk7tc.jpg",
    name1:"Digene Acidity & Gas",
    name2:"Relief gel Orange",
    prodetail:"bottle of 450ml Oral Gel",
    rating:"264 ratings",
    mrp:"209.33",
    lastprice:"Rs. 163"

},
{
    imgUrl:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601316436/cropped/tu1gecqumpbunw7kj6ps.png",
    name1:"Digene Acidity & Gas",
    name2:"Relief gel Orange",
    prodetail:"bottle of 450ml Oral Gel",
    rating:"264 ratings",
    mrp:"209.33",
    lastprice:"Rs. 180"

},
{
    imgUrl:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600632982/cropped/ssrskanx9lem2qasxi5a.jpg",
    name1:"Digene Acidity & Gas",
    name2:"Relief gel Orange",
    prodetail:"bottle of 450ml Oral Gel",
    rating:"264 ratings",
    mrp:"209.33",
    lastprice:"Rs. 200"

},
{
    imgUrl:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1606287651/zbhtu1jzueqagkboys1p.jpg",
    name1:"Digene Acidity & Gas",
    name2:"Relief gel Orange",
    prodetail:"bottle of 450ml Oral Gel",
    rating:"264 ratings",
    mrp:"209.33",
    lastprice:"Rs. 163"

},
{
    imgUrl:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600174116/cropped/pf3vraq88havppemxjar.png",
    name1:"Digene Acidity & Gas",
    name2:"Relief gel Orange",
    prodetail:"bottle of 450ml Oral Gel",
    rating:"264 ratings",
    mrp:"209.33",
    lastprice:"Rs. 203"

}];



var cartData = []
 


display(imgData);

function display(imgData){
    
     
    document.getElementById("shopcart").innerHTML="";     
     
    
   imgData.map(function(elem){
        console.log(elem.imgUrl)
        var box = document.createElement("div");


        var image = document.createElement("img");
        image.src=elem.imgUrl;
        
    
    
        var fstline = document.createElement("p")
        fstline.innerText=elem.name1;
        fstline.setAttribute
        
    
        var secline = document.createElement("p")
        secline.innerText=elem.name2;
    
    
        var trdline = document.createElement("p")
        trdline.innerText=elem.prodetail;
    
        var frthline=document.createElement("p")
        frthline.innerText=elem.rating;
    
        var fthline=document.createElement("p")
        fthline.innerText=elem.mrp;
    
    
        var sixline=document.createElement("p")
        sixline.innerText=elem.lastprice;

        var seven = document.createElement("button")
        seven.innerText="Add To Cart"
        seven.addEventListener("click",function(){
          
            window.location.href="addtocart.html"
            addToCart(elem)
        })


    
        box.append(image,fstline,secline,trdline,frthline,fthline,sixline,seven);
    
        document.getElementById("shopcart").append(box);
       
    });

    function addToCart(elem){
        cartData.push(elem)
        localStorage.setItem("CART",JSON.stringify(cartData))
    }
};


// ==================================================================================================================


var imgData2 = [{
    imgUrl:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600174116/cropped/pf3vraq88havppemxjar.png",
    name1:"Digene Acidity & Gas",
    name2:"Relief gel Orange",
    prodetail:"bottle of 450ml Oral Gel",
    rating:"264 ratings",
    mrp:"209.33",
    lastprice:"Rs 163"
},
{
    imgUrl:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600112036/cropped/tqvups7t0qyejtmcrmlx.png",
    name1:"Digene Acidity & Gas",
    name2:"Relief gel Mint",
    prodetail:"bottle of 450ml Oral Gel",
    rating:"260 ratings",
    mrp:"209.33",
    lastprice:"Rs 163"

},
{
    imgUrl:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1646827978/g3maimvrdml91wvwyps1.jpg",
    name1:"Brufen Power Painkiller",
    name2:"Relief 800 sprays",
    prodetail:"bottle of 450gm spray",
    rating:"300 ratings",
    mrp:"450.33",
    lastprice:"Rs 253"

},
{
    imgUrl:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1601905309/fyw3facamjsqlv4mwzvb.jpg",
    name1:"Brufen Power Painkiller",
    name2:"Relief 400 sprays",
    prodetail:"bottle of 450gm spray",
    rating:"280 ratings",
    mrp:"400.33",
    lastprice:"Rs 270"

},
{
    imgUrl:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1600689355/vhdx2ta9nmzpbbdpeybi.jpg",
    name1:"Digene Acidity ",
    name2:"Gas Relief Tablet",
    prodetail:"Strip of 15 Tablet",
    rating:"264 ratings",
    mrp:"209.33",
    lastprice:"Rs 163"

},
{
    imgUrl:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1645272788/qh1au45w8u7cfvf3lg3i.jpg",
    name1:"Cremaffin Fresh Tablet",
    name2:"Relief gel Orange",
    prodetail:"bottle of 450ml Oral Gel",
    rating:"264 ratings",
    mrp:"209.33",
    lastprice:"Rs 163"

},
{
    imgUrl:"https://onemg.gumlet.io/image/upload/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/v1638444070/nwhioxrxmwjkaxitryag.jpg",
    name1:"Digene Gel",
    name2:"The Go Stick Pack (10ml Each)",
    prodetail:"bottle of 450ml Oral Gel",
    rating:"264 ratings",
    mrp:"209.33",
    lastprice:"Rs 163"

}];



var cartData2 = []
 


display2(imgData2);

function display2(imgData2){
    
     

    document.getElementById("datacart").innerHTML="";     
    
   imgData2.map(function(elem){
        // console.log(elem.imgUrl)
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

        var seven2 = document.createElement("button")
        seven2.innerText="Add To Cart"
        seven2.addEventListener("click",function(){
            
            window.location.href="addtocart.html"
            addToCart2(elem)
        })


    
        box2.append(image2,fstline2,secline2,trdline2,frthline2,fthline2,sixline2,seven2);
    
        document.getElementById("datacart").append(box2);
       
    });

    function addToCart2(elem){
        cartData2.push(elem)
        localStorage.setItem("CART",JSON.stringify(cartData2))
    }
};








// ==============================cart functionality=======================





