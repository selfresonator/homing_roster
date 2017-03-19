(function() {
  'use strict';

  angular
  .module('leet.routes')
  .config(config);

  config.$inject = ['$routeProvider', '$locationProvider', 'Constants'];

  function config($routeProvider, $locationProvider, Constants) {

    $routeProvider.when('/', {
      controller: 'IndexController',
      controllerAs: 'vm',
      templateUrl: Constants.indexPath
    }).when('/', {
      controller: 'LinksController',
      controllerAs: 'vm',
      templateUrl: Constants.linksPath
    });
    
  }

}());
