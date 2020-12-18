// JS file for blogpost.handlebars
// function for grabbing all the posts
// function getPosts() {
//   $.get("/api/posts", (data) => {
//     let posts = {
//       id: data.id,
//       title: data.title,
//       video: data.video,
//       body: data.body,
//     };
//     return posts;
//   });
// }
// getPosts();
// Custom helper for blogpost.handlebars.
// Only the first 30 characters will be displayed to the user

Handlebars.registerHelper("readMore", function (str) {
  if (str.length > 30) return str.substring(0, 30) + "...";
  return str;
});
