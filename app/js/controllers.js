'use strict';

/* Controllers */

var esApp = angular.module('eithanshavit.controllers', []);

esApp.controller('MainCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
   this.$routeParams = $routeParams;
   $scope.navButtons = [
      { 
         'name': 'about',
         'url': 'about',
         'style': 'nav-about'
      },
      { 
         'name': 'websites',
         'url': 'websites',
         'style': 'nav-websites'
      },
      { 
         'name': 'apps',
         'url': 'apps',
         'style': 'nav-apps'
      },
      { 
         'name': 'hardware',
         'url': 'hardware',
         'style': 'nav-hardware'
      },
      { 
         'name': 'photography',
         'url': 'photography',
         'style': 'nav-photography'
      },
      { 
         'name': 'github',
         'url': 'github',
         'style': 'nav-github'
      },
   ];
      
  }]);

esApp.controller('HwCtrl', [function() {

  }]);
