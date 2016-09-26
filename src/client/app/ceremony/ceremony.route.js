/**
 * Created by dmallott on 8/3/2016.
 */
(function() {
  'use strict';

  angular
    .module('app.ceremony')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'ceremony',
        config: {
          url: '/ceremony',
          templateUrl: 'app/ceremony/ceremony.html',
          controller: 'CeremonyController',
          controllerAs: 'ceremonyVM',
          title: 'The Ceremony',
          settings: {
            nav: 3,
            content: '<i class="fa fa-lock"></i> The Ceremony'
          }
        }
      }
    ];
  }
})();
