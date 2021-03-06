/**
 * Created by dmallott on 8/3/2016.
 */
(function() {
  'use strict';

  angular
    .module('app.ceremony')
    .controller('CeremonyController', CeremonyController);

  CeremonyController.$inject = ['$rootScope', 'logger', 'googleAPIKey'];
  /* @ngInject */
  function CeremonyController($rootScope, logger, googleAPIKey) {
    var vm = this;
    vm.googleMapsURL = 'https://maps.googleapis.com/maps/api/js?key=' + googleAPIKey;

    vm.title = 'The Ceremony';

    activate();

    function activate() {
      $rootScope.$broadcast('loadComplete');
    }
  }
})();
