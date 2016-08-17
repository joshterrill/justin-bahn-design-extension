$(function() {
  // where the magic happens....
  $("*").css("border", "4px red solid");
  if ($("iframe").length > 0) {
    $("iframe").contents().find("*").css("border", "4px red solid");
  }
});