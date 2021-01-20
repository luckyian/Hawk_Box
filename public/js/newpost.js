// JS file for newpost.handlebar
$("#newPost").on("click", (event) => {
  event.preventDefault();
  let newTitle = $("#title");
  let postBody = $("#blogText");
  let newVideo = $("#video");
  if (!newTitle.val().trim() || !postBody.val().trim()) {
    return;
  }
  // Function for replacing the "watch"
  // in the Youtube link with "embed"
  function embedVideo() {
    if (!newVideo.val().trim()) {
      return null;
    }
    let trimURL = newVideo.val().trim();
    trimURL = trimURL.slice(32);
    let replaceWatch = `https://www.youtube.com/embed/${trimURL}`;

    return replaceWatch;
  }
  let post = {
    title: newTitle.val().trim(),
    video: embedVideo(),
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
