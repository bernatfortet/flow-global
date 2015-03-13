$(document).ready( ->
	parllax()
	$('.more-button').on('click', onExpand )
)



onExpand = ->
	more = $(this).parent().find('.more')
	if( more.height() == 0 )
		more.css('height', 'auto')
		$(this).html('Less')
	else
		more.css('height', 0)
		$(this).html('More')
		#Scroll To


parllax = ->
	$('.parallax-window').css('height', getHeight() )
	for i in [1..4]
		console.log $(".parallax-window.r#{i}")
		$(".parallax-window.r#{i}").parallax( imageSrc: "../images/row_#{i}.jpg", naturalWidth: 3096, naturalHeight: 1000, speed: 0.8, bleed: 5, positonY:0, zIndex:20 )


getHeight = ->

	isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
	
	if( !isMobile ) 
		$(window).outerHeight()/1.8
	else
		$(window).outerHeight()/4

