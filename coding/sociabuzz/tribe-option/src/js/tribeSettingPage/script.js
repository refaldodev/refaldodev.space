var containerAccordion = document.querySelector(".accordion-container");

containerAccordion.addEventListener("click", function (e) {
  // e.preventDefault();
  var header = e.target.closest(".accordion-header");
  if (header) {
    // Hide current open
    var headerOpen = document.querySelector(
      ".accordion-item.active .accordion-header"
    );
    if (headerOpen && !headerOpen.isSameNode(header)) {
      headerOpen.closest(".accordion-item").classList.remove("active");
    }

    // Show current clicked
    var item = e.target.closest(".accordion-item");

    item.classList.toggle("active");

    // var tujuan = item.children[0].getAttribute("href");
    if (item.classList.contains("active")) {
      $("html, body").animate(
        {
          scrollTop: $(item).offset().top - 10,
        },
        500,
        "easeInOutExpo"
      );
    }
  }
});

// sub accordion
var subContainerAccordion = document.querySelector(".subAccordion-container");

subContainerAccordion.addEventListener("click", function (e) {
  // e.preventDefault();
  var header = e.target.closest(".subAccordion-header");
  if (header) {
    // Hide current open
    var headerOpen = document.querySelector(
      ".subAccordion-item.active .subAccordion-header"
    );
    if (headerOpen && !headerOpen.isSameNode(header)) {
      headerOpen.closest(".subAccordion-item").classList.remove("active");
    }

    // Show current clicked
    var item = e.target.closest(".subAccordion-item");
    item.classList.toggle("active");
    if (item.classList.contains("active")) {
      $("html, body").animate(
        {
          scrollTop: $(item).offset().top - 10,
        },
        500,
        "easeInOutExpo"
      );
    }
  }
});

jQuery(function ($) {
  //lazyload
  $("img.lazy").lazyload({
    effect: "fadeIn",
    effectspeed: 1000,
    threshold: 400,
  });

  function masonry_update() {
    var $container = $("#masonry-content");

    $container.imagesLoaded(function () {
      $container.masonry({
        itemSelector: ".grid-item",

        // percentPosition: true,
        isFitWidth: true,
        horizontalOrder: true,
        gutter: 40,
      });
    });
  }

  masonry_update();
  var timer = false;
  $(window).resize(function () {
    if (timer !== false) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      masonry_update();
    }, 200);
  });
});

$(window).on("orientationchange", function (event) {
  var x = event.beta, // -180 to 180
    y = event.gamma, // -90 to 90
    z = event.alpha; // 0 to 360

  // initialize Masonry after all images have loaded
  jQuery(document).ready(function ($) {
    $("img.lazy").lazyload({
      effect: "fadeIn",
      effectspeed: 1000,
      threshold: 400,
    });

    // var min_width = 480;

    // $("img.lazy").load("http://127.0.0.1:5500/", function () {
    //   masonry_update();
    // });

    function masonry_update() {
      var $container = $("#masonry-content");

      $container.imagesLoaded(function () {
        $container.masonry({
          itemSelector: ".grid-item",

          // percentPosition: true,
          isFitWidth: true,
          horizontalOrder: true,
          gutter: 40,
        });
      });
    }

    masonry_update();
    var timer = false;
    $(window).resize(function () {
      if (timer !== false) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        masonry_update();
      }, 200);
    });

    //then also call it after ajax event
  });
});

// see detail

// show details event collapse
function showDetailCard() {
  $(".show-details").on("click", function (e) {
    e.preventDefault();

    // if target click delete class ellipsis-text, if click lagi akan menambah class  ellipsis-text lagi
    $(this).parent().find("div").toggleClass("ellipsis-text");

    // trim hapus space pada text
    var currentText = $.trim($(this).text());

    if (currentText === "Show details") {
      $(this).text("Hide details");
    } else {
      $(this).text("Show details");
    }
    // change height card masonry when click see details
    $("#masonry-content").masonry({
      itemSelector: ".grid-item",
      // use element for option
      columnWidth: ".grid-item",

      percentPosition: true,
      isFitWidth: true,

      // horizontalOrder: true,
    });
  });
}
showDetailCard();

var showDetails = document.querySelectorAll(".card-description");

showDetails.forEach((element) => {
  if ($(element).height() > 42) {
    $(element).parent().find("a").addClass("d-inline-block");
    $(element).parent().find("a").removeClass("d-none");
  } else {
    $(element).parent().find("a").addClass("d-none");
    $(element).parent().find("a").removeClass("d-inline-block");
  }
});
//
$(window).bind("orientationchange", function (event) {
  location.reload(true);
});

function rearrangeHandler() {
  //for input form
  let inputFormContainer = document.querySelector(".options-container");
  new Sortable(inputFormContainer, {
    animation: 150,
    handle: ".drag-btn",
    ghostClass: "ghost",
    forceFallback: true,
    onStart: function (evt) {
      document.documentElement.classList.add("draggable-cursor");
      $("[data-toggle=tooltip]").tooltip("hide");
      $("[data-toggle=tooltip]").tooltip("disable");
    },
    // Restores default page cursor
    onEnd: function (evt) {
      document.documentElement.classList.remove("draggable-cursor");
      $("[data-toggle=tooltip]").tooltip("enable");
    },
  });
}

rearrangeHandler();
