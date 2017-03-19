(function() {
  'use strict';

  angular
    .module('links.controller')
    .controller('LinksController', LinksController)
    .directive('linksDirective', LinksDirective);

    LinksController.$inject = ['$log'];

    function LinksController($log) {
      var vm = this;
      vm.title = 'Social';
      $log.info('hello');
    }

    function LinksDirective() {
      var directive = {
        link: link,
        restrict: 'EA',
        template: '<div style="font-family: Allerta">D3 YO!</div>',
      }

      return directive

      function link(scope,elem,attrs) {
        console.log(elem);
      }
    }

})();
