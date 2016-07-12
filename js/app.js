angular.module('ErrandGirlBoca',['ui.router','ui.bootstrap'])

.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state('home',{
    url:'/',
    templateUrl:'home/home.html',
    controller: 'Main as mainCtrl'
  })
  .state('services',{
    url:'/services',
    templateUrl:'services/services.html',
    controller: 'Services as ServicesCtrl'
  })
  .state('pricing',{
    url:'/pricing',
    templateUrl:'pricing/pricing.html',
    controller: 'PricingCtrl as pricingCtrl'
  })
  .state('contact',{
    url:'/contact',
    templateUrl: 'contact/contact.html',
    controller: 'ContactCtrl as contactCtrl'
  });
  $urlRouterProvider.otherwise('/');
})
