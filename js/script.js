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

// CART SECTION

$(document).ready(function(){

   const cart = $(".cart-section");
   const home = $("#home-page");
   cart.hide(); 
  $(".bi-handbag-fill").on("click",function(){
   cart.toggle();
   home.toggle();
  })
})

$(document).ready(function () {
  $(".add-to-cart").on("click", function () {
    // Clone the card
    var cardClone = $($(this).attr('for')).clone();
    
    cardClone.css("width","310px");
    // cardClone.find(".add-to-cart").remove();

    // Append the cloned card to the cart container
    $("#cart-container").append(cardClone);
    $(".offer").append();
    alert('item saved');
  });
});

// TOAST

const toastTrigger = document.getElementById("liveToastBtn");
const toastLiveExample = document.getElementById("liveToast");

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger.addEventListener("click", () => {
    toastBootstrap.show();
  });
}