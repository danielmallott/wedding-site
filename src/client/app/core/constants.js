/* global toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('app.core')
    .constant('toastr', toastr)
    .constant('moment', moment)
    .constant('googleAPIKey', 'AIzaSyAxl7XXn2KMnLm3Gr7NciSuV4ppE9hUPno');
})();
