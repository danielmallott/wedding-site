/**
 * Created by dmallott on 8/3/2016.
 */
/* jshint -W117, -W030 */
describe('ceremony routes', function() {
  describe('state', function() {
    var view = 'app/ceremony/ceremony.html';

    beforeEach(function() {
      module('app.ceremony', bard.fakeToastr);
      bard.inject('$httpBackend', '$location', '$rootScope', '$state', '$templateCache');
    });

    beforeEach(function() {
      $templateCache.put(view, '');
    });

    it('should map state admin to url /ceremony ', function() {
      expect($state.href('ceremony', {})).to.equal('/ceremony');
    });

    it('should map /ceremony route to admin View template', function() {
      expect($state.get('ceremony').templateUrl).to.equal(view);
    });

    it('of admin should work with $state.go', function() {
      $state.go('ceremony');
      $rootScope.$apply();
      expect($state.is('ceremony'));
    });
  });
});
