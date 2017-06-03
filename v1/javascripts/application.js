function hideUsage() {
	$('usageweekone').toggle();
	$('usagetodayone').toggle();
	$('usagetodaytwo').toggle();
}

function showUsage(id) {
	var containers = $$('.container');
	if (!containers) return false;
	containers.each(function(container) {
		container.hide();
	});
	$(id).show();
	
	var buttons = $$('.buttons li a');
	if (!buttons) return false;
	buttons.each(function(button) {
		button.removeClassName('current');
	});
	var currentbutton = 'button-' + id;
	$(currentbutton).addClassName('current');
}

function toggleToday() {
	if ($('usagetodayone').visible()) {
		$('usagetodayone').hide();
		$('usagetodaytwo').show();
	}
	else {
		$('usagetodaytwo').hide();
		$('usagetodayone').show();
	}
}

document.observe("dom:loaded", hideUsage);