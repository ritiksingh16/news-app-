// Ude Import export (MANDATORY)

var x = JSON.parse(localStorage.getItem("news")) || []
append(x)



function append(x) {
    if (x === undefined) {
      return false;
      console.log("ok")
    }
    x.map(function (elem) {
    //   console.log(elem)

      document.getElementById("detailed_news").innerHTML=null;

      let box = document.createElement("div");


      let image = document.createElement("img");
      image.setAttribute("id","boximg")
      image.src = elem.urlToImage;

      let p = document.createElement("p");
      p.innerText = elem.author;


      let h4 = document.createElement("h3");
      h4.innerText = elem.content;
      

      let h5 = document.createElement("h3");
      h5.innerText =  elem.publishedAt;
      

     
      
      box.append(image, p, h4, h5)

      document.getElementById("detailed_news").append(box)


    })

  }


