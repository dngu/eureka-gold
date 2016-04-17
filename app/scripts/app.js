'use strict';

/**
 * @ngdoc overview
 * @name eurekaGoldApp
 * @description
 * # eurekaGoldApp
 *
 * Main module of the application.
 */
angular
  .module('eurekaGoldApp', [
    'ngResource',
    'ngRoute',
    'ngMaterial',
    'eurekaGold.services',
    'eurekaGold.filters'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
