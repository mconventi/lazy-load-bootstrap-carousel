/**
 * Base js file
 */
$(function(){
    var element = document.getElementById('main-carousel');
    if(element){
        var carousel = new bootstrap.Carousel(element,{interval:3000, ride:true});
        $(element).lazyCarousel();
    }
});
