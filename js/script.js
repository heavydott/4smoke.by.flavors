$(function(flavors4Smoke) {
	var $prods = $('.prods');
	var $flavors = $('.flavors');

	var prodsItems = '';

	for(var i = 0; i < flavors4Smoke.length; i++) {
		prodsItems += '<a class="prod-item" href="#' + flavors4Smoke[i].hash + '">' +
						'<img src="' + flavors4Smoke[i].url + flavors4Smoke[i].logo + '.png" alt="" />' +
						'<p>' + flavors4Smoke[i].name + '</p>' +
					'</a>';
	}

	prodsItems += '<div style="clear: both;"></div>';

	$prods.html(prodsItems);

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
					var flavorsItems = '';

					flavorsItems += '<button>назад</button>';

					for(var j = 0; j < flavors4Smoke[i].flavors.length; j++) {
						flavorsItems += '<div class="flavor-item">' + 
											'<p class="title">'+ flavors4Smoke[i].name + ' - ' + flavors4Smoke[i].flavors[j].name + '</p>' +
											'<img src="' + flavors4Smoke[i].url + flavors4Smoke[i].flavors[j].img + '.png" alt="" />' +
											'<p class="flavor">' + flavors4Smoke[i].flavors[j].flavor + '</p>' +
											'<p class="desc">' + flavors4Smoke[i].flavors[j].desc + '</p>' +
										'</div>';
					}

					flavorsItems += '<div style="clear: both;"></div>';

					$flavors.html(flavorsItems);

					$('.flavors button').on('click', function() {
						window.location.hash = '#';
					});
				}
			}
		}
	}

	hashchange();

	$(window).on('hashchange', function() {
		hashchange();
	});
}(flavors4Smoke));