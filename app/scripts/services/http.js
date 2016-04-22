'use strict';
angular.module('eurekaGold.services', [])
	.factory('httpService', function($http) {
		$http.defaults.headers.common = {};

		var asyncGet = function(baseUrl, webService) {
			var promise = $http.get(baseUrl + webService, { 
				cache: false,
				headers: {
					'Accept': 'application/json',
					'Access-Control-Allow-Origin': 'http://localhost:8080'
				}
			}).then(function(response) { return response.data; });
			return promise;
		};

		var asyncDelete = function(baseUrl, webService) {
			var promise = $http.delete(baseUrl + webService, {
				cache: false,
				headers: {
					'Accept': 'application/json',
					'Access-Control-Allow-Origin': 'http://localhost:8080'
				}
			}).then(function(response) { return response.data; });
			return promise;
		};

		var getAppInstanceIdUri = function(app) {
			return app.instance[0].app + '/' + app.instance[0].instanceId;
		};

		var http = {
			getAppList: function(baseUrl) {
				return asyncGet(baseUrl, '/apps');
			},
			deregisterApp: function(baseUrl, app) {
				return asyncDelete(baseUrl, '/apps/' + getAppInstanceIdUri(app));
			},
			getAppStatus: function(baseUrl, app) {
				return asyncGet(baseUrl, '/apps' + getAppInstanceIdUri(app));
			}
		};
		return http;
	});