// If a video isn't submitted the video section is hidden

function getSinglePost(id) {
  $.get("/api/posts/" + id, function (data) {
    if (data) {
      return data;
    }
  });
}
getSinglePost();
