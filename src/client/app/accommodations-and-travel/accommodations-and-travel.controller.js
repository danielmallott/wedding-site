/**
 * Created by dkmallott on 9/25/2016.
 */
(function() {
  'use strict';

  angular
    .module('app.accommodationsAndTravel')
    .controller('AccommodationsAndTravelController', AccommodationsAndTravelController);

  AccommodationsAndTravelController.$inject = ['$q', 'dataservice', 'logger', 'googleAPIKey'];
  /* @ngInject */
  function AccommodationsAndTravelController($q, dataservice, logger, googleAPIKey) {
    var vm = this;
    vm.googleMapsURL = 'https://maps.googleapis.com/maps/api/js?key=' + googleAPIKey;

    vm.title = 'Accommodations And Travel';

    activate();

    function activate() {

    }
  }
})();
