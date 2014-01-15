'use strict';

/* Directives */


angular.module('eithanshavit.directives', [])
   .directive('imagesLoaded', function() {
     return function(scope, element, attrs) {
         function onProgress( imgLoad, image ) {
           // change class if the image is loaded or broken
           image.img.parentNode.parentNode.className = image.isLoaded ? '' : 'is-broken';
         console.log("dddd");
         }
       angular.element(element).css('color','blue');
       if (scope.$last){
         
         var container = $('.images-loaded-container');
         var imgLoad = imagesLoaded( container );
         imgLoad.on( 'progress', onProgress );

         // triggered after each item is loaded

       }
   };
});
