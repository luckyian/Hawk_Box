
//API Key for Sportsdataio
const api_key = process.env.SPORTAPI;
//API call to get the current football season
let getSeason = `https://api.sportsdata.io/v3/nfl/scores/json/CurrentSeason?key=${api_key}`;
$.ajax({
  url: getSeason,
  method: "GET",
}).then(function (response) {
  let CurrentSeason = response;
  // API to get current football stats
  let sportsURL = `https://api.sportsdata.io/v3/nfl/scores/json/TeamSeasonStats/${CurrentSeason}?key=${api_key}`;
  $.ajax({
    url: sportsURL,
    method: "GET",
  }).then(function (response) {
    renderTeamStats(response[27]);
  });
});
// Function to render the stats to the page
function renderTeamStats(results) {
  let totalScore = $("#touchdown");
  totalScore.text(` ${results.Touchdowns}`);
  let PassingYards = $("#passingYards");
  PassingYards.text(` ${results.PassingYards}`);
  let passingComplete = $("#passingComplete");
  passingComplete.text(` ${results.PassingCompletions}`);
  let fumbles = $("#fumbles");
  fumbles.text(` ${results.Fumbles}`);
  let passingIntercep = $("#passingIntercep");
  passingIntercep.text(` ${results.PassingInterceptions}`);
  let passTouchdown = $("#passingTouchdown");
  passTouchdown.text(` ${results.PassingTouchdowns}`);
  let games = $("#games");
  games.text(` ${results.Games}`);
  let redZone = $("#redZone");
  redZone.text(` ${results.RedZoneAttempts}`);
}
// If a video isn't submitted the video section is hidden
$("#player").each(function () {
  if ($(this).attr("src") === "") {
    $(this).parent("#iframeDiv").hide();
  }
});
