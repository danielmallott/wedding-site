/**
 * Created by dkmallott on 9/25/2016.
 */
(function() {
  'use strict';

  angular
    .module('app.aboutUs')
    .controller('AboutUsController', AboutUsController);

  AboutUsController.$inject = ['$q', 'dataservice', 'logger'];
  /* @ngInject */
  function AboutUsController($q, dataservice, logger) {
    var vm = this;

    vm.title = 'About Us';

    vm.interval = 3000;
    vm.activeSlide = 0;
    vm.slides= [
      {image: '/src/client/images/Engagement.jpg'},
      {image: '/src/client/images/Christmas2015.jpg'},
      {image: '/src/client/images/EileensBirthday.jpg'},
      {image: '/src/client/images/HarrisonAndSarasWedding1.jpg'},
      {image: '/src/client/images/RyansBirthday.jpg'},
      //{image: '/src/client/images/JimBeamDistillery.jpg'},
      {image: '/src/client/images/HarrisonAndSarasWedding2.jpg'},
      {image: '/src/client/images/DanAndEileen.jpg'}
    ];

    activate();

    function activate() {

    }
  }
})();
