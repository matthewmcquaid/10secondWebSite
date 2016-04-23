var theRoute = require('../../../../../server/routes/example/index'),
  sinon = require('sinon'),
  should = require('should');

describe("routes/example/index", function () {

  var fakeRequest, fakeResponse;

  beforeEach(function () {

    fakeRequest = {};

    fakeResponse = {
      json: sinon.stub()
    };

  });

  describe("In General", function () {

    beforeEach(function () {

      theRoute(fakeRequest, fakeResponse);

    });

    it("should call json", function () {

      fakeResponse.json.called.should.equal(true);

    });

    it("should set message to G'Day Mate, whatcha Know", function () {

      fakeResponse.json.firstCall.args[0].message.should.equal("G'Day Mate, whatcha Know");

    });

  });

});
