'use strict';

/**
 * @ngdoc function
 * @name eurekaGoldApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the eurekaGoldApp
 */
angular.module('eurekaGoldApp')
  .controller('MainCtrl', function ($scope, httpService, $timeout, $window, $mdToast, $localStorage) {
    $scope.sessionData = $localStorage.$default({
    	state: 'setup',
    	url: 'http://localhost:8080/eureka/v2',
    	mode: 'list'
    });

    var onSuccessfulAppLoad = function(data) {
    	console.log(data.applications.application);
  		$scope.sessionData.applications = data.applications.application;
  		$scope.sessionData.state = 'loaded';
      $scope.sessionData.refreshing = false;
    };

    var onFailureAppLoad = function() {
    	$scope.sessionData.state = 'setup';
    	$scope.eurekaForm.urlinput.$error.loadfail = true;
      $scope.sessionData.refreshing = false;
    };

    $scope.setupEureka = function($event) {
    	$scope.sessionData.promptHeader = 'Loading...';
    	$scope.sessionData.prompt = 'Trying to contact your eureka server instance';
    	$scope.sessionData.state = 'loading';
  		$event.preventDefault();

  		$timeout($scope.refresh, 1000);
    };

    $scope.refresh = function() {
      $scope.sessionData.refreshing = true;
    	httpService.getAppList($scope.sessionData.url).then(onSuccessfulAppLoad, onFailureAppLoad);
    };

    $scope.clearSearch = function() {
    	$scope.showSearch = !$scope.showSearch;
    	$scope.query = '';
    };

    $scope.redirectToPage = function(url) {
    	$window.open(url, '_blank');
    };

    $scope.deregister = function(app) {
        var onSuccessfulAppDelete = function() {
          app.instance[0].status = 'UNKNOWN';
          $scope.sessionData.refreshing = true;
          $timeout($scope.refresh, 8000);
        };

        httpService.deregisterApp($scope.sessionData.url, app).then(onSuccessfulAppDelete);
        var toast = $mdToast.simple()
                          .textContent('App deregistering...')
                          .highlightAction(true)
                          .position('bottom right');
        $mdToast.show(toast);
    };

    // On startup refresh list
    if ($scope.sessionData.state === 'loaded') {
      $scope.refresh();
    }

  });
