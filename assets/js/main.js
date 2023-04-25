$(document).ready(function () {

  /*
    function goToByScroll(id){
      $('html,body').animate({
        scrollTop: $("#"+id).offset().top},'slow');
      }*/

  //collapse mobile visibility on click
  $("#servicios-collapse").click(function (e) {
    e.preventDefault();
    if ($('.mob2').css('opacity') == '0')
      $('.mob2').css('opacity', '100');
    else
      $('.mob2').css('opacity', '0');
  });
  //collapse 
  $("#servicios-collapse").click(function (e) {
    e.preventDefault();
    $button = $(this);
    //getting the next element
    $content = $('#a02b_servicios-collapse');
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $content.slideToggle(700, function () {
      //execute this after slideToggle is done
      //change text of header based on visibility of content div
      $button.text(function () {
        //change text based on condition
        return $content.is(":visible") ? "Cerrar" : "Leer más";
      });
    });

  });

  //menu responsive
  var isActive = false;
  var isClicked = false;

  $('.resmenu').on('click', function () {
    if (isActive) {
      $(this).removeClass('active');
      $('body').removeClass('menu-open');
      $('.bar').removeClass('animate');

    } else {
      $(this).addClass('active');
      $('body').addClass('menu-open');
      $('.bar').addClass('animate');

    }

    $('nav#responsive_menu ul li a').click(function () {
      if (isClicked) {
        $('body').removeClass('menu-open');
        //$('.resmenu').removeClass('active');
        $('.bar').removeClass('animate');
      } else {
        $('body').addClass('menu-open');
        //$('.resmenu').addClass('active');
        $('.bar').addClass('animate');
      }
    });

    isActive = !isActive;
    isClicked = !isClicked;
  });
  /*
    (function () {
      $('.resmenu').on('click', function() {
        $('.bar').toggleClass('animate');
      })
    })();*/
  /*
    $(window).scroll(function() {
      if ($(document).scrollTop() > 74) {
        $('nav#responsive_menu').css('top', '74');
      } else {
        $('nav#responsive_menu').css('top', '0');
      }
    });*/

  //active class lower_nav
  $('ul#lower_nav a li.menu').click(function () {
    $('ul#lower_nav a li.menu').removeClass('active');
    $(this).addClass('active');
  });

  //smoothscroll plugin

  var scroll = new SmoothScroll('a[href*="#"]', {
    ignore: '[collapsebutton][resmenu]',
    speed: 1000,
    offset: 60,
    easing: 'easeInOutCubic'
  });

  //sticky NAV
  $(function () {
    var sticky_navigation_offset_top = $('nav#nav').offset().top;
    var sticky_navigation = function () {
      var scroll_top = $(window).scrollTop();

      if (scroll_top > sticky_navigation_offset_top) {
        $('nav#nav').css({ 'position': 'fixed', 'top': 0, 'left': 0 });
      } else {
        $('nav#nav').css({ 'position': 'relative' });
      }
    };
    sticky_navigation();
    $(window).scroll(function () {
      sticky_navigation();
    });
  });


  $("#form1").validate({
    errorLabelContainer: $("#error"),
  });
  $("#name").rules("add", {
    required: true,
    minlength: 2,
    messages: {
      required: "<h4>* Nombre: El campo nombre es obligatorio</h4>",
      minlength: "<h4>Nombre: favor completar el nombre correctamente</h4>"
    }
  });
  $("#email").rules("add", {
    required: true,
    email: true,
    messages: {
      required: "<h4>* Email: El campo email es obligatorio</h4>"
    }
  });
  $("#telephone").rules("add", {
    required: true,
    minlength: 8,
    messages: {
      required: "<h4>* Teléfono: Debe completar el campo teléfono</h4>",
      minlength: "<h4>* Teléfono: Debe completar por lo menos 8 números</h4>"
    }
  });
  $("#message").rules("add", {
    required: true,
    messages: {
      required: "<h4>* Mensaje: Debe completar el mensaje</h4>"
    }
  });
  $('#buttonform').click(function () {

    $("#form1").submit();
  });
  /*
  $.validator.setDefaults({
    submitHandler: function() {
      $("#form1").submit();
    }
  });*/



  //carousel for IMAC

  //responsive code
  $('.jcarousel-imac').on('jcarousel:reload jcarousel:create', function () {
    var element = $(this),
      width = element.innerWidth();

    // This shows 1 item at a time.
    // Divide `width` to the number of items you want to display,
    // eg. `width = width / 3` to display 3 items at a time.
    element.jcarousel('items').css('width', width + 'px');
  });
  // circular is loop
  $('.jcarousel-imac').jcarousel({
    wrap: 'circular'
  });
  //this is autoplay
  $('.jcarousel-imac').jcarouselAutoscroll({
    interval: 2000,
    target: '+=1',
    autostart: true
  });

  $('.jcarousel-control-prev-imac')
    .on('jcarouselcontrol:active', function () {
      $(this).removeClass('inactive');
    })
    .on('jcarouselcontrol:inactive', function () {
      $(this).addClass('inactive');
    })
    .jcarouselControl({
      target: '-=1'
    });

  $('.jcarousel-control-next-imac')
    .on('jcarouselcontrol:active', function () {
      $(this).removeClass('inactive');
    })
    .on('jcarouselcontrol:inactive', function () {
      $(this).addClass('inactive');
    })
    .jcarouselControl({
      target: '+=1'
    });
  //these are the dots
  $('.jcarousel-pagination-imac')
    .on('jcarouselpagination:active', 'a', function () {
      $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function () {
      $(this).removeClass('active');
    })
    .jcarouselPagination();

  //carousel for header
  /*
    $('.jcarousel').jcarousel({
        wrap: 'circular'
    });
    $('.jcarousel').jcarouselAutoscroll({
        interval: 3000,
        target: '+=1',
        autostart: true
    });*/
});

//carousel for header
(function ($, Modernizr) {
  $(function () {



    $('.jcarousel').on('jcarousel:reload jcarousel:create', function () {
      var element = $(this),
        width = element.innerWidth();
      element.jcarousel('items').css('width', width + 'px');
    });


    $('.jcarousel').jcarousel({
      wrap: 'circular'
    });
    $('.jcarousel').jcarouselAutoscroll({
      interval: 2500,
      target: '+=1',
      autostart: true
    });

    $('.jcarousel-control-prev').jcarouselControl({
      target: '-=1'
    });

    $('.jcarousel-control-next').jcarouselControl({
      target: '+=1'
    });
  });
})(jQuery, Modernizr);