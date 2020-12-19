let sportsURL =
  "https://api.sportsdata.io/v3/nfl/scores/json/TeamSeasonStats/2020?key=241bf3462fda4eebb6b748ab2574f691";
$.ajax({
  url: sportsURL,
  method: "GET",
}).then(function (response) {
  renderTeamStats(response[27]);
  console.log(response[27]);
});

function renderTeamStats(results) {
  let totalScore = $("#touchdown");
  totalScore.text(` ${results.Touchdowns}`);
  let PassingYards = $("#passingYards");
  PassingYards.text(` ${results.PassingYards}`);
  //   let totalScore = $("#");
  //   totalScore.text(` ${results.Score}`);
  //   let totalScore = $("#totalScore");
  //   totalScore.text(` ${results.Score}`);
}
