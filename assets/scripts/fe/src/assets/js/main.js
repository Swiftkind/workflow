$(document).ready(function() {

    //triggers fixed search bar after scroll
    $('.center-section').on('scroll', function() {
        var scroll = $('.center-section').scrollTop();
        if (scroll > 150) {
            $('.center-nav').addClass('sticky');
        } else {
            $('.center-nav').removeClass('sticky');
        }
    });

    //toggles open/close for side modal: report modal
    $('.closeModal').on('click', function() {
        $('.side-modal').toggleClass('open');
    });

    //adds class for report stream items on preoject page once item is clicked
    $('.report-stream-item').on('click', function() {
        var streamItem = $(this);
        streamItem.toggleClass('item-collapse');
        // streamItem.find('.collapse').addClass('collapsing').removeClass('collapse');


        // setTimeout(function() {
        //     streamItem.find('.collapsing').addClass('collapse').removeClass('collapsing');
        //     streamItem.find('.collapse').toggleClass('show');
        //     console.log('1.2.3');
        // }, 300)
    })


    //initializes bootstrap select
    $('#selectProject').selectpicker('val', 'All Projects');
    $('.selectpicker').selectpicker();


    //daterange picker
    var start = moment().subtract(29, 'days');
    var end = moment();

    function cb(start, end) {
        $('#reportrange span').html(start.format('MMMM D') + ' - ' + end.format('MMMM D'));
    }


    $('#reportrange').daterangepicker({
        startDate: start,
        endDate: end,
        alwaysShowCalendars: true,
         locale: {
          format: 'M/DD'
        },
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
            'Last 7 Days': [moment().subtract(6, 'days'), moment()],
            'Last 30 Days': [moment().subtract(29, 'days'), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
        }
    }, cb);

    cb(start, end);

    //toggles search filter
    $('.filter-toggle').on('click', function() {
        $('.search-filter').toggleClass('show-filter');
    })

});