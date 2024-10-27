$(".more-less,.show-less").hide();
$(".show-more-less").on("click", function(){
     $(".show-more, .show-less").toggle();
    $(".more-less").slideToggle(1000);
});