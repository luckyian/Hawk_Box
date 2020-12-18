// JS file for newpost.handlebars
let newTitle = $("#title");
let postBody = $("newPost");
let newVideo = $("#video");

$("#newPost").on("submit", (event)=> {
  event.preventDefault();
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
  $.post("/api/posts", post, function () {
    window.location.href = "/blogpost";
  });
}
