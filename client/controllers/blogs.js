var myApp = angular.module('myApp');

myApp.controller('BlogsController', [ '$scope', '$http', '$location', '$routeparams', function($scope, $http, $location, $routeparams){
    console.log('BlogsController loaded...');
    $scope.getBooks = function(){
       $http.get('/api/blogs').success(function(response){
              $scope.blogs = responce;
       });
    }

     $scope.getBooks = function(){
     	var id = $routeParams.id;
       $http.get('/api/blogs/'+id).success(function(response){
              $scope.blog = responce;
       });
    }

     $scope.postBook = function(){
       $http.post('/api/blogs/',$scope.book).success(function(response){
              window.location.href='#/blogs';
       });
    }

}]);
