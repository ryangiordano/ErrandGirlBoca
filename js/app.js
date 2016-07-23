angular.module('ErrandGirlBoca',['ngRoute','ui.bootstrap','ngAnimate'])

.config(function($routeProvider,$locationProvider){
  $routeProvider
  .when('/',{
    templateUrl:'home/home.html',
    controller: 'Main as mainCtrl'
  })
  .when('/services',{
    templateUrl:'services/services.html',
    controller:'ServicesController as servicesCtrl'
  })
  .when('/faq',{
    templateUrl:'faq/faq.html'
  })
  .when('/contact',{
    templateUrl: 'contact/contact.html',
    controller: 'ContactController as contactCtrl'
  })
  .otherwise({redirectTo:'/'});

  $locationProvider.html5Mode({
    enabled: true,
    // requireBase: false
  });
});
