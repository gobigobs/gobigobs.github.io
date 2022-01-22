// Navbar JS

$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('.fixed-top').css('background', 'transparent');
    } else{
        $('.fixed-top').css('background', 'rgba(37, 37, 46)');
    }
});

// Float Button

var mybutton = document.getElementById("btnScrollToTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// Owl Carousel

$(document).ready(function(){

  if($('.brands_slider').length)
  {
  var brandsSlider = $('.brands_slider');
  
  brandsSlider.owlCarousel(
  {
  loop:true,
  autoplay:true,
  autoplayTimeout:2000,
  nav:false,
  dots:false,
  autoWidth:true,
  items:17,
  margin:42
  });
  
  if($('.brands_prev').length)
  {
  var prev = $('.brands_prev');
  prev.on('click', function()
  {
  brandsSlider.trigger('prev.owl.carousel');
  });
  }
  
  if($('.brands_next').length)
  {
  var next = $('.brands_next');
  next.on('click', function()
  {
  brandsSlider.trigger('next.owl.carousel');
  });
  }
  }
  
  
  });