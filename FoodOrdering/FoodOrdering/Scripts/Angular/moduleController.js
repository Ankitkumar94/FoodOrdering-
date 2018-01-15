﻿var LoginModule = angular.module('LoginPage', []);

LoginModule.controller('LoginController', function ($scope, LoginService) {
    $scope.regexUsername = "^[a-zA-Z0-9]*$";
    $scope.regexPassword = "^[a-zA-Z0-9]*$";
    $scope.login = function (form) {

    }
})
    .factory('LoginService', function ($http) {
        var fac = {};
        fac.GetUser = function (d) {
            return $http({
                url: '/Home/UserLogin',
                method: 'POST',
                data: JSON.stringify(d),
                headers: { 'content-type': 'application/json' }
            })
        };
        return fac;
    })


LoginModule.controller('RegisterController', function ($scope) {
    $scope.register = function (form) {

    }
});