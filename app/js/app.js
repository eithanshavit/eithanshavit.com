'use strict';


// Declare app level module which depends on filters, and services
var appModule = angular.module('eithanshavit', [
  'ngRoute',
  'ngAnimate',
  'eithanshavit.filters',
  'eithanshavit.services',
  'eithanshavit.directives',
  'eithanshavit.controllers'
]);

appModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:categoryId', {
      templateUrl: function(params) {
         if (params.categoryId == 'photography' || params.categoryId == 'github' ) {
            return "partials/links.html";
         }
         return "partials/" + params.categoryId + ".html";
      },
  });
  $routeProvider.otherwise({redirectTo: '/about'});
}]);
