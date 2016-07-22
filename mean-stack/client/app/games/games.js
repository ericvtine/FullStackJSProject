'use strict';

angular.module('meanStackApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('games', {
        url: '/games',
        template: '<games></games>'
      });
  });
