$(".more-less,.show-less").hide();
$(".show-more-less").on("click", function(){
    $(".more-less").slideToggle(1000);
    $(".show-more, .show-less").toggle();
});