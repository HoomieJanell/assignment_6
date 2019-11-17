// $(document).ready(function() {
//     $("#button-addon2").click(function()) {
//         var city = $("#city").val();
//         var key = "e23fca609692a7314eec46141d2fa55d";

//         $.ajax({
//             url: 'http://api.openweathermap.org/data/2.5/weather',
//             dataType: 'json',
//             type: 'GET',
//             data: {q:city, appiid: key, units: 'imperial'},

//             success: function(data){
//                 var wf = '';
//                 $.each(data.weather, function(index, val) {
//                     wf += '<p><b>' + data.name + "</b>img scr=" + val.icon + ".png></p>" +
//                     data.main.temp + '&deg;F' + ' | ' + val.main + "," + 
//                     val.desciption 
//                 });
//                 $("#button-addon2").html(wf);
//             }
//         })
//     });
// });

$(document).ready(function() {
    $('#button-addon2').click(function(){
        var city = $("#city").val();
        if(city != ''){
            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&units=imperial" + "&APPID=e23fca609692a7314eec46141d2fa55d",
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    var widget = show(data);

                    $("#show").html(widget);
                    $("#city").val('');
                }
            });
        }else{
            $("#error").html('Field cannot be empty');
        }
    });
});

function show(data){
    return "<h3 style='font-size:40px; font-weight: bold; class='text-center'>Current Weather for " + data.name + "," + data.sys.country + "</h3>" +
    "<h3><strong>Weather</strong>: "+ data.weather[0].main +"</h3>" +
    "<h3><strong>Description</strong>: <img src='http://openweathermap.org/img/wn/10d@2x.png"+data.weather[0].icon+".png' "+ data.weather[0].description + "</h3>" +
    "<h3>strong>Temperature</strong>: "+ data.main.temp + "&deg;F</h3>" +
    "<h3>strong>Pressure</strong>: "+ data.main.pressure + " hPa</h3>" +
    "<h3>strong>Humidity</strong>: "+ data.main.humidity + "%</h3>" +
    "<h3>strong>Min. Temperature</strong>: "+ data.main.temp_min + "$deg;F</h3>" +
    "<h3>strong>Max. Temperature</strong>: "+ data.main.temp_max + "&deg;F</h3>" +
    "<h3>strong>Wind Speed</strong>: "+ data.wind.speed + " m/h</h3>" +
    "<h3>strong>Wind Direction</strong>: "+ data.wind.deg + "&deg</h3>" +
}









// var APIKey = "e23fca609692a7314eec46141d2fa55d";
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;
// $.ajax({
//     url: queryURL,
//     method:"GET"
// })
// .then(function(response) {
//     console.log(queryURL);
//     console.log(response);

//     $("#show").html("<h1" + response.name + "Weather Details</h1>");
// });
// //         // Transfer content to HTML
// //         $(".city").html("<h1>" + response.name + " Weather Details</h1>");
// //         $(".wind").text("Wind Speed: " + response.wind.speed);
// //         $(".humidity").text("Humidity: " + response.main.humidity);
// //         $(".temp").text("Temperature (F) " + response.main.temp);

// //         console.log("Wind Speed: " + response.wind.speed);
// //         console.log("Humidity: " + response.main.humidity);
//         console.log("Temperature (F): " + response.main.temp);


