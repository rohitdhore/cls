'use strict';

/**
 * @ngdoc service
 * @name clfApp.Data
 * @description
 * # Data
 * Factory in the clfApp.
 */
angular.module('clfApp')
  .factory('Data', function ($http) {
    // Service logic
    // ...

    var meaningOfLife = 42;
    // Public API here
    return {
      getCategories: function (id, parent) {
        return $http({
          method: 'GET',
          url: 'scripts/services/json/categories.json',
          cache: false
        }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          return response;
        }, function errorCallback(error) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          return error;
        });
      },
      getClassifieds: function (id) {
        return $http({
          method: 'GET',
          url: 'scripts/services/json/result.json',
          cache: false
        }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          return response;
        }, function errorCallback(error) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          return error;
        });
      },
      getClassifiedDetail: function (id) {
        return $http({
          method: 'GET',
          url: 'scripts/services/json/detail.json',
          cache: false
        }).then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          return response;
        }, function errorCallback(error) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          return error;
        });
      },
      setSelectedCategory: function (category) {
        window.localStorage.setItem("selectedCategory", JSON.stringify(category));
      },
      getSelectedCategory: function () {
        var myObj = JSON.parse(window.localStorage.getItem("selectedCategory"));
        return myObj;
      },
      setSelectedSubCategory: function (subCategory) {
        window.localStorage.setItem("selectedSubCategory", JSON.stringify(subCategory));
      },
      getSelectedSubCategory: function () {
        var myObj = JSON.parse(window.localStorage.getItem("selectedSubCategory"));
        return myObj;
      }
    };
  });
