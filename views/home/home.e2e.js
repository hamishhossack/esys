'use strict';

describe('home route', function () {

  beforeEach(function () {
    browser.get('/');
  });

  it('logo is displayed', function() {
    expect(element(by.css('.logo')).isPresent()).toBe(true);
  });

  it('should have a show table button', function () {
    expect(element.all(by.css('button.tableToggle')).first().getText()).toBe('Show Table');
  });

  it('should show table on click', function () {
    element(by.css('button.tableToggle')).click();
    expect(element('table.customerTable').css('display')()).toBe('table');
  });

});
