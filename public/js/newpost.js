// JS file for newpost.handlebar
$("#newPost").on("click", (event) => {
  event.preventDefault();
  let newTitle = $("#title");
  let postBody = $("#blogText");
  let newVideo = $("#video");
  if (
    !newTitle.val().trim() ||
    !postBody.val().trim() ||
    !newVideo.val().trim()
  ) {
    return;
  }
  let post = {
    title: newTitle.val().trim(),
    video: newVideo.val().trim(),
    body: postBody.val().trim(),
  };

  newBlog(post);
});

function newBlog(post) {
  $.post("/api/newpost", post, function () {
    window.location.href = "/blogpost";
  });
}
