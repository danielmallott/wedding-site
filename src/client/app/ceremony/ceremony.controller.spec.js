/**
 * Created by dmallott on 8/3/2016.
 */
/* jshint -W117, -W030 */
describe('CeremonyController', function() {
  var controller;

  beforeEach(function() {
    bard.appModule('app.ceremony');
    bard.inject('$controller', '$log', '$rootScope');
  });

  beforeEach(function() {
    controller = $controller('CeremonyController');
    $rootScope.$apply();
  });

  bard.verifyNoOutstandingHttpRequests();

  describe('Ceremony controller', function() {
    it('should be created successfully', function() {
      expect(controller).to.be.defined;
    });

    describe('after activate', function() {
      it('should have title of The Ceremony', function() {
        expect(controller.title).to.equal('The Ceremony');
      });
    });
  });
});
