console.log('\'Allo \'Allo!');

$(document).ready(function() {
    'use strict';
    var active = $('.collapse .active');
    var parent = active.parent().parent();
    var glyphok = '<span class=\'glyphicon glyphicon-ok\'></span>';
    active.parent().addClass('in');
    active.children('a').prepend(glyphok);
    parent.addClass('active');
    parent.children('a').children('.glyphicon-chevron-right').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');

    $('#prod_menu .panel').on('shown.bs.collapse', function() {
        $(this).children('a').children('.glyphicon-chevron-right').removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
        $(this).addClass('active');
    });

    $('#prod_menu .panel').on('hidden.bs.collapse', function() {
        $(this).children('a').children('.glyphicon-chevron-down').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
        $(this).removeClass('active');
    });

    $('#prod_menu .panel li.active').on('click', function() {
        $(this).children('a').children('span').remove();
    });

    $('#prod_menu .panel li').on('click', function() {
        $('#prod_menu .panel li.active').children('a').children('span').remove();
        $('#prod_menu .panel li.active').removeClass('active');
        $(this).addClass('active');
        $(this).children('a').prepend(glyphok);
    });

    $('.spinner').TouchSpin({
        min: 0
    });

    $('[data-toggle=offcanvas]').click(function() {
        $('.row-offcanvas').toggleClass('active');
    });
});
