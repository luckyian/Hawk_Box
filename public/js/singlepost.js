// If a video isn't submitted the video section is hidden
$("#player").each(function () {
  if ($(this).attr("src") === "") {
    $(this).parent("#iframe").hide();
  }
});
// When a comment is submitted the comment and user is saved in the database
$("#commentSubmit").on("submit", (event) => {
  console.log(event);
  event.preventDefault();
  let commentData = {
    user: req.user,
    comment: $("#comment").val().trim(),
  };
  newComment(commentData);
});
// Function for posting the comment to the database
function newComment(comment) {
  $.post("/api/comments", comment, function () {
    window.location.reload();
  });
}
