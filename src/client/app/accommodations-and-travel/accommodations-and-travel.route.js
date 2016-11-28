/**
 * Created by dkmallott on 9/25/2016.
 */
(function() {
  'use strict';

  angular
    .module('app.accommodationsAndTravel')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'accommodations-and-other-details',
        config: {
          url: '/accommodations-and-other-details',
          templateUrl: 'app/accommodations-and-travel/accommodations-and-travel.html',
          controller: 'AccommodationsAndTravelController',
          controllerAs: 'accommodationsAndTravelVM',
          title: 'Accommodations And Other Details',
          settings: {
            nav: 5,
            content: '<i class="fa fa-lock"></i> Accommodations And Other Details'
          }
        }
      }
    ];
  }
})();
