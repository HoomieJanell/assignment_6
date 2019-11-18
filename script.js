
// var key = e23fca609692a7314eec46141d2fa55d;

$(document).ready(function () {
    $('#button-addon2').click(function () {
        var city = $("#city").val();
        if (city != '') {
            $.ajax({
                url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=" + "e23fca609692a7314eec46141d2fa55d",
                method: "GET",
                success: function (data) {
                    var widget = show(data);

                    $("#show").html(widget);
                    $("#city").val('');
                    console.log(city);
                    localStorage.setItem("search-history", city);
                }
            });
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
        "<h4>UV Index: " + "4" + " </h4>" +
        "<h4>Wind Speed: " + data.wind.speed + " mph</h4>" +
        "<h4>Wind Direction: " + data.wind.deg + "&deg</h4>"
}

$(document).ready(function () {
    $('#button-addon2').click(function () {
        return getForecast();
    });
});

function getForecast() {
    var city = $("#city").val();

    if (city != '') {
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=metric" + "&cnt=5"+ "&APPID=e23fca609692a7314eec46141d2fa55d",
            // url: "https://api.openweathermap.org/data/2.5/forecast?q= + city + "&mode=xml&units=imperial&cnt=5" + "&APPID=e23fca609692a7314eec46141d2fa55d",
            // success: function (data) {
            method: "GET",
        })
            .then(function (response) {
                console.log(response);
                var date = list.dt;
                var temperature = list.main.temp;
                var humidity = list.main.humidity;


                $("#city").text("<h1>" + response.name + " Weather Details</h1>");

                $("#city").text("<h1>" + list.main.temp + " Weather Details</h1>");



                // for var(i = 0; i < results.length; i++)
                // })

                for (var i = 1; i < 5; i++) {

                    $("#day1").append(`
                <p>${date}</p>
                <img src='https://openweathermap.org/img/w/"+ data.weather[0].icon+".png'>
                <p> Temperature: + ${temperature}</p>
                <p> Humidity: + ${humidity}</p>
                `)

                    $("#day2").append(`
                <p>${date}</p>
                <img src='https://openweathermap.org/img/w/"+ data.weather[0].icon+".png'>
                <p> Temperature: + ${temperature}</p>
                <p> Humidity: + ${humidity}</p>
                `)

                    $("#day3").append(`
                <p>${date}</p>
                <img src='https://openweathermap.org/img/w/"+ data.weather[0].icon+".png'>
                <p> Temperature: + ${temperature}</p>
                <p> Humidity: + ${humidity}</p>
                `)

                    $("#day4").append(`
                <p>${date}</p>
                <img src='https://openweathermap.org/img/w/"+ data.weather[0].icon+".png'>
                <p> Temperature: + ${temperature}</p>
                <p> Humidity: + ${humidity}</p>
                `)

                    $("#day5").append(`
                <p>${date}</p>
                <img src='https://openweathermap.org/img/w/"+ data.weather[0].icon+".png'>
                <p> Temperature: + ${temperature}</p>
                <p> Humidity: + ${humidity}</p>
                `)
                }
            })
    }
}
