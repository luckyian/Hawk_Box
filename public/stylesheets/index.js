const { startsWith } = require("sequelize/types/lib/operators")

{
    "$query": {
        "week.season": 2020,
            "week.seasonType": "REG",
                "week.week": 17
    }
}
start()
GET / games ? s = { "$query": { "week.season": 2020, "week.seasonType": "REG", "week.week".17 } }
[
    {
        "id": "",

        "week: {
        "season": 2020,
        "seasonType": "REG",
        "week": 1,
    },

    "gameTime": "2020-12-20T00:00:00Z",
    "gameType": "REG",
        "homeTeam": {
    "id": "",
        "season": 2020,
            "fullName": "",
                "nickName": "",
                    "abbr": ""
},
"visitorTeam": {
    "id": "",
        "season": 2020,
            "fullName": "",
                "nickName": "",
                    "abbr": ""
},
"gameStatus": {
    "gameClock": null,
        "down": null,
            "yardsToGo": null,
                "yardLineSide": null,
                    "yardLineNumber": null,
                        "period": null,
                            "phase": null,
                                "possessionTeamId": null,
                                    "redZone": null,
                                        "homeTimeoutsRemaining": null,
                                            "visitorTimeoutsRemaining": null
},
"homeTeamScore": {
    "pointsTotal": null,
        "pointsQ1": null,
            "pointsQ2": null,
                "pointsQ3": null,
                    "pointsQ4": null,
                        "pointsOvertime": null,
                            "pointsOvertimeTotal": null
},
"visitorTeamScore": {
    "pointsTotal": null,
        "pointsQ1": null,
            "pointsQ2": null,
                "pointsQ3": null,
                    "pointsQ4": null,
                        "pointsOvertime": null,
                            "pointsOvertimeTotal": null
}
    }
  ]