'use strict';

angular.module('clientApp')
  .controller('CookieCtrl', function ($scope, $cookieStore,$location) {
      $scope.user = $cookieStore.get('user');
	  $scope.current=$cookieStore.get('current');
    $scope.clearCookie = function () {
        $cookieStore.put('user', '');
		$cookieStore.put('isValid', '');
        $cookieStore.put('CASE_URL', '');
      $location.path('/');
    }
  })
