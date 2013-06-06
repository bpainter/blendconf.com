jQuery(document).ready(function($) {
	
	// Filter units and rooms based of their category
	$('#units-nav, #rooms-nav').find('a').click(function(){
		var $this = $(this);
		var category = $this.data('category');
		var $content = $('#content');

		// remove .selected from the HTML
		$this.parent().parent().find('a').removeClass('selected');

		// add .selected class to this element
		$this.addClass('selected');

		// check to see if the link has a category
		// so show or if it should show all categories
		if (category == undefined || category == "") {
			$content.find('.unit-box').show();
		} else {
			$content.find('.unit-box').hide();
			$content.find("[data-categories~='" + category + "']").show();
		}
		
		return false;
	});

	// Makes units & rooms boxes clickable
	var $units = $('#units').find('#content');
	var $rooms = $('#rooms').find('#content');
	$units.find('.unit-box').click(function(){
		window.location = 'rooms/';
		return false;
	});
	$rooms.find('.unit-box').click(function(){
		window.location = 'patients/';
		return false;
	});

});