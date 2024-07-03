$(document).ready(function(){
  // hero slider
  $('.homeslider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    pauseOnHover: false,
    speed: 1500,
  });
 // hero slider btn
  $(".homeslider").hover(function(){
    $(".slick-prev, .slick-next").css("opacity", "1"); 
    }, function(){
      $(".slick-prev, .slick-next").css("opacity", "0");
  });


  
  // project slider
  $('.project-slide').slick({

    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<span class="priv-arrow"><i class="fa-regular fa-arrow-left-long" style="font-family: fontAwesome;"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fa-solid fa-arrow-right-long" style="font-family: fontAwesome;"></i></span>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  
  // testimonials slider
  $('.testi-slide').slick({

    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: '<span class="priv-arrow"><i class="fa-regular fa-arrow-left-long" style="font-family: fontAwesome;"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fa-solid fa-arrow-right-long" style="font-family: fontAwesome;"></i></span>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


  
// isotope filtering gallery
  var $grid = $('.portfolio-items').isotope({
    // options
  });
  // filter items on button click
  $('.portfolio-menu').on( 'click', 'li', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });
  
  // add "active-item" class on click
  $('.portfolio-menu').on( 'click', 'li', function() {
    $(this).addClass('active-item').siblings().removeClass('active-item');
  });

});
/* ______________jQuery______________ */

 // hamburg menu 
var menuToggle = document.querySelector(".menuToggle");
var menuWrap = document.querySelector(".menu-wrap");
menuToggle.onclick = function(){
  this.classList.toggle("menuOpen");
 if( menuWrap.style.display === "block") {
  menuWrap.style.display = "none";
 }else{
  menuWrap.style.display = "block";
 }
}

// Tab screen dropdown menu
var items =  document.querySelectorAll(".items-has-children");
items.forEach(function(item){
  item.addEventListener("click", function(){
      // items.forEach(function(item){
      //   item.classList.remove("show");
      // })
      
      item.classList.toggle("show");
		});
});




// Open the full screen search box
function openSearch() {
  document.getElementById("myOverlay").style.display = "block";
}
// Close the full screen search box
function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}


// sticky header
var sticky = "inverted";
var scrollTrigger = 60;
window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(sticky);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(sticky);
  }
};


// collapsible tab
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


// counter
window.onload = ()=>{
  // $(selector).countMe(delay,speed)
  $("#num1").countMe(30, 5);
  $("#num2").countMe(30, 5);
  $("#num3").countMe(0, 5);
  $("#num4").countMe(30, 4);
}

// init Isotope












