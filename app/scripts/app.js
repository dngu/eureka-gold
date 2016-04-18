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
    'eurekaGold.filters',
    'ngclipboard'
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
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('light-blue', {
        'default': '900',
        'hue-1': '900',
        'hue-2': '900',
        'hue-3': '900'
      });
  });
