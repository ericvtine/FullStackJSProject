'use strict';

angular.module('meanStackApp.auth', ['meanStackApp.constants', 'meanStackApp.util', 'ngCookies',
    'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
