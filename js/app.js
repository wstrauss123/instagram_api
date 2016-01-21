$(document).ready(function() {
        $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/media/popular?access_token=2061040706.2b508a9.5ccd0dd31dfd454f95b82792df8d9832",
        success: function(data) {
            for (var i = 0; i < 7; i++) {
                $("#space").append("<img src='" + data.data[i].images.low_resolution.url + "'></img></a>");
            }
        }
    });
});
