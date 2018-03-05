// request.send();
// request.onload = () => {
//   console.log(request.responseText);
// }

class ApiClient {
  constructor() {

  }

  getWeatherData(location) {
    var req = new XMLHttpRequest();
    req.open("GET", `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ffb5fcf064d018d36dbd32849e591d6d`);
    req.send();
    req.onload = () => {
      if(req.status === 200) {
        console.log(req.responseText);
        var res = JSON.parse(req.responseText);
        console.log(res.main.temp);
        console.log(res.weather[0].description);
      } else {
        console.log("404 page not found")
      }
    }
  }
}
