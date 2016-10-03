/**
 * Created by dkmallott on 9/25/2016.
 */
(function() {
  'use strict';

  angular
    .module('app.aboutUs')
    .controller('AboutUsController', AboutUsController);

  AboutUsController.$inject = ['$rootScope', 'logger'];
  /* @ngInject */
  function AboutUsController($rootScope, logger) {
    var vm = this;

    vm.title = 'About Us';

    vm.interval = 3000;
    vm.activeSlide = 0;
    vm.slides= [
      {image: '/images/Engagement.jpg'},
      {image: '/images/Christmas2015.jpg'},
      {image: '/images/EileensBirthday.jpg'},
      {image: '/images/HarrisonAndSarasWedding1.jpg'},
      {image: '/images/RyansBirthday.jpg'},
      //{image: '/images/JimBeamDistillery.jpg'},
      {image: '/images/HarrisonAndSarasWedding2.jpg'},
      {image: '/images/DanAndEileen.jpg'}
    ];

    activate();

    function activate() {
      $rootScope.$broadcast('loadComplete');
    }
  }
})();
