document.addEventListener('DOMContentLoaded', function () {
  $.get('http://172.17.0.2:5001/api/v1/status/', function (content) {
    if (content.status === 'OK') {
      $.ajax({
        url: 'http://172.17.0.2:5001/api/v1/places_search/',
        type: "POST",
        data: '{}',
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
          console.log(response);
          $.each(response, function (i, place) {
            $('.places').append($('<article class="site one"></article>'));
            $('.site one').append($('<div class="info"></div>'));
            $('.info').append($('<h2></h2>').text(place.name));
            $('.info').append($('<div class="price_by_night"></div>').text(place.price_by_night));
            $('.site one').append($('<div class="information"></div>'));
            $('.information').append($('<div class="max_guest"></div>').text(place.max_guest));
            $('.information').append($('<div class="number_rooms"></div>').text(place.number_rooms));
            $('.information').append($('<div class="number_bathrooms"></div>').text(place.number_bathrooms));
            $('.site one').append($('<div class="description"></div>').text(place.description));
          });
        }
      });
    }
  });
});