'use strict';

/**
 * @ngdoc overview
 * @name cnmeApp
 * @description
 * # cnmeApp
 *
 * Main module of the application.
 */
angular
  .module('cnmeApp', [
    'ngAnimate',
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/verhaal', {
        templateUrl: 'views/verhaal.html',
        controller: 'VerhaalCtrl'
      })
      .when('/verhaal-2', {
        templateUrl: 'views/verhaal-2.html',
        controller: 'Verhaal2Ctrl'
      })
      .when('/voortgang', {
        templateUrl: 'views/voortgang.html',
        controller: 'VoortgangCtrl'
      })
      .when('/score', {
        templateUrl: 'views/score.html',
        controller: 'ScoreCtrl'
      })
      .when('/informatie', {
        templateUrl: 'views/informatie.html',
        controller: 'InformatieCtrl'
      })
      .when('/verhaal-3', {
        templateUrl: 'views/verhaal-3.html',
        controller: 'Verhaal3Ctrl'
      })
      .when('/verhaal-4', {
        templateUrl: 'views/verhaal-4.html',
        controller: 'Verhaal4Ctrl'
      })
      .when('/menu', {
        templateUrl: 'views/menu.html',
        controller: 'MenuCtrl'
      })
      .when('/verhaal-5', {
        templateUrl: 'views/verhaal-5.html',
        controller: 'Verhaal5Ctrl'
      })
      .when('/verhaal-6', {
        templateUrl: 'views/verhaal-6.html',
        controller: 'Verhaal6Ctrl'
      })
      .when('/verhaal-7', {
        templateUrl: 'views/verhaal-7.html',
        controller: 'Verhaal7Ctrl'
      })
      .when('/verhaal-8', {
        templateUrl: 'views/verhaal-8.html',
        controller: 'Verhaal8Ctrl'
      })
      .when('/verhaal-9', {
        templateUrl: 'views/verhaal-9.html',
        controller: 'Verhaal9Ctrl'
      })
      .when('/verhaal-10', {
        templateUrl: 'views/verhaal-10.html',
        controller: 'Verhaal10Ctrl'
      })
      .when('/verhaal-11', {
        templateUrl: 'views/verhaal-11.html',
        controller: 'Verhaal11Ctrl'
      })
      .when('/verhaal-12', {
        templateUrl: 'views/verhaal-12.html',
        controller: 'Verhaal12Ctrl'
      })
      .when('/verhaal-13', {
        templateUrl: 'views/verhaal-13.html',
        controller: 'Verhaal13Ctrl'
      })
      .when('/verhaal-14', {
        templateUrl: 'views/verhaal-14.html',
        controller: 'Verhaal14Ctrl'
      })
      .when('/verhaal-15', {
        templateUrl: 'views/verhaal-15.html',
        controller: 'Verhaal15Ctrl'
      })
      .when('/verhaal-16', {
        templateUrl: 'views/verhaal-16.html',
        controller: 'Verhaal16Ctrl'
      })
      .when('/verhaal-17', {
        templateUrl: 'views/verhaal-17.html',
        controller: 'Verhaal17Ctrl'
      })
      .when('/verhaal-18', {
        templateUrl: 'views/verhaal-18.html',
        controller: 'Verhaal18Ctrl'
      })
      .when('/verhaal-19', {
        templateUrl: 'views/verhaal-19.html',
        controller: 'Verhaal19Ctrl'
      })
      .when('/verhaal-20', {
        templateUrl: 'views/verhaal-20.html',
        controller: 'Verhaal20Ctrl'
      })
      .when('/diploma', {
        templateUrl: 'views/diploma.html',
        controller: 'DiplomaCtrl'
      })
      .when('/verhaal-21', {
        templateUrl: 'views/verhaal-21.html',
        controller: 'Verhaal21Ctrl'
      })
      .when('/verhaal-22', {
        templateUrl: 'views/verhaal-22.html',
        controller: 'Verhaal22Ctrl'
      })
      .when('/verhaal-23', {
        templateUrl: 'views/verhaal-23.html',
        controller: 'Verhaal23Ctrl'
      })
      .when('/verhaal-24', {
        templateUrl: 'views/verhaal-24.html',
        controller: 'Verhaal24Ctrl'
      })
      .when('/verhaal-25', {
        templateUrl: 'views/verhaal-25.html',
        controller: 'Verhaal25Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

var myApp = angular.module('cnmeApp');

myApp.controller('MasterController', ['$scope', '$animate', function($scope, $animate){

  $scope.score = 0;

  $scope.menuOpen = function() {
    $animate.addClass('#menu', 'js-droptop');
  };

  $scope.menuClose = function() {
    $animate.removeClass('#menu', 'js-droptop');
  };

  $scope.openPopup = function(selector1, jsclass1, selector2, jsclass2) {
    $animate.addClass(selector1, jsclass1);
    $animate.addClass(selector2, jsclass2);
  };

  $scope.closePopup = function(selector1, jsclass1, selector2, jsclass2) {
    $animate.removeClass(selector1, jsclass1);
    $animate.removeClass(selector2, jsclass2);
  };

  $scope.scoreSet = function(score) {
    if (score > localStorage.getItem('score')) {
      localStorage.setItem('score', score);
    }
  };

  $scope.$watch('scoreSet', function() {
    $scope.score = localStorage.getItem('score');
  });

}]);

/*
myApp.factory('ScoreFactory', function() {

  var currentScore;

  if(!localStorage.getItem('score')){
    localStorage.setItem('score', 0)
  }
  return {
    getScore: function(){
      return currentScore = parseInt(localStorage.getItem('score'));
    },
    setScore: function(incr){
      var cur = parseInt(localStorage.getItem('score'));
      cur += incr;
      localStorage.setItem('score', cur);
    }
  }
});

(function(){

  myApp.controller('ScoreCtrl', ['$scope', '$http', 'ScoreFactory', function($scope, $http, ScoreFactory) {

    $scope.upScore = function(inc){
      ScoreFactory.setScore(inc);
      $scope.score = ScoreFactory.getScore();
    }

    $scope.score = ScoreFactory.getScore();
  }])

})()*/
