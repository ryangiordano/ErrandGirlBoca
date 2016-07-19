angular.module('ErrandGirlBoca')
.directive('navbar', function(){
  return{
    restrict:'E',
    controller: "NavBarCtrl",
    templateUrl:'partials/nav.html'
  };
})
.directive('footerBottom', function(){
  return{
    restrict:'E',
    templateUrl:'partials/footer.html'
  };
});
