/**
 * Created by dkmallott on 9/25/2016.
 */
(function() {
  'use strict';

  angular
    .module('app.aboutUs')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'about-us',
        config: {
          url: '/about-us',
          templateUrl: 'app/about-us/about-us.html',
          controller: 'AboutUsController',
          controllerAs: 'aboutUsVM',
          title: 'About Us',
          settings: {
            nav: 2,
            content: '<i class="fa fa-lock"></i> About Us'
          }
        }
      }
    ];
  }
})();
