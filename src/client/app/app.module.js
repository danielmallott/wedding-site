(function() {
  'use strict';

  var app = angular.module('app', [
    'ApplicationInsightsModule',
    'app.core',
    'app.widgets',
    'app.ceremony',
    'app.accommodationsAndTravel',
    'app.aboutUs',
    'app.weddingParty',
    'app.home',
    'app.layout'
  ]);

  app.config(function(applicationInsightsServiceProvider) {
    var options = {
      applicationName:'wedding-site',
      autoPageViewTracking: true,
      autoLogTracking: true,
      autoExceptionTracking: true,
      sessionInactivityTimeout: 1800000
    };
    applicationInsightsServiceProvider.configure('92af980f-0a3a-4b21-98ab-7dd6295bf6ca', options );
  });

})();
