$(document).ready(function(){
    $('#mobile-nav-button').on("click", function(){
        $('#nav-bar').slideToggle();
    });
    $(window).resize(function () {
            if ($(this).width() > 400) {
                $('nav').show();
            }
            if ($(this).width() < 399) {
                $('nav').hide();
            }
        });
    $('#repo-button').on("click", function(){
        window.open("https://github.com/langleynick/WEB301_Assignments/tree/Assignment-2")
    });
});
