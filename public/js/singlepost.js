// If a video isn't submitted the video section is hidden

$(document).ready(function () {
  if ($('#iframe[src="https://www.youtube.com/embed/"]')) {
    $("#iframe").addClass("hide");
  }
});
