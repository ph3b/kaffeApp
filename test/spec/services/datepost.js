'use strict';

describe('Service: datepost', function () {

  // load the service's module
  beforeEach(module('kaffeAppApp'));

  // instantiate service
  var datepost;
  beforeEach(inject(function (_datepost_) {
    datepost = _datepost_;
  }));

  it('should do something', function () {
    expect(!!datepost).toBe(true);
  });

});
