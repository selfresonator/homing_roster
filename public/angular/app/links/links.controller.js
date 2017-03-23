(function() {
  'use strict';

  angular
    .module('links.controller')
    .controller('LinksController', LinksController)

    LinksController.$inject = ['$log'];

    function LinksController($log) {
      var vm = this;
      vm.hovered = '';
      vm.color = '';
      vm.bg = true;
      vm.email = false;
      vm.github = false;
      vm.soundcloud = false;
      vm.twitter = false;
      vm.linkedin = false;
      vm.car = false;

      vm.githubhv = githubhv;
      vm.twitterhv = twitterhv;
      vm.soundcloudhv = soundcloudhv;
      vm.linkedinhv = linkedinhv;
      vm.carhv = carhv;
      vm.emailhv = emailhv;

      function githubhv() {
          vm.github = true;
          vm.color = 'red';
          vm.bg = false;
      }
      function twitterhv() {
          vm.twitter = true;
          vm.color = '#00aced';
          vm.bg = false;
      }
      function soundcloudhv() {
          vm.soundcloud = true;
          vm.color = '#ff3a00';
          vm.bg = false;
      }
      function linkedinhv() {
          vm.linkedin = true;
          vm.color = 'green';
          vm.bg = false;
      }
      function carhv() {
          vm.car = true;
          vm.color = 'gold';
          vm.bg = false;
      }
      function emailhv() {
          vm.email = true;
          vm.color = 'tan';
          vm.bg = false;
      }

      $log.info('hello');
    }

})();
