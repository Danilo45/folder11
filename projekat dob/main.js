//LIJEVO DUGME

$('#left').click(function(){
    var glavni = $('.slide.active');
    var prevSlide = glavni.prev();
    
    glavni.fadeOut(500).removeClass('active');
    prevSlide.fadeIn(500).addClass('active');
    if(prevSlide.length == 0){
        $('.slide').last().fadeIn(500).addClass('active');
    }
})

//DESNO DUGME
$('#right').click(function(){
    var glavni = $('.slide.active');
    var nextSlide = glavni.next();
    
    glavni.fadeOut(500).removeClass('active');
    nextSlide.fadeIn(500).addClass('active');
    if(nextSlide.length == 0){
        $('.slide').first().fadeIn(500).addClass('active');
    }
})




