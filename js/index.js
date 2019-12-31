$(window).scroll(function(){
  	  var scroll = $(window).scrollTop();
	  if (scroll > 10) {
	    $(".navbar").css("background" , "#fff");
        $("ul li .nav-link").css("color" , "#000");
        $("header .navbar-brand").css("backgroundImage",'url('+"./images/logo-dark.png"+')');
        $("#navbartoggler").removeClass("navbar-dark").addClass("navbar-light");
	  }

	  else{
		  $(".navbar").css("background" , "rgba(0, 0, 0, 0)"); 
          $("ul li .nav-link").css("color" , "#fff");
          $(".navbar-brand").css("backgroundImage",'url('+"./images/logo-light.png"+')');
          $("#navbartoggler").removeClass("navbar-light").addClass("navbar-dark");
          
          
	  }
  });
var nav = $('nav'), nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var scrolltop = $(this).scrollTop();
  $('section').each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (scrolltop >= top-1 && scrolltop <= bottom) {
      nav.find('a').removeClass('active');      
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
    
    var homeTop = $("#home").outerHeight(); 
    var scrollWindow =  $(window).scrollTop();
console.log("homeTop",homeTop);
console.log("scrollWindow",scrollWindow);

    if(homeTop < scrollWindow)
        {
            $("#btnUp").css("display","block");
        }
    else
        {
            $("#btnUp").css("display","none");
        }
});

nav.find('a').on('click', function () {
  var id = $(this).attr('href');
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 800);
  return false;
});

    

$("#btnUp").click(function(){

            $("html,body").animate({scrollTop:'0'},4000);
})

$(document).ready(function(){
    
    $(".spinner").fadeOut(5000,function(){;
    $("body").css("overflow","auto");
    
});
    var typed2 = new Typed('.chang', {
    strings: ['softwares', 'web', 'apps'],
    typeSpeed: 100,
    backSpeed: 100,
    fadeOut: false,
    loop: true
  });
    /*var imgs = [];
    var imgList=[];
    var close = document.getElementById("close");
    var item = document.querySelector(".lightbox-item");
    var lightBox = document.querySelector(".lightBox");
    var next = document.getElementById("next");
    var prev = document.getElementById("prev");
    var currentIndex=0;
    $('.nav-tabs').on( 'click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        var imgList = document.querySelectorAll(filterValue+" .image2 img");
        for(var i =0 ;i<imgList.length ;i++)
        {
            imgs.push($(imgList[i]).attr("src"))
            
            imgList[i].addEventListener("click" , function(event){
            var targetSrc = event.target.src;
             
           currentIndex =  imgs.indexOf((event.target.src).slice(37));
                lightBox.classList.add("show1");
                item.style.backgroundImage ="url("+targetSrc+")" ;
            });
        }
close.addEventListener("click", function(){
          lightBox.classList.remove("show1");  
    
})
next.addEventListener("click" , function(){
    
    currentIndex++;
    if(currentIndex == imgList.length)
        {
            currentIndex = 0;
        }
    
item.style.backgroundImage ="url("+imgList[currentIndex].src+")" ;
    
    
})


document.addEventListener("keydown" , function(eventInfo){
    
    if(eventInfo.keyCode == 39)
        {
            
                currentIndex++;
    if(currentIndex == imgList.length)
        {
            currentIndex = 0;
        }   
item.style.backgroundImage ="url("+imgList[currentIndex].src+")" ;
    
        }
    else if(eventInfo.keyCode == 37)
        {
            currentIndex--;
    if(currentIndex < 0)
        {
            currentIndex = imgList.length -1;
        }
item.style.backgroundImage ="url("+imgList[currentIndex].src+")" ;
      
        }
    else if (eventInfo.keyCode == 27)
        {
              lightBox.classList.remove("show1");  
        }
})
prev.addEventListener("click" , function(){
    
    currentIndex--;
    if(currentIndex < 0)
        {
            currentIndex = imgList.length -1;
        }
item.style.backgroundImage ="url("+imgList[currentIndex].src+")" ;
   



})
    });*/
});
new WOW().init();

$(window).bind('beforeunload', function (e) {
        $("html,body").animate({scrollTop:'0'},0);
        
});