$(document).ready(function() {
	/* Modal Open */
	$('#modal-for-module').on('shown.bs.modal', function (e) {
		var dataID = 'module-name';
		var children = $(e.relatedTarget);
		var moduleName = children.data(dataID);
		var self = $(this);
		self.find('.' + dataID).html(moduleName);
		self.data('module-letter', children.data('module-letter'));
	});
	/* Modal Close */
	$('#modal-for-module').on('hidden.bs.modal', function (e) {
		$(this).find('.module-name').html('');
	});
	/* Modal Choose Campus */
	$('.modal .button-wrapper').on('click', function () {
		var self = $(this);
		var cityName = self.data('city-name');
		var moduleLetter = $('.modal').data('module-letter');
		var elemModuleToEdit = $('.module_' + moduleLetter.toLowerCase());

		switch (cityName) {
			
			case 'BOSTON': 
				elemModuleToEdit.find('.labels').removeClass().addClass('labels caption boston-bga').html('<div class="btn-choose boston-bg"></div><p>Boston</p><p>United States of America</p>');
				elemModuleToEdit.find('figure').removeClass().addClass('boston-img');
				elemModuleToEdit.find('.date').removeClass().addClass('date boston-bg mg-0');
				break;
			case 'SANFRANCISCO': 
				elemModuleToEdit.find('.labels').removeClass().addClass('labels caption sanfrancisco-bga').html('<div class="btn-choose sanfrancisco-bg"></div><p>San Francisco</p><p>United States of America</p>');
				elemModuleToEdit.find('figure').removeClass().addClass('sanfrancisco-img');
				elemModuleToEdit.find('.date').removeClass().addClass('date sanfrancisco-bg mg-0');
				break;				
			case 'LONDON': 
				elemModuleToEdit.find('.labels').removeClass().addClass('labels caption london-bga').html('<div class="btn-choose london-bg"></div><p>London</p><p>United Kingdom</p>');
				elemModuleToEdit.find('figure').removeClass().addClass('london-img');
				elemModuleToEdit.find('.date').removeClass().addClass('date london-bg mg-0');
				break;
			case 'DUBAI': 
				elemModuleToEdit.find('.labels').removeClass().addClass('labels caption dubai-bga').html('<div class="btn-choose dubai-bg"></div><p>Dubai</p><p>United Arab Emirates</p>');
				elemModuleToEdit.find('figure').removeClass().addClass('dubai-img');
				elemModuleToEdit.find('.date').removeClass().addClass('date dubai-bg mg-0');
				break;
			case 'SHANGHAI': 
				elemModuleToEdit.find('.labels').removeClass().addClass('labels caption shanghai-bga').html('<div class="btn-choose shanghai-bg"></div><p>Shanghai</p><p>China</p>');
				elemModuleToEdit.find('figure').removeClass().addClass('shanghai-img');
				elemModuleToEdit.find('.date').removeClass().addClass('date shanghai-bg mg-0');
				break;			
			case 'NEWYORK': 
				elemModuleToEdit.find('.labels').removeClass().addClass('labels caption newyork-bga').html('<div class="btn-choose newyork-bg"></div><p>New York</p><p>United States of America</p>');
				elemModuleToEdit.find('figure').removeClass().addClass('newyork-img');
				elemModuleToEdit.find('.date').removeClass().addClass('date newyork-bg mg-0');
				break;
			case 'ASHRIDGE': 
				elemModuleToEdit.find('.labels').removeClass().addClass('labels caption ashridge-bga').html('<div class="btn-choose ashridge-bg"></div><p>Ashridge</p><p>United Kingdom</p>');
				elemModuleToEdit.find('figure').removeClass().addClass('ashridge-img');
				elemModuleToEdit.find('.date').removeClass().addClass('date ashridge-bg mg-0');
				break;
			case 'NO-ROTATION':
				elemModuleToEdit.find('.caption').html('');
				elemModuleToEdit.find('figure').removeClass().addClass('empty');
				elemModuleToEdit.find('.date').removeClass().addClass('date none mg--3');
				break;
		}

		$('.modal.in').modal('hide'); 
	});
	
	/* Mouse Hover */
	$('figure[data-hover]').hover(function onMouseEnter(e) {
		if ($(this).hasClass('empty')) {
			$(this).removeClass().addClass('hover');
			$(this).children('.date').removeClass().addClass('date hover mg--3');
		}
	}, function onMouseLeave(e) {
		if ($(this).hasClass('hover')) {
			$(this).removeClass().addClass('empty');
			$(this).children('.date').removeClass().addClass('date none mg--3');
		}
	});

});