'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('ViewFeaturesCtrl', function ($scope,$location,featureService,$cookieStore) {
	  if ($cookieStore.get('isValid') == true) {
        angular.element(".header").show();            
 var viewfeature=this;
 
 
 viewfeature.getFeatureData = function () {

featureService.viewfeature(this).then(function (response) {
	console.log(response);
	viewfeature.FeaturesData=response.data;
    });
 
  };
	  }
	  
	  else{
		  $location.path('/');
	  }
  });
