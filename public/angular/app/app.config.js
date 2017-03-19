(function () {
  'use strict';

  angular
    .module('app.config')
    .config(config).config(formProvider);

  config.$inject = ['$locationProvider'];

  function config($locationProvider) {
    //$locationProvider.html5Mode(true);
    //$locationProvider.hashPrefix( '!' );
  }

  formProvider.$inject = ['$httpProvider'];

  function formProvider($httpProvider) {
    // Intercept POST requests, convert to standard form encoding for ease
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
    $httpProvider.defaults.headers.put["Content-Type"] = "application/x-www-form-urlencoded";
    $httpProvider.defaults.transformRequest.unshift(function (data, headersGetter) {
      var key, result = [];

      if (typeof data === "string")
        return data;

      for (key in data) {
        if (data.hasOwnProperty(key))
          result.push(encodeURIComponent(key) + "=" + encodeURIComponent(data[key]));
      }
      return result.join("&");
    });
  }

})();
