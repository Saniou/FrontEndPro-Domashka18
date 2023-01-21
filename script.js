$(document).ready(function(){
    $('.open').click(function() {
        $('.ModalWindowOverlay, .ModalWindowContent').addClass('active');
    });
    $('.close').click(function() {
        $('.ModalWindowOverlay, .ModalWindowContent').removeClass('active');
    });
});