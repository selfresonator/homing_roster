(function() {
  // 'use strict';

  angular
    .module('links.controller')
    .controller('LinksController', LinksController);

    LinksController.$inject = ['$log'];

    function LinksController($log) {
      var vm = this;
      vm.title = 'Social';
      $log.info('hello');
    }

})();
