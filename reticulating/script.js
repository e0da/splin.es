(function () {

  'use strict';

  var $div, $span, $window;

  function renderDots() {
    var phase, phases;
    phases = [ '.  ', '.. ', '...' ];
    phase  = 0;
    window.setInterval(function () {
      phase = phase > (phases.length-2) ? 0 : phase+1;
      $span.text(phases[phase]);
    }, 500);
  }

  function keepAligned() {
    $div.addClass('absolute');
    $(window).resize(function () {
      $div.css({
        'top':  $window.height()/2.5 - $div.height()/2 + 'px',
        'left': $window.width()/2 - $div.width()/2 + 'px'
      });
    }).resize(); // run immediately
  }

  function renderThrobber() {
    new Throbber({ size:30, rotationspeed: 0}).appendTo($div.get(0)).start();
  }

  function cacheQueries() {
    $window = $(window);
    $div    = $('div');
    $span   = $('span');
  }

  function reveal() {
    $div.animate({ opacity: 1 });
  }

  // onready
  $(function () {
    cacheQueries();
    renderDots();
    renderThrobber();
    keepAligned();
    reveal();
  });
}());
