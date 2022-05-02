// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page


const news_div = document.querySelector("#news").value
let showData=[]
async function searchNews() {
    try {
        const search = document.getElementById("search_input").value

        const res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${search}`);

        const data = await res.json();


        const news1 = data.articles;

        console.log(news1);

        appendNews(news1);


    }
    catch (err) {
        console.log("err:-", err)
    }
}

searchNews()




function appendNews(news1) {

    news1.forEach(function (elem) {
        let box = document.createElement("div")
        box.className="box"
        box.addEventListener("click",function(){
             clickMe(elem)
        })

        
        let box1 = document.createElement("div")
        box1.className="box1"
        let box2 = document.createElement("div")


        let image = document.createElement("img")
        image.src = elem.urlToImage;
        image.setAttribute("id","image1")

        let p1 = document.createElement("p")
        p1.innerText = elem.author;


        let p2 = document.createElement("p")
        p2.innerText = elem.content;

        let p3 = document.createElement("p")
        p3.innerText = elem.publishedAt;

      


        box2.append(image)
        box1.append(p1, p2, p3)
        box.append(box2,box1)
         
        document.getElementById("result").append(box)
    });


}
function clickMe(news1){
    showData.push(news1)
localStorage.setItem("news",JSON.stringify(showData))
window.location.href="./news.html"
console.log(showData)
}





