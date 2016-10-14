'use strict';

/**
 * @ngdoc overview
 * @name clfApp
 * @description
 * # clfApp
 *
 * Main module of the application.
 */
angular
  .module('clfApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
