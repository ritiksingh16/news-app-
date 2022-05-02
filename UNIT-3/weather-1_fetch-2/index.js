//src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
function getData() {
    let city = document.getElementById("city").value;
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5881c4a70f1f474bc5289105d70aa1b5`;
  
    fetch(url)
      .then(function (res) {
        return res.json();
      })
      .then(function (res) {
        append(res);
        console.log(res);
      })
      .catch(function (err) {
        console.log(err);
      });
  }
  
 
  
  function append(data) {
    let container = document.getElementById("container");
    let map = document.getElementById("gmap_canvas");
    container.innerHTML = null;
  
    let city = document.createElement("p");
    city.innerText = `City: ${data.name}`;
  
    let min = document.createElement("p");
    min.innerText = `Min temp: ${data.main.temp_min}`;
  
    let max = document.createElement("p");
    max.innerText = `Max temp: ${data.main.temp_max}`;
  
    let current = document.createElement("p");
    current.innerText = `Current Temp: ${data.main.temp}`;


    let cloud = document.createElement("p");
    cloud.innerText=`Clouds: ${data.clouds.all}`;

  

    let sunrise = document.createElement("p");
    sunrise.innerText=`Sunrise: ${data.sys.sunrise}`;

    let sunimg = document.createElement("img")
    sunimg.src = "https://images.cdn2.stockunlimited.net/clipart/sunrise-symbol_1343440.jpg"
    sunimg.setAttribute("id","icon");

     let div = document.createElement("div")
     div.append(sunrise,sunimg)





    
    let setimg = document.createElement("img")
    setimg.src = "https://cdn.iconscout.com/icon/premium/png-256-thumb/sunset-2650224-2196471.png"
    setimg.setAttribute("id","icon");

    let sunset = document.createElement("p");
    sunset.innerText=`Sunset: ${data.sys.sunset}`;

     

    let div2 = document.createElement("div")
    div2.append(sunset,setimg)


    let wind = document.createElement("p");
    wind.innerText=`Wind: ${data.wind.speed}`;


    

    
  
    container.append(city, min, max,current,cloud,div,div2,wind);
    map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
  }
  
  
  