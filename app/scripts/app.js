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
      .otherwise({
        redirectTo: '/'
      });
  });
