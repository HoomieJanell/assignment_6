
// var key = e23fca609692a7314eec46141d2fa55d;

$(document).ready(function () {
    $('#button-addon2').click(function () {
        var city = $("#city").val();
        if (city != '') {
            $.ajax({
                url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial&APPID=" + "e23fca609692a7314eec46141d2fa55d",
                method: "GET",
                success: function (data) {
                    var widget = show(data);

                    $("#show").html(widget);
                    $("#city").val('');
                    console.log(city);
                    localStorage.setItem("search-history", city);
                }
            });


            $.ajax({
                url: 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + "&units=imperial&appid=" + "e23fca609692a7314eec46141d2fa55d",
                method: "GET",
                dataType: "jsonp",
                success: function (data) {
                    console.log("__________")
                    console.log(data.list)
                    console.log("_______")
                    city = $("#city").val()
                    for (var i = 0; i < data.list.length; i = i + 8) {

                        // Creating and storing a div tag
                        var futureWeather = $("<div class='card' id='forecastcards'>");

                        // Creating a paragraph tag with the result item's rating
                        var p1 = $("<div class='card-title' id='one'>").text(data.list[i].dt_txt);
                        // var p2 = $("<div class='card-text'>").text("<img src='http://openweathermap.org/img/w/" + data.weather[i].icon + ".png'> ");
                        var p3 = $("<div class='card-text' id='two'>").text("Temp: " + data.list[i].main.temp + " &deg;F");
                        var p4 = $("<div class='card-text' id='three'>").text("Humidty: " + data.list[i].main.humidity + "%");
        
        
                        futureWeather.append(p1);
                        // futureWeather.append(p2);
                        futureWeather.append(p3);
                        futureWeather.append(p4);

                        
                        $(".card-deck").prepend(futureWeather);

                        //$("#day1").innerText(city.name)
                        console.log($("#city").val());
                        //console.log(data.list[i].main.);
                        console.log(data.list[i].main.temp);
                        console.log(data.list[i].dt_txt);
                        console.log(data.list[i].main.humidity);
                
                    }
                }
            })
        }
    });
});

function show(data) {
    return "<h4 style='font-size:30px; font-weight: bold; class='text-center'>Current Weather for " + data.name + " " + "<img src='http://openweathermap.org/img/w/" + data.weather[0].icon + ".png'> " + "</h4>" +
        "<h4>Weather: " + data.weather[0].main + "</h4>" +
        "<h4>Current Temperature: " + data.main.temp + "&deg;F</h4>" +
        "<h4>Humidity: " + data.main.humidity + "%</4>" +
        "<h4>Minimum Temperature: " + data.main.temp_min + "&deg;F</h4>" +
        "<h4>Maximum Temperature: " + data.main.temp_max + "&deg;F</h4>" +
        "<h4>Wind Speed: " + data.wind.speed + " mph</h4>" +
        "<h4>Wind Direction: " + data.wind.deg + "&deg</h4>"

}
