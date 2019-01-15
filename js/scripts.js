// $(document).ready(function() {
//   $(".clickable").click(function() {
//     $("#walrus-showing").toggle();
//     $("#walrus-hidden").toggle();
//   });
// });

// $(document).ready(function() {
//   $(".clickable").click(function() {
//     $("#walrus-hidden").fadeToggle(1200);
//     $("#walrus-showing").fadeToggle(1200);
//   });
// });

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-hidden").slideToggle();
    $("#walrus-showing").slideToggle();
});

  $(".clickable2").click(function() {
    $("#rabbit-1").slideToggle();
    $("#rabbit-2").slideToggle();
  });
});
