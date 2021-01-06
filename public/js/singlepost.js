// If a video isn't submitted the video section is hidden
$("#player").each(function () {
  if ($(this).attr("src") === "") {
    $(this).parent("#iframe").hide();
  }
});
