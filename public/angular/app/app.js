(function() {
'use strict';

  angular
    .module('app',[
      'app.constants',
      'app.routes',
      'app.config',
      'links.controller'
    ]);

    angular.module('app.config', []);
    angular.module('app.routes', ['app.constants', 'ngRoute']);
    angular.module('links.controller', []);

})();
