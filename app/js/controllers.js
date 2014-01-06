'use strict';

/* Controllers */

var esApp = angular.module('eithanshavit.controllers', []);

esApp.controller('MainCtrl', ['$route', '$scope', '$http', '$routeParams', function($route, $scope, $http, $routeParams){
   this.$routeParams = $routeParams;
   this.$route = $route;
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
   $scope.images = {
      "final" : [
         { "url" : "img/vc/vc_front.jpg"},
         { "url" : "img/vc/vc_frontclose.jpg"},
         { "url" : "img/vc/vc_frontclose2.jpg"},
      ],
      "hardware" : [
         { "url" : "img/vc/vc_layout.png"},
         { "url" : "img/vc/vc_schematics.png"},
         { "url" : "img/vc/vc_pcb.jpg"},
         { "url" : "img/vc/vc_assembled.jpg"},
         { "url" : "img/vc/vc_witharduino.jpg"},
      ],
      "plastic" : [
         { "url" : "img/vc/vc_wordpanel.jpg"},
         { "url" : "img/vc/vc_holepanel.jpg"},
         { "url" : "img/vc/vc_cutout.jpg"},
      ],
      "craft" : [
         { "url" : "img/vc/vc_leds.jpg"},
         { "url" : "img/vc/vc_finalback.jpg"},
      ],
   }
   $scope.isButtonActive = function(buttonName){
      return buttonName == $routeParams['categoryId'];
   }
  }]);
