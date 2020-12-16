// JS file for newpost.handlebars
let newTitle = $("#title");
let postBody = $("newPost");
let newVideo = $("#video");

$("#newPost").on("submit", function handlePostSubmit(event) {
  event.preventDefault();
  if (!newTitle.val().trim() || !postBody.val().trim()) {
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
  $.post("/api/post", post, function () {
    window.location.href = "/blogpost";
  });
}
