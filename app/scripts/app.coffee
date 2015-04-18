$(document).ready( ->
	$('.more-button').on('click', onExpand )

	$('.password form').on('submit', (event) ->

		password = $(event.target).find('input').val()
		checkPasswordAndGo(password)
		event.preventDefault()
	)
	$('.password .button').on('click', (event) ->

		password = $(event.target).parent().find('input').val()
		checkPasswordAndGo(password)
		event.preventDefault()
	)
	if( window.location.origin == "http://localhost:9000" )
		init()
)


checkPasswordAndGo = (password) ->
	if( password == '123flow' )
		init()

init = ->
	$('.password').fadeOut(400)
	$('body').removeClass('protected')
	parllax()
	jQuery(window).trigger('resize').trigger('scroll');



onExpand = ->
	more = $(this).parent().find('.more')
	if( more.height() == 0 )
		more.css('height', 'auto')
		$('html, body').animate({ scrollTop: more.offset().top }, 300);
		$(this).html('Less')
		jQuery(window).trigger('resize').trigger('scroll');
	else
		$('html, body').animate({ scrollTop: $(this).parent().offset().top - $(window).outerHeight()/2 }, 600, ->
			more.animate({'height': 0}, 150, ->
				jQuery(window).trigger('resize').trigger('scroll');
			)
		);

		$(this).html('More')
		#Scroll To




parllax = ->
	$('.parallax-window').css('height', getHeight() )
	for i in [1..4]
		console.log $(".parallax-window.r#{i}")
		$(".parallax-window.r#{i}").parallax( imageSrc: "./images/row_#{i}.jpg", naturalWidth: 3096, naturalHeight: 1000, speed: 0.8, bleed: 5, positonY:0, zIndex:20 )


getHeight = ->

	isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
	
	if( !isMobile ) 
		$(window).outerHeight()/1.8
	else
		$(window).outerHeight()/4

