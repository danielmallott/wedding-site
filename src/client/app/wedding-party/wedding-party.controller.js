/**
 * Created by dkmallott on 9/25/2016.
 */
(function() {
  'use strict';

  angular
    .module('app.weddingParty')
    .controller('WeddingPartyController', WeddingPartyController);

  WeddingPartyController.$inject = ['$rootScope', 'logger'];
  /* @ngInject */
  function WeddingPartyController($rootScope, logger) {
    var vm = this;

    vm.title = 'Wedding Party';

    activate();

    function activate() {
      $rootScope.$broadcast('loadComplete');
    }
  }
})();
