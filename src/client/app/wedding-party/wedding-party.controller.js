/**
 * Created by dkmallott on 9/25/2016.
 */
(function() {
  'use strict';

  angular
    .module('app.weddingParty')
    .controller('WeddingPartyController', WeddingPartyController);

  WeddingPartyController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function WeddingPartyController($q, dataservice, logger) {
    var vm = this;

    vm.title = 'Wedding Party';

    activate();

    function activate() {

    }
  }
})();
