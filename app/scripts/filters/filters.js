'use strict';
angular.module('eurekaGold.filters', [])
	.filter('getStatus', function() {
		var iconMapping = {
			up : 'check_circle',
			down : 'error',
			unknown : 'help'
		};

		return function(obj) {
			if (!obj) { return 'help'; }
			if (obj.instance[0].overriddenstatus === 'UNKNOWN') {
				var lookupResult = iconMapping[obj.instance[0].status.toLowerCase()];
				return lookupResult !== undefined ? lookupResult : 'help';
			} else {
				var overrideLookupResult = iconMapping[obj.instance[0].overriddenstatus.toLowerCase()];
				return overrideLookupResult !== undefined ? overrideLookupResult : 'help';
			}
		};
	});