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
  // Function for replacing the "watch"
  // in the Youtube link with "embed"
  let embedVideo = () => {
    let trimURL = newVideo.val().trim();
    let replaceWatch = trimURL.replace("watch?=", "embed/");
    return replaceWatch;
  };
  let post = {
    title: newTitle.val().trim(),
    video: embedVideo,
    body: postBody.val().trim(),
  };

  newBlog(post);
});

function newBlog(post) {
  console.log(post);
  $.post("/api/newpost", post, function () {
    window.location.href = "/blogpost";
  });
}
