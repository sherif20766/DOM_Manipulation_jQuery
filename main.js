
$(document).ready(function(){

	$('#about').click(function(){
		$('#option_2').css({'display': 'none'});
		$('#option_3').css({'display': 'none'});
		$('#option_1').css({'display': 'block'});
	});

	$('#menu').click(function(){
		$('#option_1').css({'display': 'none'});
		$('#option_3').css({'display': 'none'});
		$('#option_2').css({'display': 'block'});
	});


	$('#contact').click(function(){
		$('#option_1').css({'display': 'none'});
		$('#option_2').css({'display': 'none'});
		$('#option_3').css({'display': 'block'});
	});


});