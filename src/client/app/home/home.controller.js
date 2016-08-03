/**
 * Created by dmallott on 8/3/2016.
 */
(function() {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function HomeController($q, dataservice, logger) {
    var vm = this;

    vm.title = 'Home';

    activate();

    function activate() {

    }
  }
})();
