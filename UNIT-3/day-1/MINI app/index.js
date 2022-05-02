//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )

//Information should be retrieved from localstorage only, avoid hard coding data.


var scope = {
    p1: 'Make sure all items in the list are related to each other',
    p2: 'Use the same font and margin width in each bulleted point',
    p3: 'Keep bullet points short, preferably no more than three lines long',
    p4: 'Make sure the format is consistent within each list',
    p5: 'Begin all items with the same part of speech (active verbs work well) and make sure they are in parallel form'
}
var hoisting = {
    p1: 'Do not be afraid of bullet points, but remember: bullet points are used to convey information quickly;',
    p2: 'Keep bullet points short, preferably no more than three lines long',
    p3: 'Use periods at the end of each line only if they are complete sentences',
    p4: 'Use numbers if the list is more than 5 items long or if you want to refer your audience to specific points quickly'
}
var constructor_function = {
    p1: 'Make sure all items in the list are related to each other',
    p2: 'Use the same font and margin width in each bulleted point',
    p3: 'Use numbers if the list is more than 5 items long or if you want to refer your audience to specific points quickly',

}
var prototype = {
    p1: 'Use periods at the end of each line only if they are complete sentencesy',
    p2: 'Use the same font and margin width in each bulleted point',
    p3: 'Use numbers if the list is more than 5 items long or if you want to refer your audience to specific points quickly',
    p4: 'Make sure the format is consistent within each list',
    p5: 'Begin all items with the same part of speech (active verbs work well) and make sure they are in parallel form'
}



localStorage.setItem("scope", JSON.stringify(scope));
localStorage.setItem("hoisting", JSON.stringify(hoisting));
localStorage.setItem("constructor_function", JSON.stringify(constructor_function));
localStorage.setItem("prototype", JSON.stringify(prototype));






function scopebtn() {
    // console.log("asd")
    document.querySelector("#display").innerHTML=""
    var scopeItem = JSON.parse(localStorage.getItem("scope"))
    

            var ul = document.createElement("ul")

            for(var key in scopeItem){

            var li1 = document.createElement("li")
            li1.innerText = scopeItem[key];
            // var ul2 = document.createElement("ul")
            // ul2.innerText = scopeItem[key];
            ul.append(li1)
            }
         

            document.querySelector("#display").append(ul);
            
            
}


function hoistingbtn(){
    document.querySelector("#display").innerHTML=""
    var hoistingItem = JSON.parse(localStorage.getItem("hoisting")) || []
    
    var ul = document.createElement("ul")

            for(var key in hoistingItem){

            var li1 = document.createElement("li")
            li1.innerText = hoistingItem[key];
            // var ul2 = document.createElement("ul")
            // ul2.innerText = scopeItem[key];
            ul.append(li1)
            }
         

            document.querySelector("#display").append(ul);
            

}

function constructorbtn(){
    document.querySelector("#display").innerHTML=""
    var constructorItem = JSON.parse(localStorage.getItem("constructor_function")) || []
    
    var ul = document.createElement("ul")

            for(var key in constructorItem){

            var li1 = document.createElement("li")
            li1.innerText = constructorItem[key];
            // var ul2 = document.createElement("ul")
            // ul2.innerText = scopeItem[key];
            ul.append(li1)
            }
         

            document.querySelector("#display").append(ul);
            

}

function prototypebtn(){
    document.querySelector("#display").innerHTML=""
    var prototypeItem = JSON.parse(localStorage.getItem("prototype")) || []
    
    var ul = document.createElement("ul")

            for(var key in prototypeItem){

            var li1 = document.createElement("li")
            li1.innerText = prototypeItem[key];
            // var ul2 = document.createElement("ul")
            // ul2.innerText = scopeItem[key];
            ul.append(li1)
            }
         

            document.querySelector("#display").append(ul);
            

}



