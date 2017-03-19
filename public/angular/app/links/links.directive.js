(function() {
  'use strict';

  angular
    .module('links.controller')
    .directive('LinksDirective', linksDirective);

    function linksDirective() {
      var directive = {
        restrict: 'EA',
        template: '<span>D3 YO!</span>',
        link: link
      }

      return directive

      function link(scope,elem,attrs) {
        // do nothing
      }
    }
}());
