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
// Customer helper for blogpost.handlebars.
// Only the first 30 characters will be displayed to the user
Handlebars.registerHelper("readMore", function (str) {
  if (str.length > 30) return str.substring(0, 30) + "...";
  return str;
});
