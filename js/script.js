// ---------------------------- N A V I G A T I O N - S E C T I O N ---------------------

document.addEventListener("DOMContentLoaded", function () {
  var lastScrollTop = 0;
  const navbar = document.getElementById("nav-1");

  window.addEventListener("scroll", function () {
    var st = window.scrollY;

    if (st > lastScrollTop) {
      // Scroll Down
      navbar.style.top = "-100px"; // Hide the navbar
    } else {
      // Scroll Up
      navbar.style.top = "0"; // Show the navbar
    }
    lastScrollTop = st; // Update last scroll position
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var lastScrollTop = 0;
  const navbar2 = document.getElementById("nav-2");

  window.addEventListener("scroll", function () {
    var st = window.scrollY;

    if (st > lastScrollTop) {
      // Scroll Down
      navbar2.style.top = "-100px"; // Hide the navbar
    } else {
      // Scroll Up
      navbar2.style.top = "0"; // Show the navbar
    }
    lastScrollTop = st; // Update last scroll position
  });
});

// ---------------------------- N A V I G A T I O N - S E C T I O N - E N D --------------------------

// ---------------------------- C O N T E N T - S E C T I O N (SHOW MORE AND LESS) ---------------------

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

// --------------------------------- C A R T - S E C T I O N ----------------------------

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

// --------------------- L O G I N - F O R M - T R A N S I T I O N -------------------------

// Hide all forms initially
document.querySelectorAll(".login-form-2, .login-otp, .authentication, .photo-field, .login-form-end").forEach(function (element) {
  element.style.display = "none";
});

// Show the second login form when the first button is clicked
document.querySelector(".first-btn").addEventListener("click", function () {
  document.querySelector(".login-form-1").style.display = "none";
  document.querySelector(".login-form-2").style.display = "block";
});

// Show the OTP form when the second button is clicked
document.querySelector(".second-btn").addEventListener("click", function () {
  document.querySelector(".login-form-2").style.display = "none";
  document.querySelector(".login-otp").style.display = "block";
});

// Show the authentication form when the third button is clicked
document.querySelector(".third-btn").addEventListener("click", function () {
  document.querySelector(".login-otp").style.display = "none";
  document.querySelector(".authentication").style.display = "block";
});

// Show the photo field when the fourth button is clicked
document.querySelector(".fourth-btn").addEventListener("click", function () {
  document.querySelector(".authentication").style.display = "none";
  document.querySelector(".photo-field").style.display = "block";
});

// Show the end form when the fifth button is clicked
document.querySelector(".fifth-btn").addEventListener("click", function () {
  document.querySelector(".photo-field").style.display = "none";
  document.querySelector(".login-form-end").style.display = "block";
});
// --------------------- L O G I N - F O R M - T R A N S I T I O N -------------------------