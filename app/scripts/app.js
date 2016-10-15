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
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/signIn', {
        templateUrl: 'views/sign-in.html',
        controller: 'SigninCtrl'
      })
      .when('/subCategory', {
        templateUrl: 'views/main-sub-category.html',
        controller: 'MainsubcategoryCtrl'
      })
      .when('/listing', {
        templateUrl: 'views/listing.html',
        controller: 'ListingCtrl'
      })
      .when('/detail', {
        templateUrl: 'views/item-detail.html',
        controller: 'ItemdetailCtrl'
      })
      .when('/submitClassified', {
        templateUrl: 'views/submit-classified.html',
        controller: 'SubmitclassifiedCtrl'
      })
      .when('/myAccount', {
        templateUrl: 'views/my-account.html',
        controller: 'MyaccountCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
