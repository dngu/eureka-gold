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
    'ngclipboard',
    'ngStorage'
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
      .when('/configure', {
        templateUrl: 'views/configure.html',
        controller: 'SettingsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('red', {
        'default': '900'
      });
  });
