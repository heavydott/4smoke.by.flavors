$(function(flavors4Smoke) {
	var $prods = $('.prods');
	var $flavors = $('.flavors');

	// Products makers
	var prodsItems = '';

	for(var i = 0; i < flavors4Smoke.length; i++) {
		prodsItems += '<a class="prod-item" href="#' + flavors4Smoke[i].hash + '">' +
						'<img src="' + flavors4Smoke[i].url + flavors4Smoke[i].logo + '.png" alt="" />' +
						'<p>' + flavors4Smoke[i].name + '</p>' +
					'</a>';
	}

	prodsItems += '<div style="clear: both;"></div>';

	$prods.html(prodsItems);

	// Flavors
	var flavorsItems = '<button>назад</button>';

	for(var i = 0; i < flavors4Smoke.length; i++) {
		flavorsItems += '<div class="flav-cont ' + flavors4Smoke[i].hash + '">';

		for(var j = 0; j < flavors4Smoke[i].flavors.length; j++) {
			flavorsItems += '<div class="flavor-item">' + 
								'<p class="title">'+ flavors4Smoke[i].name + ' - ' + flavors4Smoke[i].flavors[j].name + '</p>' +
								'<img src="' + flavors4Smoke[i].url + flavors4Smoke[i].flavors[j].img + '.png" alt="" />' +
								'<p class="flavor">' + flavors4Smoke[i].flavors[j].flavor + '</p>' +
								'<p class="desc">' + flavors4Smoke[i].flavors[j].desc + '</p>' +
							'</div>';
		}

		flavorsItems += '<div style="clear: both;"></div></div>';

		$flavors.html(flavorsItems);

		$('.flavors button').on('click', function() {
			window.location.hash = '#';
		});
	}

	function hashchange() {
		var hash = window.location.hash.substr(1);

		if(hash.length == 0) {
			$prods.addClass('active');
			$flavors.removeClass('active');
		} else {
			$prods.removeClass('active');
			$flavors.addClass('active');

			for(var i = 0; i < flavors4Smoke.length; i++) {
				if(flavors4Smoke[i].hash == hash) {
					$('.flav-cont.' + flavors4Smoke[i].hash).addClass('active');
				} else {
					$('.flav-cont.' + flavors4Smoke[i].hash).removeClass('active');
				}
			}
		}
	}

	hashchange();

	$(window).on('hashchange', function() {
		hashchange();
	});
}(flavors4Smoke));