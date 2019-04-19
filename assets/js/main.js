$(function(){
    //cache the window object.....
var $window = $(window);
//Parallex background effect.....
$('section[data-type= "background"]').each (function(){
    var $bgobg = $(this); ///assing the background object....

    $(window).scroll(function(){
        //scroll the background in a var speed....
        //the yPos is a negetive value because scrolling it up....
        var yPos = -($window.scrollTop()/$bgobj.data('speed'));
        var coords = '50%'+yPos + 'px';
        $bgobj.css({ backgroundPosition: coords });

    });



}); 
});