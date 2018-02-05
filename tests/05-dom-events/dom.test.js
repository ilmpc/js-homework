const $ = require('jquery');

describe('dom', () => {


  require('../../tasks/05-dom-events/dom');

  it('#1 contain element with class main-title and text "My personal page" ', () => {

    expect($('.main-title')).not.toBeNull();
    expect($('.main-title').text()).toEqual('My personal page');
    expect(document.body.firstChild.textContent).toEqual('My personal page');
  });

  it('#2 contain text with length > 50', () => {

    expect($('#main-article')).not.toBeNull();
    expect($('#main-article').text().length).toBeGreaterThan(50);
  });

  it('#3 2nd element in options-list should have been removed', () => {

    expect($('.options-list').children().length).toBe(2);
    expect($('.options-list li:nth-child(2)').text()).not.toEqual('Second');
  });

  it('#4 clone element, change its background color and text', () => {

    expect($('.btn').length).toBe(2);
    expect($('.btn')[1].textContent).toEqual('Cancel');
    expect($('.btn')[1].style.backgroundColor).toEqual('red');

  });

  it('#5 all data-state attributes are closed', () => {

    expect($('.orders-list').children()[0].getAttribute('data-state')).toEqual('closed');
    expect($('.orders-list').children()[1].getAttribute('data-state')).toEqual('closed');
    expect($('.orders-list').children()[2].getAttribute('data-state')).toEqual('closed');
  });


});
