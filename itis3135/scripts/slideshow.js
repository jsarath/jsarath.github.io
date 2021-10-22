//I got help from https://stackoverflow.com/questions/18238393/creating-slideshow-jquery
$("#slideshow > div:gt(0)").hide();

var index = 1;
var maxindex = $('#slideshow > div').length;

setInterval(function () {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    $('ul li').removeClass('active');
    $('ul li:eq(' + index + ')').addClass('active');
    index = index < maxindex - 1 ? index + 1 : 0;
}, 3000);

for (var i = 0; i < maxindex; i++) {
    $('ul').append('<li class="' + (i == 0 ? 'active' : '') + '"></li>');
}