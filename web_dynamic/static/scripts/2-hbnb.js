document.addEventListener('DOMContentLoaded', function () {
  $.get('http://172.17.0.2:5001/api/v1/status/', function (data) {
    console.log(data.status);
    if (data.status === 'OK') {
      console.log(data.status);
      $('DIV#api_status').addClass('available');
    }
    if (data.status != 'OK') {
      console.log(data.status);
      $('DIV#api_status').removeClass('available');
    }
  });
});