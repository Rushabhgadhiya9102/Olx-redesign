// ---------------------------- N A V I G A T I O N - S E C T I O N ---------------------

// $(document).ready(function () {
//   var lastScrollTop = 0;
//   var navbar = $(".navbar");

//   $(window).scroll(function () {
//     var st = $(this).scrollTop();

//     if (st > lastScrollTop) {
//       // Scroll Down
//       navbar.css("top", "-86px"); // Hide the navbar
//       navbar.css("transition", "0.3s"); // Hide the navbar
//     } else {
//       // Scroll Up
//       navbar.css("top", "0"); // Show the navbar
//     }
//     lastScrollTop = st;
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  var lastScrollTop = 0;
  var navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    var st = window.scrollY;

    if (st > lastScrollTop) {
      // Scroll Down
      navbar.style.top = "-86px"; // Hide the navbar
    } else {
      // Scroll Up
      navbar.style.top = "0"; // Show the navbar
    }
    lastScrollTop = st; // Update last scroll position
  });
});

// ---------------------------- N A V I G A T I O N - S E C T I O N - E N D --------------------------

// ---------------------------- C O N T E N T - S E C T I O N (SHOW MORE AND LESS) ---------------------

// $(".more-less,.show-less").hide();
// $(".show-more-less").on("click", function(){
//      $(".show-more, .show-less").toggle();
//     $(".more-less").slideToggle(1000);
// });

// Hide elements with class 'more-less' and 'show-less' initially
document.querySelectorAll(".more-less, .show-less").forEach(function (element) {
  element.style.display = "none";
});

// Get references to the button and the content elements
const toggleButton = document.querySelector(".show-more-less");
const showMoreContent = document.querySelector(".show-more");
const showLessContent = document.querySelector(".show-less");
const moreLessContent = document.querySelector(".more-less");

// Add click event listener to the button
toggleButton.addEventListener("click", function () {
  // Toggle the visibility of 'show-more' and 'show-less'
  if (showMoreContent.style.display === "none" || showMoreContent.style.display === "") {
    showMoreContent.style.display = "block"; // Show more content
    showLessContent.style.display = "block"; // Show less content
    moreLessContent.style.display = "flex"; // Show additional content
    toggleButton.textContent = "Show Less"; // Change button text
  } else {
    showMoreContent.style.display = "none"; // Hide more content
    showLessContent.style.display = "none"; // Hide less content
    moreLessContent.style.display = "none"; // Hide additional content
    toggleButton.textContent = "Show More"; // Change button text
  }
});

// ---------------------------- C O N T E N T - S E C T I O N (SHOW MORE AND LESS) E N D ---------------------

// $("#product-details").hide()
// $(".recommendation-item").on("click", function(){
//     $("#product-details,#home-page").toggle();
// })

// $(".navbar-brand").on("click", function () {
//   $("#home-page").show();
//   $("#product-details").hide();
// });

// --------------------------------- C A R T - S E C T I O N ----------------------------

// $(document).ready(function () {
//   const cart = $(".cart-section");
//   const home = $("#home-page");
//   cart.hide();
//   $(".bi-handbag-fill").on("click", function () {
//     cart.toggle();
//     home.toggle();
//   });
// });

// $(document).ready(function () {
//   $(".add-to-cart").on("click", function () {
//     // Clone the card
//     var cardClone = $($(this).attr('for')).clone();

//     cardClone.css("width","310px");
//     // Append the cloned card to the cart container
//     $("#cart-container").append(cardClone);
//     $(".offer").append();

//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  // Get all buttons with the class 'add-to-cart'
  var addToCartButtons = document.querySelectorAll(".add-to-cart");

  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Get the ID of the card to clone from the 'for' attribute
      var cardId = this.getAttribute("for");
      var cardToClone = document.querySelector(cardId);

      // Clone the card
      var cardClone = cardToClone.cloneNode(true); // true means deep clone

      // Set the width of the cloned card
      cardClone.style.width = "310px";

      // Append the cloned card to the cart container
      document.getElementById("cart-container").appendChild(cardClone);
    });
  });
});

// --------------------------------- C A R T - S E C T I O N - E N D ---------------------------

// ---------------------------------- T O A S T - S E C T I O N --------------------------------

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

// ---------------------------------- T O A S T - S E C T I O N - E N D -------------------------------

// ---------------------------------- L O G I N - F O R M ( OTP ) -----------------------------------

const inputs = document.querySelectorAll(".otp-field > input");
const button = document.querySelector(".third-btn");

window.addEventListener("load", () => inputs[0].focus());
button.setAttribute("disabled", "disabled");

inputs[0].addEventListener("paste", function (event) {
  event.preventDefault();

  const pastedValue = (event.clipboardData || window.clipboardData).getData("text");
  const otpLength = inputs.length;

  for (let i = 0; i < otpLength; i++) {
    if (i < pastedValue.length) {
      inputs[i].value = pastedValue[i];
      inputs[i].removeAttribute("disabled");
      inputs[i].focus;
    } else {
      inputs[i].value = ""; // Clear any remaining inputs
      inputs[i].focus;
    }
  }
});

inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input;
    const nextInput = input.nextElementSibling;
    const prevInput = input.previousElementSibling;

    if (currentInput.value.length > 1) {
      currentInput.value = "";
      return;
    }

    if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (e.key === "Backspace") {
      inputs.forEach((input, index2) => {
        if (index1 <= index2 && prevInput) {
          input.setAttribute("disabled", true);
          input.value = "";
          prevInput.focus();
        }
      });
    }

    button.classList.remove("active");
    button.setAttribute("disabled", "disabled");

    const inputsNo = inputs.length;
    if (!inputs[inputsNo - 1].disabled && inputs[inputsNo - 1].value !== "") {
      button.classList.add("active");
      button.removeAttribute("disabled");

      return;
    }
  });
});

// ---------------------------------- L O G I N - F O R M ( OTP ) - E N D ----------------------------------



document.getElementById("takePhotoButton").addEventListener("click", function () {
  document.getElementById("photoInput").click(); // Trigger the file input click
});

document.getElementById("photoInput").addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const preview = document.getElementById("preview");
      preview.src = e.target.result;
      preview.style.display = "block"; // Show the preview
      document.getElementById("nextButton").disabled = false; // Enable the next button
    };
    reader.readAsDataURL(file);
  }
});

document.getElementById("nextButton").addEventListener("click", function () {
  // Handle the next step in the verification process
  alert("Next step initiated.");
});

// L O G I N - F O R M 

$(".login-form-2, .login-otp, .authentication, .photo-field, .login-form-end").hide();

$(".first-btn").on('click',function (){
  $('.login-form-1').hide();
  $('.login-form-2').show();
});

$(".second-btn").on('click',function (){
  $('.login-form-2').hide();
  $('.login-otp').show();
});

$(".third-btn").on('click',function (){
  $('.login-otp').hide();
  $('.authentication').show();
});

$(".fourth-btn").on('click',function (){
  $('.authentication').hide();
  $('.photo-field').show();
});

$(".fifth-btn").on('click',function (){
  $('.photo-field').hide();
  $('.login-form-end').show();
});

// ----------------- S L I C K - S L I D E R -----------------

$(".slider").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  speed: 300,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  //Responsive
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});