/**
 * Created by dkmallott on 9/25/2016.
 */
(function() {
  'use strict';

  angular
    .module('app.weddingParty')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'wedding-party',
        config: {
          url: '/wedding-party',
          templateUrl: 'app/wedding-party/wedding-party.html',
          controller: 'WeddingPartyController',
          controllerAs: 'weddingPartyVM',
          title: 'Wedding Party',
          settings: {
            nav: 4,
            content: '<i class="fa fa-lock"></i> Wedding Party'
          }
        }
      }
    ];
  }
})();
