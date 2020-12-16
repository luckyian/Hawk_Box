// JS file for blogpost.handlebars
function getPost() {
  $.get("/api/posts", (data) => {
    let posts = {
      title: data.title,
      video: data.video,
      body: data.body,
    };
    return posts;
  });
}
getPost();
