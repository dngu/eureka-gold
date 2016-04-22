'use strict';

/**
 * @ngdoc function
 * @name eurekaGoldApp.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the eurekaGoldApp
 */
angular.module('eurekaGoldApp')
  .controller('SettingsCtrl', function ($scope, $localStorage, $location, $mdDialog) {
    var resetEureka = function() {
    	$localStorage.$reset();
    	$location.path('#/main');
    };

	$scope.showConfirm = function(ev) {
	    var confirm = $mdDialog.confirm()
	          .title('Reset your dashboard')
	          .textContent('Are you sure you want to reset the eureka dashboard?')
	          .targetEvent(ev)
	          .ok('Yes')
	          .cancel('Cancel');
	    $mdDialog.show(confirm).then(function() {
	      resetEureka();
	    }, function() {
	      // Do nothing
	    });
	  };
  });
