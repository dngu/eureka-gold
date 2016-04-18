'use strict';
angular.module('eurekaGold.filters', [])
	.filter('getStatus', function() {
		var iconMapping = {
			up : 'ok-sign',
			down : 'remove-sign',
			unknown : 'question-sign'
		};

		return function(obj) {
			if (!obj) { return 'question-sign'; }
			if (obj.instance[0].overriddenstatus === 'UNKNOWN') {
				var lookupResult = iconMapping[obj.instance[0].status.toLowerCase()];
				return lookupResult !== undefined ? lookupResult : 'question-sign';
			} else {
				var overrideLookupResult = iconMapping[obj.instance[0].overriddenstatus.toLowerCase()];
				return overrideLookupResult !== undefined ? overrideLookupResult : 'question-sign';
			}
		};
	});