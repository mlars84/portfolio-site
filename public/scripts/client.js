const myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

  myApp.config(['$routeProvider', '$locationProvider', '$mdThemingProvider', function($routeProvider, $locationProvider, $mdThemingProvider) {
    $locationProvider.html5Mode(true);

    //tab palette for angular material
    $mdThemingProvider
      .theme('default')
      .accentPalette('orange');

    $routeProvider
    .when('/', {
      templateUrl: '/views/pages/home.html',
      controller: 'ProfileController as pc'
    }).when('/work', {
      templateUrl: '/views/pages/work.html',
      controller: 'RepoController as rc'
    }).when('/contact', {
      templateUrl: '/views/pages/contact.html',
      controller: 'ProfileController as pc'
    }).otherwise({redirectTo: '/'});

  },
  ]);
