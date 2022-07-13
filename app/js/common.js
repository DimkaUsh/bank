$(function() {
	burger();
	headerSticky();
	footerMenu();
	selectric();
	radioBtns();
	userMenu();
	tabs();
	countSymbsTextfield();
	payTypeDropdown();
	animateInput();
	checkbox();
	payServiceClick();
	slickFooter();
	// dropdownMenuFixResize();
	// toTopButton();
	// activateSlickCarousel(); 
	// carouselControls();
	// tabsHandler();
	// addWaypoints();
	// addScrollTo();
	// addMaskedInput();
	// addPopupBehavior();
});

function slickFooter(){
	var footerY = $('.footer').offset().top + 234;
	var windH = $(window).height();
	// console.log(footerY);
	// console.log(windH);
	if(footerY < windH){
		$('.footer').addClass('slick');
		// console.log('add');
	}else{
		// console.log('remove');
		$('.footer').removeClass('slick');
	}
	// $(window).on('resize',function(){
	// 	var footerY = $('.footer').offset().top + 234;
	// 	var windH = $(window).height();
	// 	console.log(footerY);
	// 	console.log(windH);
	// 	if(footerY < windH){
	// 		$('.footer').addClass('slick');
	// 		console.log('add');
	// 	}else{
	// 		console.log('remove');
	// 		$('.footer').removeClass('slick');
	// 	}
	// })
}

function payServiceClick(){
	$('.pay-service').on('click', function(){
		$(this).toggleClass('active');
	});
}

function checkbox(){
	$('.checkbox-cont input').change(function(){
		// console.log('change')
		$(this).parent().find('.check').toggleClass('active');
	});
}

function animateInput() {
	$('.input-cont.anim input').on('focus',function(){
		$(this).parent().addClass('active');
		$(this).parent().find('.placeholder').addClass('active');
	});
	$('.input-cont.anim input').on('blur',function(){
		if($(this).val().length < 1){
			$(this).parent().find('.placeholder').removeClass('active');
			
		}
		$(this).parent().removeClass('active');
	});

}

function payTypeDropdown(){
	$('.type.dropdown > label').on('click', function(e){
		console.log($(this).parent().hasClass('active'));
		if(!$(this).parent().hasClass('active')){
			$(this).parent().find('.dropdown-cont').slideToggle();
		}
		// return false;
	});
	$('.type.dropdown input').on('click', function(e){
		e.stopPropagation();
	});
	$('.type label').on('click', function(){
		$(this).parent().siblings().removeClass('active');
		$(this).parent().addClass('active');
		$('.type.dropdown').each(function(){
			if($(this).hasClass('active')){
				$(this).find('.dropdown-cont').slideDown();
			}else{
				$(this).find('.dropdown-cont').slideUp();
			}
		});
	});
}

function countSymbsTextfield(){
	var maxDescLength = 150;
	$('.desc-short .desc .count').text(maxDescLength);
	$('#desc_short').bind('input propertychange', function() {
		var remain = maxDescLength - this.value.length;
		if(remain < 0){
			$('.desc-short .desc').addClass('irre');
			$('.desc-short .desc .count').text('');
			$('.desc-short .desc .text').text('Вы превысили количество рекомендованных символов');
		}else{
			$('.desc-short .desc').removeClass('irre');
			$('.desc-short .desc .count').text(remain);
			$('.desc-short .desc .text').text(' символов осталось до рекомендованного количества');
		}
	});	
}

function tabs(){
	$('.tabs-controls .tab').on('click', function(){
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		var tabID = $(this).attr('data-tab');
		console.log('Open Tab: ' + tabID);
		$(this).parent().parent().find('.tabs-content').removeClass('active');
		$(this).parent().parent().find('.tabs-content').eq(tabID-1).addClass('active');
	});
}

function userMenu(){
	$('.header .header__user').on('click', function(){
		$('.header__user-menu').slideToggle();
		$(this).find('i').toggleClass('disable');
	});
}

function radioBtns(){
	$('input[type=radio]').change(function(){
		var name = $(this).attr('name');
		$('input[name=' + name + ']').parent().removeClass('active');
		$(this).parent().addClass('active');
	});
}

function selectric(){
	$('select').selectric({
	 onChange: function(element) {
			$(element).parents('.selectric-wrapper').find('.selectric').removeClass('muted');
    },
    onInit: function() {
    },
	});
	$('select').each(function(){
		if($(this).find('option[disabled]').length){
			// alert('diss');
			$(this).parents('.selectric-wrapper').find('.selectric').addClass('muted');
		}
	});
}

function footerMenu(){
	$('.footer i').on('click', function(){
		$(this).parent().find('i').toggleClass('active');
		$(this).parents('.column').find('ul').slideToggle();
	});
}

