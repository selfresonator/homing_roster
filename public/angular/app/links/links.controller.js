(function() {
  'use strict';

  angular
    .module('app')
    .controller('LinksController', LinksController);

    LinksController.$inject = [$log];

    function LinksController('$log') {
      var vm = this;
      vm.title = 'Social';
    }

})();
