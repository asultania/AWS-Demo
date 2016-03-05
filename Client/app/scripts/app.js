'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/viewFeatures', {
        templateUrl: 'views/ViewFeature.html',
        controller: 'ViewFeaturesCtrl',
        controllerAs: 'viewfeature'
      })
	  .when('/createFeature', {
        templateUrl: 'views/createFeature.html',
        controller: 'createFeature',
        controllerAs: 'feature',
		caseinsensitivematch: false

      });
  })
  .factory('loginService', ['$http', function ($http) {

        var obj = {};
        obj.loginUserRegistered = function (data) {
            return $http.get('http://localhost:8081/checkuser', data);
        }
        return obj;
    }])
    .factory('featureService', ['$http', function ($http) {

        var obj = {};
        obj.addfeature = function (data) {
            return $http.post('http://localhost:8081/addfeature', data);
        }
		obj.viewfeature = function (data) {
            return $http.get('http://localhost:8081/viewfeature', data);
        }
        return obj;
    }]);
