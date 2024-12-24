let levels = {
    "level_1": [],
    "level_2": [],
    "level_3": [],
    "level_4": [],
    "level_5": [],
    "level_6": [],
    "level_7": [],
    "level_8": [],
    "level_9": [],
    "level_10": [],
}

const getLevelsdata = () => {
    const scoreboardTableBody = document.getElementById('scoreboard_table_body');
    let tableRow = '';
    for (let level in levels) {
        if (levels[level].length > 0) {
            levels[level].forEach(player => {
                tableRow += `
                    <tr>
                        <td>${level.replace('_', ' ')}</td>
                        <td>${player.userName}</td>
                        <td>${player.move}</td>
                        <td>${player.time.minut}:${player.time.second}</td>
                    </tr>
                `;
            });
        }
    }
    scoreboardTableBody.innerHTML = tableRow;
}

document.addEventListener("DOMContentLoaded", () => {
    const playersData = JSON.parse(window.localStorage.getItem('User_details'));
    if (playersData.length) {
        playersData.forEach((player) => {
            levels[`level_${player.gameLevel}`].push(player)
        })
        console.log("playersData : ", playersData)
    }
    getLevelsdata();
});


console.log("levels : ", levels);
