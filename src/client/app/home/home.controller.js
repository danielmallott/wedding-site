/**
 * Created by dmallott on 8/3/2016.
 */
(function() {
  'use strict';

  angular
    .module('app.home')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$rootScope', 'logger'];
  /* @ngInject */
  function HomeController($rootScope, logger) {
    var vm = this;

    vm.title = 'Home';

    activate();

    function activate() {
      $rootScope.$broadcast('loadComplete');
    }
  }
})();
