angular.module('app', [
    'ngRoute',
    'ngResource',
    'ui.router',
    'restangular',
    'ui-rangeSlider',
    'ngSanitize',
    'app.front',
    'app.search',
    'app.details',
    'templates-app'])

    .config(function ($stateProvider, $urlRouterProvider, RestangularProvider) {
        $urlRouterProvider.otherwise('/');
        RestangularProvider.setBaseUrl('/api/v1');
    })

    .run(function($rootScope, $state){
        $rootScope.$state = $state;
    })

    .controller('AppController', function($scope, $routeParams) {


    })
;