'use strict';

/**
 * @ngdoc function
 * @name clfApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clfApp
 */
angular.module('clfApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.categories = [
    {id:1, name: 'mobiles', title: 'Mobiles'},
    {id:2, name: 'electronics', title: 'Electronics & Appliances'},
    {id:3, name: 'cars', title: 'Cars'},
    {id:4, name: 'bikes', title: 'Bikes'},
    {id:5, name: 'furniture', title: 'Furniture'},
    {id:6, name: 'books', title: 'Books, Sports & Hobbies'},
    {id:7, name: 'fashion', title: 'Fashion'},
    {id:8, name: 'pets', title: 'Pets'},
    {id:9, name: 'realestate', title: 'Real Estate'},
    {id:10, name: 'jobs', title: 'Jobs & Services'}]
  });
