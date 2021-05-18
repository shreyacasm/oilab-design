(function ($) {
    $(document).ready(function () {
        $('#menu').hide();
        $(window).scroll(function () {
            if ($(this).scrollTop() > 600) {
                $('#menu').fadeIn(100);
            } else {
                $('#menu').fadeOut(100);
            }
        });
    });
})(jQuery);