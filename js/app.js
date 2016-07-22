angular.module('ErrandGirlBoca',['ngRoute','ui.bootstrap','ngAnimate'])

.config(function($routeProvider){
  $routeProvider
  .when('/home',{
    templateUrl:'home/home.html',
    controller: 'Main as mainCtrl'
  })
  .when('/services',{
    templateUrl:'services/services.html',
    controller:'ServicesController as servicesCtrl'
  })
  .when('/faq',{
    templateUrl:'faq/faq.html',
    controller:'FaqController as faqCtrl'
  })
  .when('/contact',{
    templateUrl: 'contact/contact.html',
    controller: 'ContactController as contactCtrl'
  })
  .otherwise({redirectTo:'/home'});
});
