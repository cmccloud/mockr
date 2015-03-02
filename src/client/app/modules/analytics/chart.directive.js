;(function(){
  'use strict';

  angular
    .module('app.modules')
    .directive('charts', charts);

  /* @ngInject */
  function charts() {

    return {
      templateUrl: '/html/modules/analytics/chart.directive.html',
      restrict: 'E',
      scope: true,
      transclude: true,
      controller: 'AnalyticsController',
      controllerAs: 'vm',
      link: function(scope, element, attrs) {
      }
    };

  }
}).call(this);

//refactor returned object

//link
  //insert logic to render chart