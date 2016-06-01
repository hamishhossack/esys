'use strict';

describe('home route', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('logo is displayed', function() {
    expect(element(by.css('.logo')).isPresent()).toBe(true);
  });

  it('should have a show table button', function () {
    expect(element.all(by.css('div.tableToggle')).first().getText()).toBe('Show Table');
  });

  it('should show table on click', function () {
    element(by.css('div.tableToggle')).click();
    expect(element.all(by.css('div.tableToggle')).isPresent()).toBe(true);
  });

});
