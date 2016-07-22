//controller for the book list
angular.module("ErrandGirlBoca").controller('Main', function($scope){

});
//add a book to the list
angular.module("ErrandGirlBoca").controller('NavBarCtrl', function($scope){
  $scope.buttonVisible = false;
  $scope.openNav = function() {
      document.getElementById("sidenav").style.width = "310px";
      $scope.buttonVisible = true;

  }
  $scope.closeNav = function() {
      document.getElementById("sidenav").style.width = "0";
      $scope.buttonVisible = false;
  }
});
angular.module("ErrandGirlBoca").controller('ContactController',function($scope,$http){

        this.formData = {};

        this.processForm = function(){
            $http({
                method: 'POST',
                url : '/contact/sendMail.php',
                data : $.param(this.formData),//pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded'}// set the headers so angular passing info as form data (not request payload)
            })
            .success(function(data){
               console.log(data);
               if(!data.success){
                //bind errors to error variables
                this.errorName = data.errors.name;
                this.errorPhone = data.errors.phone;
                this.errorMail = data.errors.email;
                this.errorText = data.errors.text;
               }else{
                this.message = data.message;
               }

            })
            var contactForm = document.getElementById('contactForm');
            TweenMax.to(contactForm, .5, {opacity:0, scale:.85});
        }//end process form




        });
angular.module("ErrandGirlBoca").controller('ServicesController', function($scope, $anchorScroll,$timeout,$location){


  $timeout(function() {
    $anchorScroll.yOffset = 250;
    $anchorScroll('myAnchor');
  });
});
