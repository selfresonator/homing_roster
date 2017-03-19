(function() {
  'use strict';

  angular
    .module('app.routes')
    .config(config);

  config.$inject = ['$routeProvider', '$locationProvider', 'Constants'];

  function config($routeProvider, $locationProvider, Constants) {

    $routeProvider.when('/', {
      templateUrl: Constants.linksPath + '/links.view.html',
      controller: 'LinksController',
      controllerAs: 'vm',
    });

  }

}());
