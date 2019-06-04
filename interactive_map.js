// JavaScript Document

$('document').ready(function(){

//...................................................
// When the form changes
$('#mapForm').change(function() {

	var selectedMonth = $('#mapForm option:selected').val();
	if (selectedMonth == 'All'){
		$('a.dot').slideDown(1000);
	}else{
		$('a.dot[month = "'+selectedMonth+'"]').slideDown(1000);
		$('a.dot[month != "'+selectedMonth+'"]').slideUp(1000);
	}
	
});

	//...................................................
	// When a dot is clicked
	$('a.dot').click(function(){

		$('a.dot').removeClass('selected');
		$(this).addClass('selected');

		var city = '.city_detail#' + $(this).attr('city');
		var htmlCode = $(city).html();

		$('.detail_container').fadeOut(500, function(){
			$('.detail_container .city_detail').html(htmlCode);
			$('.detail_container').fadeIn(500);
		});

	});

// end Ready
});