'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('LoginCtrl', function ($scope,loginService,$cookieStore,$location) {
 var login=this;
 
 
 login.loginUser = function (user) {
		loginService.loginUserRegistered({'email':user.email,'password':user.password}).then(function (response) {
			console.log(response);
				if(response.data.message=="success")
				{
					$cookieStore.put('user', user);
					$cookieStore.put('isValid', true);
					$location.path('/createFeature');
				}
				else{
					alert("Invalid User")
					$location.path('/');
				}
			});
 
  };
  });
