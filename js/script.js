$(".more-less,.show-less").hide();
$(".show-more-less").on("click", function(){
     $(".show-more, .show-less").toggle();
    $(".more-less").slideToggle(1000);
});


$("#product-details").hide()
$(".recommendation-item").on("click", function(){
    $("#product-details,#home-page").toggle();
})

$(".navbar-brand").on("click", function () {
  $("#home-page").show();
  $("#product-details").hide();
});