function headerSticky(){
	if($('#header_sticky').length > 0){
		$( window ).scroll(function() {
			if($(window).scrollTop() > 560){
				if(!$('#header_sticky').hasClass('active')){
					$('#header_sticky').slideDown();
					$('#header_sticky').addClass('active');
					$('#header_sticky .btn:first-child').addClass('btn-red');
				}
			}else{
				if($('#header_sticky').hasClass('active')){
					$('#header_sticky').slideUp();
					$('#header_sticky').removeClass('active');
					$('#header_sticky .btn:first-child').removeClass('btn-red');
				}
			}
		});
	}
}

function addPopupBehavior(){
	$('.header__btn').on('click', function(){
		$('.popup').addClass('active');
		$('.popup').animate({opacity: 1}, 500);
	});
	$('.popup__overlay, .popup__close').on('click', function(){
		$('.popup').animate({opacity: 0}, 500,
			function(){
				$('.popup').removeClass('active');
		});
	});
}

function burger(){
	// Бургер с анимацией
	$('.burger').on('click', function(){
		$('#menu-over').addClass('active').animate({opacity: 1}, 800);
		$('#mob-menu').addClass('active');
		$('body').addClass('noscroll');
	});
	$('#mob-menu .mob-close, #menu-over').on('click', function(){
		$('#mob-menu').removeClass('active');
		$('body').removeClass('noscroll');
		$('#menu-over').animate({opacity: 0}, 800, function(){
			$('#menu-over').removeClass('active');
		});
	});
}
function dropdownMenuFixResize(){
	$(window).on('resize', function(){
		if($(window).width() > 767){
			$('.nav-cont ul').css('display', 'table-cell');
		} else {
			if(!$('.burger').hasClass('active')){
				$('.nav-cont ul').css('display', 'none');
			} 
		}
	});	
}
function toTopButton(){
	$(".up").click(function() {
	   $('html, body').animate({
	       scrollTop: 0
	   }, 1000);
	});
}
function tabsHandler(){
	$(".tabs__controls-item").click(function() {
		const index = $(this).index();
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
		var tabsContent = $(this).closest('.tabs').find('.tabs__content-item');
		tabsContent.removeClass('active');
		tabsContent.eq(index).addClass('active');
	});
}
function activateSlickCarousel(){
	$('.carousel').slick({
	  dots: false,
	  infinite: true,
	  autoplay: false,
	  speed: 500,
	  slidesToShow: 6,
	  slidesToScroll: 1,
	  arrows: false,
	  responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 5,
	        slidesToScroll: 1,
	  			infinite: true,
	      }
	    },
	    {
	      breakpoint: 767,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 420,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
}
function carouselControls(){
	$('.carousel-cont .left').on('click', function(){
		$('.carousel').slick('slickPrev');
	});
	$('.carousel-cont .right').on('click', function(){
		$('.carousel').slick('slickNext');
	});
}
// require waypoints and animate.css(optional)
function addWaypoints(){
	if($(window).width() > 991){
		var waypoint = new Waypoint({
		  element: document.getElementById('animate-hand'),
		  handler: function() {
		    $('.hand--bottom .hand').addClass('animated fadeInUp');
		  },
		  offset: '100%',
		})
		var waypoint = new Waypoint({
		  element: document.getElementById('animate-line'),
		  handler: function() {
		    $('.choose .h2').addClass('animated zoomIn');
		  }
		})
		var waypoint = new Waypoint({
		  element: document.getElementById('animate-stages'),
		  handler: function() {
		    $('.stages__header').addClass('animated fadeInLeft');
		    setInterval(function(){
		    	$('.stages .stage:nth-child(2)').addClass('animated fadeInUp');
		    }, 800);
		    setInterval(function(){
		    	$('.stages .stage:nth-child(3)').addClass('animated fadeInUp');
		    }, 1200);
		    setInterval(function(){
		    	$('.stages .stage:nth-child(4)').addClass('animated fadeInUp');
		    }, 1600);
		    setInterval(function(){
		    	$('.stages__desc').addClass('animated fadeInRight');
		    }, 2100);
		  }
		})
	}
}
function addScrollTo(){
	$('a[data-scroll-to]').on('click',function(){
		var idToScroll = $(this).attr('data-scroll-to');
    $('html, body').animate({
    	scrollTop: $("#" + idToScroll).offset().top - 65
    }, 1000);
	});
}
function addMaskedInput(){
  // MaskedInput
  $(".data").mask("99/99/9999");
  $(".tel").mask("+ 7 (999) 999-99-99");
  $(".cpf").mask("999.999.999-99");
  $(".cnpj").mask("99.999.999/9999-99");
}
function fixRequiredSafari(){
	$("form").on('submit', function(e) {

    var ref = $(this).find("[required]");

    $(ref).each(function(){
        if ( $(this).val() == '' )
        {
            alert("Введите номер телефона");

            $(this).focus();

            e.preventDefault();
            return false;
        }
    });  return true;
	});
}

function removePlaceholdersOnClick(){
	$('textarea, input[type="text"], input[type="tel"]').on('focus', function(){
		$(this).addClass('hid-placeholder');
	});
	$('textarea, input[type="text"], input[type="tel"]').on('blur', function(){
		$(this).removeClass('hid-placeholder');
	});
}