// If a video isn't submitted the video section is hidden

if ($("#iframe[src=null]")) {
  $("#iframe").addClass("hide");
} else {
  $("#iframe").removeClass("hide");
}
