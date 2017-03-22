(function() {
  'use strict';

  angular
    .module('links.controller')
    .controller('LinksController', LinksController)
    .directive('linksDirective', LinksDirective);

    LinksController.$inject = ['$log'];

    function LinksController($log) {
      var vm = this;
      vm.bg = true;
      vm.email = false;
      vm.github = false;
      vm.soundcloud = false;
      vm.twitter = false;
      vm.linkedin = false;
      vm.drive = false;

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


// vm.data = [
//   {
//     name: 'github',
//     url: 'https://github.com/selfresonator',
//     class: 'fa-github'
//   },
//   {
//     name: 'twitter',
//     url: 'https://twitter.com/_selfresonator',
//     class: 'fa-twiiter'
//   },
//   {
//     name: 'soundcloud',
//     url: 'https://soundcloud.com/selfresonator',
//     class: ''
//   },
//   {
//     name: 'instagram',
//     url: '',
//     class: ''
//   },
//   {
//     name: 'linkedin',
//     url: 'https://www.linkedin.com/in/ajfarleyengineer/',
//     class: ''
//   },
//   {
//     name: 'car',
//     url: '',
//     class: ''
//   },
// ];
