angular.module('ErrandGirlBoca',['ui.router','ui.bootstrap','ngAnimate'])

.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
  .state('home',{
    url:'/',
    templateUrl:'home/home.html',
    controller: 'Main as mainCtrl'
  })
  .state('services',{
    url:'/services',
    templateUrl:'services/services.html'
  })

  .state('contact',{
    url:'/contact',
    templateUrl: 'contact/contact.html',
    controller: 'ContactController as contactCtrl'
  });
  $urlRouterProvider.otherwise('/');
})
