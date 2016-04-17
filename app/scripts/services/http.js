'use strict';
angular.module('eurekaGold.services', [])
	.factory('httpService', function($http) {
		$http.defaults.headers.common = {};
		var http = {
			async: function(baseUrl, webService) {
				var promise = $http.get(baseUrl + webService, { 
					cache: true,
					headers: {
						'Accept': 'application/json',
						'Access-Control-Allow-Origin': 'http://192-168-1-100.tpgi.com.au:8080'
					}
				}).then(function(response) { return response.data; });
				return promise;
			}
		};
		return http;
	});