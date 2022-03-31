/* == Hello World! js styles == */

/*jshint devel:true */
/*jshint unused:false */


var Style = (function(){


	/*=============================================================================*/
	/* CONSTANTES Y FUNCIONES GENÉRICAS                                            */
	/*=============================================================================*/


	/*------------------ Constantes ------------------*/


	var isPhoneDevice = false;
	var isTabletDevice = false;
	var isDesktopDevice = false;


	/*------------------ Window dimensions ------------------*/


	var window_width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	var window_height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;


	/*------------------ RWD Breakpoints ------------------*/


	var phone_max_width = 670;
	var tablet_max_width = 970;


	/*------------------ RWD MediaQueries ------------------*/


	var mediaQuery = function() {

		$('body').removeClass('phoneDevice tabletDevice desktopDevice');
		isPhoneDevice = false;
		isTabletDevice = false;
		isDesktopDevice = false;

		if( window_width <= phone_max_width ){
			$('body').addClass('phoneDevice');
			isPhoneDevice = true;
		} else {
			if( window_width <= tablet_max_width ){
				$('body').addClass('tabletDevice');
				isTabletDevice = true;
			} else {
				$('body').addClass('desktopDevice');
				isDesktopDevice = true;
			}
		}

	};

	/*------------------ FORMs animation label ------------------*/

	var initAnimLabelForm = function(){
		$(document).on('focus', '.form input[type="text"], .form input[type="email"]', function(e){
			$(this).parent('.field').addClass('active');
		});
		$(document).on('blur', '.form input[type="text"], .form input[type="email"]', function(e){
			if(this.value === ""){
				$(this).parent('.field').removeClass('active');
			}
		});
	};

	/*------------------ Accordion ------------------*/

	var initAccordion = function(){
		$(document).on('click', '.js--handler', function(e){
			e.preventDefault();
			var el = $(this);
			el.toggleClass('active').next('.accordion--item_content').slideToggle();
		});
	};

	/*------------------ Modal ------------------*/


    var initModal = function() {
		$(document).on('click', '.js--openModal', function(e){
				e.preventDefault();
				var target = $(this).data('target');
				$('body').addClass('fix');
				$('#' + target).addClass('show');
				setTimeout(function(){
					$('#' + target).find('.modal--content').addClass('active');
					$('#' + target).find('.modal--content').parent().first().show();
				},300);
			});

			$(document).on('click', '.js--closeModal', function(e){
				e.preventDefault();
				$('body').removeClass('fix');
        		var target = $(this)[0].dataset["target"];
				const lastModal = $('.modal#' + target);
				$(lastModal).removeClass('show');
				setTimeout(function(){
					$(lastModal).find('.modal--content').removeClass('active');
					$(lastModal).find('.modal--content').parent().hide();
				},300);
			});
		};


	/*------------------ DetecciÃ³n de dispositivos tÃ¡ctiles ------------------*/


    var detectTouchDevice = function() {
			var is_touch_device = 'ontouchstart' in document.documentElement;
			if(is_touch_device){
				$('body').addClass('touchDevice');
			} else {
				$('body').addClass('noTouchDevice');
			}
		};


	/*=============================================================================*/
	/* EVENTOS PRINCIPALES                                                         */
	/*=============================================================================*/




	var onReady = function(){
		detectTouchDevice();
		mediaQuery();
		initAccordion();
		initModal();
		initAnimLabelForm();
		//initSlider();

		$(document).on('click', '.js--openMenu', function(e){
			e.preventDefault();
			$('.nav--main').addClass('open');
			$('body').addClass('fix');
		});

		$(document).on('click', '.js--closeMenu', function(e){
			e.preventDefault();
			$('.nav--main').removeClass('open');
			$('body').removeClass('fix');
		});

		init_mod_squads();

		init_skills();

		init_timeline();
	};

	var onResize = function(){
		mediaQuery();
	};

  var onResizeInstant = function(){
  };

	var init = function(){

		$(window).on('load',function() {
			setTimeout(function(){
				$('.overlay-loading').addClass('hide');

				//Init Animation
				setTimeout(function(){
					$('.mod--init .box--content').addClass('init');
				}, 300);
			},1000);
		});

    $(window).resize(function(){
			// Comprobamos que ha habido resize en x, para evitar lanzarlo cuando las barras del navegador desaparecen (Chrome mobile).
			var nww = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			if( nww !== window_width ) {
				onResizeInstant();
				clearTimeout(this.id);
				this.id = setTimeout(function(){
					onResize();
				}, 50);
				window_width = nww;
				window_height = window.innerHeight;
			}
    });

		$(document).ready(function(){
			onReady();
			clearTimeout(this.id);
			this.id = setTimeout(function(){
				onResize();
			}, 50);
		});

	};

	return {
		init: init
	};

})($);

Style.init();


function init_skills(){
  $('.skills--images').viewportChecker({
    classToAdd: 'show',
    offset: 100
  });
}

function init_flipInX(){
  console.log('init_flipInX');
  $('.animate__animated').viewportChecker({
    classToAdd: 'animate__flipInX',
    offset: 100
  });
}

function init_mod_squads(){
  $('.mod--squads').viewportChecker({
    classToAdd: 'adjust',
    offset: 100
  });
}

function init_mod_helloTest(){
  $('.modal-hello-test').viewportChecker({
    classToAdd: 'adjust',
    offset: 100
  });
}

function init_timeline(){
  $('.timeline--item_content').viewportChecker({
    classToAdd: 'active',
    offset: 100
  });
}

function initSlider(){
  try{
    $('.js--slider').slick({
      prevArrow:"<img class='prev slick-prev' src='assets/ico-arrow.svg' width='40px' height='23px' alt='atrás'>",
      nextArrow:"<img class='next slick-next' src='assets/ico-arrow.svg' width='40px' height='23px' alt='adelante'>"
    });
  } catch{
    console.log("Aborted initSlider. Already initialized");
  }

};

function style_reinit(){
  setTimeout(function(){
    init_flipInX();
    init_mod_squads();
    init_skills();
    init_timeline();
    init_mod_helloTest();
	  //initSlider();
    console.log("reinit done");
  }, 50);

}
