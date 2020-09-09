$(function () {

    $(document).scroll(function () {

        var $nav = $(".fixed-top");
        $nav.toggleClass('navbar-scrolled', $(this).scrollTop() > $nav.height());

    });

});