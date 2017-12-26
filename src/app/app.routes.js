(function() {
  'use strict';
  angular.module('app').config(appConfig);
  appConfig.$inject = [
    '$stateProvider',
    '$urlRouterProvider'
  ];

  function appConfig(
    $stateProvider,
    $urlRouterProvider
  ) {
    $stateProvider
      .state('app', {
        url: '/',
        abstract: true,
        template: '<ui-view />'
      })
      .state('app.tracker', {
        url: 'tracker/',
        templateUrl: './tracker.view.html',
        controller: 'trackerController as vm'
      });
    $urlRouterProvider.otherwise(function($injector) {
      $injector.get('$state').go('app.tracker');
    });
  }
})();