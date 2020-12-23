
let getSeason =
  "https://api.sportsdata.io/v3/nfl/scores/json/CurrentSeason?key=241bf3462fda4eebb6b748ab2574f691";
$.ajax({
  url: getSeason,
  method: "GET",
}).then(function (response) {
  let CurrentSeason = response;

  let sportsURL = `https://api.sportsdata.io/v3/nfl/scores/json/TeamSeasonStats/${CurrentSeason}?key=241bf3462fda4eebb6b748ab2574f691`;
  $.ajax({
    url: sportsURL,
    method: "GET",
  }).then(function (response) {
    renderTeamStats(response[27]);
   
  });
});
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
