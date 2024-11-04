$(".more-less,.show-less").hide();
$(".show-more-less").on("click", function(){
     $(".show-more, .show-less").toggle();
    $(".more-less").slideToggle(1000);
});


// $("#product-details").hide()
// $(".recommendation-item").on("click", function(){
//     $("#product-details,#home-page").toggle();
// })

// $(".navbar-brand").on("click", function () {
//   $("#home-page").show();
//   $("#product-details").hide();
// });


$(document).ready(function () {
  var lastScrollTop = 0;
  var navbar = $(".navbar");

  $(window).scroll(function () {
    var st = $(this).scrollTop();

    if (st > lastScrollTop) {
      // Scroll Down
      navbar.css("top", "-86px"); // Hide the navbar
      navbar.css("transition", "0.3s"); // Hide the navbar
    } else {
      // Scroll Up
      navbar.css("top", "0"); // Show the navbar
    }
    lastScrollTop = st;
  });
});