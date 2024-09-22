jQuery(function ($) {


    $('.lsow-stats-bars').livemeshWaypoint(function (direction) {

        $(this.element).find('.lsow-stats-bar-content').each(function () {

            var dataperc = $(this).attr('data-perc');
            $(this).animate({ "width": dataperc + "%"}, dataperc * 20);

        });

    }, { offset: (window.innerHeight || document.documentElement.clientHeight) - 150,
        triggerOnce: true});


});