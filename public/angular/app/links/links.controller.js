(function() {
  'use strict';

  angular
    .module('links.controller')
    .controller('LinksController', LinksController)

    LinksController.$inject = ['$log'];

    function LinksController($log, $event) {
      var vm = this;
      vm.hovered = '';
      vm.color = '';
      vm.bg = true;
      vm.email = false;
      vm.github = false;
      vm.soundcloud = false;
      vm.twitter = false;
      vm.linkedin = false;
      vm.instagram = false;
      vm.car = false;
      vm.about = false;

      vm.githubhv = githubhv;
      vm.twitterhv = twitterhv;
      vm.soundcloudhv = soundcloudhv;
      vm.linkedinhv = linkedinhv;
      vm.carhv = carhv;
      vm.emailhv = emailhv;
      vm.instagramhv = instagramhv;
      vm.altAbout = altAbout;
      vm.closeAbout = closeAbout;

      function githubhv() {
          vm.github = true;
          vm.color = 'whitesmoke';
          vm.bg = false;
      }
      function twitterhv() {
          vm.twitter = true;
          vm.color = '#00aced';
          vm.bg = false;
      }
      function soundcloudhv() {
          vm.soundcloud = true;
          vm.color = 'blanchedalmond';
          vm.bg = false;
      }
      function linkedinhv() {
          vm.linkedin = true;
          vm.color = 'palegreen';
          vm.bg = false;
      }
      function carhv() {
          vm.car = true;
          vm.color = 'gold';
          vm.bg = false;
      }
      function instagramhv() {
          vm.instagram = true;
          vm.color = 'cornsilk';
          vm.bg = false;
      }
      function emailhv() {
          vm.email = true;
          vm.bg = false;
      }
      function altAbout($event) {
          $event.stopPropagation();
          vm.about = true;
      }
      function closeAbout() {
          vm.about = false;
      }
    //   linkedinhv();
      $log.info('hello');
    }

})();
