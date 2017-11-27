var myApp = angular.module('myApp', ['ngRoute']);

myApp.config('$routeProvider', function($routeProvider){ 
	$routeProvider.when('/', {
	    controller:'BlogsController',
	    templateUrl: 'views/blogs.html'
    })
    .when('/books', {
        controller:'BlogsController',
	    templateUrl: 'views/blogs.html'
    })
    .when('/books/details/:id', {
        controller:'BlogsController',
	    templateUrl: 'views/blog_details.html'
    })
   .when('/books/add', {
        controller:'BlogsController',
	    templateUrl: 'views/add_blog.html'
    })
    .otherwise({
	    redirectTo: '/'
    });
});