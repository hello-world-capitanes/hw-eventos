$( document ).ready(function() {

  $(document).on('click', 'a.page_link', function(e){
	e.preventDefault();
	$('.nav--main').removeClass('open');
	$('body').removeClass('fix');
  });

  $(document).on('click', 'a.inpage', function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: ($(target).offset().top)
  }, 800);
  });

  $(document).on('click', 'a.inpage_link', function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: ($(target).offset().top)-5
  }, 800);
  });

  $(document).on('click', 'ul.nav--main_menu a.inpage', function(e){
    e.preventDefault();
    $('.nav--main').removeClass('open');
		$('body').removeClass('fix');
    var target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: ($(target).offset().top)-5
  }, 800);
  });

});


