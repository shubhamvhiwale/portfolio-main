const url = window.location.href;
const urlParams = new URLSearchParams(new URL(url).search);

let gameLevels = {
    1: "1st",
    2: "2nd",
    3: "3rd",
    4: "4th",
    5: "5th",
    6: "6th",
    7: "7th",
    8: "8th",
    9: "9th",
    10: "10th"
}

let user_name = urlParams.get('player_name');
let game_level = Number(urlParams.get('game_level'));

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("level_completed").textContent = `You have completed your ${gameLevels[game_level]} level.`;
});

const handleCurrentLevel = () => {
    window.location.href = `../index.html?player_name=${user_name}&game_level=${game_level}`
}

const handleNextLevel = () => {
    window.location.href = `../index.html?player_name=${user_name}&game_level=${game_level + 1}`
}
