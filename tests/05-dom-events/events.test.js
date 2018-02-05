const $ = require('jquery');

describe('events', () => {


  require('../../tasks/05-dom-events/events');

  it('#1 hide text on btn click', () => {

    $('#btn-hide').click();
    expect($('#hide').css('display')).toEqual('none');

  });

  it('#2 hide message by clicking delete btn', () => {


    $('.remove-button')[0].click();

    expect($('.messages').children().eq(0).hasClass('hidden')).toBeTruthy();

    $('.remove-button')[1].click();

    expect($('.messages').children().eq(1).hasClass('hidden')).toBeTruthy();

    $('.remove-button')[2].click();

    expect($('.messages').children().eq(2).hasClass('hidden')).toBeTruthy();

  });

});
