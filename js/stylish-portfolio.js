(function($) {
  "use strict"; // Start of use strict

  // Closes the sidebar menu
  $(".menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    $(this).toggleClass("active");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('#sidebar-wrapper .js-scroll-trigger').click(function() {
    $("#sidebar-wrapper").removeClass("active");
    $(".menu-toggle").removeClass("active");
    $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  });

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

})(jQuery); // End of use strict

// Disable Google Maps scrolling
// See http://stackoverflow.com/a/25904582/1607849
// Disable scroll zooming and bind back the click event
var onMapMouseleaveHandler = function(event) {
  var that = $(this);
  that.on('click', onMapClickHandler);
  that.off('mouseleave', onMapMouseleaveHandler);
  that.find('iframe').css("pointer-events", "none");
}
var onMapClickHandler = function(event) {
  var that = $(this);
  // Disable the click handler until the user leaves the map area
  that.off('click', onMapClickHandler);
  // Enable scrolling zoom
  that.find('iframe').css("pointer-events", "auto");
  // Handle the mouse leave event
  that.on('mouseleave', onMapMouseleaveHandler);
}
// Enable map zooming with mouse scroll when the user clicks the map
$('.map').on('click', onMapClickHandler);



// Portfolio

var galeria = [];
webs = [{
  img: './img/graphicDesign/webs/1.jpg',
  url: "https://helenaeyimi.com/"
}, {
  img: './img/graphicDesign/webs/2.jpg',
  url: "http://lonwave.com//"
}, {
  img: './img/graphicDesign/webs/3.jpg',
  url: "https://saludmentalperinatal.es/"
}, {
  img: './img/graphicDesign/webs/4.jpg',
  url: "https://pablotsdaw.github.io/ProyectoBootstrap/"
}, {
  img: './img/graphicDesign/webs/5.jpg',
  url: "http://yourtravelpic.com/"
}, {
  img: './img/graphicDesign/webs/6.jpg',
  url: "https://terramater.es/"
}, {
  img: './img/graphicDesign/webs/7.jpg',
  url: "https://www.pabloprieto.es/"
}];

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
};


function galeriaLogos() {
  galeria = [];
  for (var i = 1; i <= 10; i++) {
    galeria.push('./img/graphicDesign/logos/' + i + '.jpg')
  };
  shuffle(galeria);
  creaCards();
};

function galeriaCarteles() {
  galeria = [];
  for (var i = 1; i <= 6; i++) {
    galeria.push('./img/graphicDesign/Carteles/' + i + '.jpg')
  };
  shuffle(galeria);
  creaCards();
};

function galeriaWeb() {
  galeria = [];
  for (var i = 1; i <= 5; i++) {
    galeria.push('./img/graphicDesign/webs/' + i + '.jpg');
  };
  shuffle(galeria);
  creaCardsWebs();
};

function galeriaTarjetas() {
  galeria = [];
  for (var i = 1; i <= 10; i++) {
    galeria.push('./img/graphicDesign/tarjetas/' + i + '.jpg')
  };
  shuffle(galeria);
  creaCards();
};

galeriaLogos();

function creaCards() {
  $('.card-columns').empty();
  for (var i = 0; i <= galeria.length - 1; i++) {
    $('.card-columns').append(
      '<div class="card">' +
      '<img class="card-img-top" src="' + galeria[i] + '" alt="Card image cap" onclick="ampliar(galeria[' + i + '])"/>' +
      '</div>'
    );
  }
}

function creaCardsWebs() {
  $('.card-columns').empty();
  console.log(webs[0].img);
  for (var i = 0; i <= 6; i++) {
    $('.card-columns').append(
      '<div class="card">' +
      '<a href="' + webs[i].url + '" target="_blank"><img class="card-img-top" src="' + webs[i].img + '" alt="Card image cap"/></a>' +
      '</div>'
    );
  }
}

function ampliar(img) {
  console.log(img);
  $('#myModal').empty();
  $('#myModal').append(
    '<div class="modal-dialog">' +
    '<div class="modal-content">' +
    '<button type="button" class="close text-center" data-dismiss="modal">Cerrar</button>' +
    '<img class="img-fluid" src="' + img + '"/>' +
    '</div>' +
    '</div>'
  );
  $('#myModal').modal();
}
