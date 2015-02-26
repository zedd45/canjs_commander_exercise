steal('can',
	'app.stache!',
	'models/captain.js',

	'less/app.less!',
	'components/data-table/',
	'components/favorites-display/',
	'can/view/stache',
	'fixtures',

function(can, template, captain) {

	// this pattern will only render _after_ the ajax request completes
	// (this request is currently intercepted by fixtures)
	captain.findAll({}, function (captains) {
		$('#app-content').append(template({
			captains: captains
		}));
	});

});
