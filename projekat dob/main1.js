//Automatski slideshow
setInterval(function f(){
    var glavni = $('.slide.active');
    var nextSlide = glavni.next();
    
    glavni.fadeOut(1500).removeClass('active');
    nextSlide.fadeIn(1500).addClass('active');
    
    if(nextSlide.length == 0){
        $('.slide').first().fadeIn(1500).addClass('active')
    }
    },5000)