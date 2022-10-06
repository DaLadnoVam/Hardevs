$(function() {
	
	
	$('#menu-tabs li').click(function(){
        var thisClass = this.className.slice(0,2);
        $('div.t1').hide();
        $('div.t2').hide();
        $('div.t3').hide();
        $('div.' + thisClass).fadeIn(500);
        $('#menu-tabs li').removeClass('active');
        $(this).addClass('active');
        return false;
    });
    $('#menu-tabs li.t1').click();


    $('.feedback__list').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
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
	
});


