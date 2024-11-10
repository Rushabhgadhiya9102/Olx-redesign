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
    // Append the cloned card to the cart container
    $("#cart-container").append(cardClone);
    $(".offer").append();
    showPopover('item saved')
  });
});

// TOAST
const toastTrigger1 = document.getElementById("liveToastBtn1");
const toastTrigger2 = document.getElementById("liveToastBtn2");
const toastTrigger3 = document.getElementById("liveToastBtn3");
const toastTrigger4 = document.getElementById("liveToastBtn4");
const toastTrigger5 = document.getElementById("liveToastBtn5");
const toastTrigger6 = document.getElementById("liveToastBtn6");
const toastTrigger7 = document.getElementById("liveToastBtn7");
const toastTrigger8 = document.getElementById("liveToastBtn8");
const toastTrigger9 = document.getElementById("liveToastBtn9");
const toastTrigger10 = document.getElementById("liveToastBtn10");
const toastTrigger11 = document.getElementById("liveToastBtn11");
const toastTrigger12 = document.getElementById("liveToastBtn12");
const toastLiveExample = document.getElementById("liveToast");

if (toastTrigger1) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger1.addEventListener("click", () => {
    toastBootstrap.show();
  });
}
if (toastTrigger2) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger2.addEventListener("click", () => {
    toastBootstrap.show();
  });
}
if (toastTrigger3) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger3.addEventListener("click", () => {
    toastBootstrap.show();
  });
}
if (toastTrigger4) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger4.addEventListener("click", () => {
    toastBootstrap.show();
  });
}
if (toastTrigger5) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger5.addEventListener("click", () => {
    toastBootstrap.show();
  });
}
if (toastTrigger6) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger6.addEventListener("click", () => {
    toastBootstrap.show();
  });
}
if (toastTrigger7) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger7.addEventListener("click", () => {
    toastBootstrap.show();
  });
}
if (toastTrigger8) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger8.addEventListener("click", () => {
    toastBootstrap.show();
  });
}
if (toastTrigger9) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger9.addEventListener("click", () => {
    toastBootstrap.show();
  });
}
if (toastTrigger10) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger10.addEventListener("click", () => {
    toastBootstrap.show();
  });
}

if (toastTrigger11) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger11.addEventListener("click", () => {
    toastBootstrap.show();
  });
}
if (toastTrigger12) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  toastTrigger12.addEventListener("click", () => {
    toastBootstrap.show();
  });
}
