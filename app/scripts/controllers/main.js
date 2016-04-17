'use strict';

/**
 * @ngdoc function
 * @name eurekaGoldApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eurekaGoldApp
 */
angular.module('eurekaGoldApp')
  .controller('MainCtrl', function ($scope, httpService, $timeout) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.sessionData = {
    	state: 'setup',
    	url: 'http://192-168-1-100.tpgi.com.au:8080/eureka/v2',
    	mode: 'list'
    };

    var onSuccessfulAppLoad = function(data) {
    	console.log(data.applications.application);
		$scope.sessionData.applications = data.applications.application;
		$scope.sessionData.state = 'loaded';
    };

    var onFailureAppLoad = function() {
    	$scope.sessionData.state = 'setup';
    	$scope.eurekaForm.urlinput.$error.loadfail = true;
    };

    $scope.setupEureka = function($event) {
    	$scope.sessionData.promptHeader = 'Loading...';
    	$scope.sessionData.prompt = 'Trying to contact your eureka server instance';
    	$scope.sessionData.state = 'loading';
		$event.preventDefault();

		$timeout(function() {
			httpService.async($scope.sessionData.url, '/apps').then(onSuccessfulAppLoad, onFailureAppLoad);
		}, 1000);
    };

  });
