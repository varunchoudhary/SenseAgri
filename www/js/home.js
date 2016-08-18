$(window).scroll(function(){

	var wScroll = $(this).scrollTop();

	$('.logo').css({
		'transform' : 'translate(0px,'+ wScroll/2 +'%)'
	});

	if(wScroll >  $('.content').offset().top-($(window).height()/1.2)){
		

		$('.content div').each(function(i){
					setTimeout(function(){
					$('.content div').eq(i).addClass('is-showing');
				},150 * (i+1));
				});
	}

});
