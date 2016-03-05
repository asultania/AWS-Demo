'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('createFeature', function ($scope,$location,featureService,$cookieStore) {
	  if ($cookieStore.get('isValid') == true) {
        angular.element(".header").show();
		var feature=this;
 
 
 feature.createFeature = function () {

featureService.addfeature(this).then(function (response) {
	console.log(response);
	$location.path('/viewFeatures');
    });
 
  };
	  }
	  
	  else{
		  $location.path('/');
	  }
  });
