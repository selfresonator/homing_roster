(function() {
  'use strict';

  angular
    .module('navbar.controller')
    .controller('NavController', NavController)

    NavController.$inject = ['$log'];

    function NavController($log) {
      var vm = this;
      vm.title = 'Nav';
      $log.info('hello from nav');
    }

})();
