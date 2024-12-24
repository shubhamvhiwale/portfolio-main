
// const userName = window.prompt("Enter your name")
// const plateNumber = window.prompt("enter plate number")
debugger
const url = window.location.href;
const urlParams = new URLSearchParams(new URL(url).search);
let user_name = urlParams.get('player_name');

let gameLevel = Number(urlParams.get('game_level'));
let platLength = gameLevel;
let platWidth = platLength < 8 ? 10 : 5
let initPlates = [];

for (let i = 0; i < platLength; i++) {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    initPlates.push({ color: randomColor, width: ((platLength - i) * platLength * platWidth) / 2 })
}

let hanoi = {
    column1: initPlates,//[{ color: 'red', width: 160 }, { color: 'blue', width: 140 }, { color: 'green', width: 120 }, { color: 'yellow', width: 100 }, { color: 'pink', width: 80 }],
    column2: [],
    column3: [],
}

let targetedPlat = {};
let discStyle;
let move = 0;

let timerInterval;
let second = 0;
let minut = 0;

let usersScoreboard = [];

const messageAlert = (message) => {
    document.getElementById("message").textContent = message;
}

const handleColumnPlatClick = (columnName, plat, disc, isPlateNotMovable) => {
    if (isPlateNotMovable) {
        messageAlert("You can only move a plate which is top on the column!");
        return;
    }
    if (columnName && plat.color) {
        if (discStyle) {
            discStyle.style.border = '2px solid black';
            discStyle.style.boxShadow = "none";
        }
        targetedPlat = { fromColumn: columnName, plat: plat }
        console.log('platPossition : ', targetedPlat)
        disc.style.border = '2px solid white';
        disc.style.boxShadow = "rgba(0, 0, 0, 1) 0px 3px 8px";
        discStyle = disc;
    }
    console.log('hanoi : ', hanoi)
}

const handleColumnClick = (column) => {
    if (targetedPlat.fromColumn === column) {
        return;
    }

    const isDiscAlreadyPresent = hanoi[column].filter((item) => item.color === targetedPlat.plat.color);
    if (isDiscAlreadyPresent.length) {
        return;
    }

    let recentInsertedPlat = hanoi[column][hanoi[column].length - 1];
    if (hanoi[column].length && targetedPlat.plat.width > recentInsertedPlat.width) {
        messageAlert("You cannot place large plat on the top of small one!");
        return;
    }
    hanoi[column].push(targetedPlat.plat)
    move = move + 1;
    document.getElementById('move').textContent = `Move : ${move}`
    const filteredArray = hanoi[targetedPlat.fromColumn].filter(item => item.color !== targetedPlat.plat.color);
    hanoi[targetedPlat.fromColumn] = filteredArray;
    targetedPlat = {};
    getCurrentDiscs()
}

const getCurrentDiscs = () => {
    const column_1 = document.getElementById('column-1');
    const column_2 = document.getElementById('column-2');
    const column_3 = document.getElementById('column-3');
    messageAlert("")

    // Clear previously appended children
    column_1.innerHTML = '';
    column_2.innerHTML = '';
    column_3.innerHTML = '';

    // Assuming column1 is defined somewhere and is an array of objects
    Object.keys(hanoi).forEach((col) => {
        hanoi[col].forEach((item, index) => {
            const disc = document.createElement('div');
            disc.className = 'plat';
            disc.style.width = `${item.width}px`;
            disc.style.height = '20px';
            disc.style.backgroundColor = item.color;
            disc.style.bottom = `${index * 22}px`;
            // disc.style.pointerEvents = index < hanoi[col].length - 1 ? "none" : '';
            disc.onclick = () => handleColumnPlatClick(col, { color: item.color, width: item.width }, disc, index < hanoi[col].length - 1);
            // Add the disc to the column_1 container
            if (col === 'column1') {
                column_1.appendChild(disc);
            } else if (col === 'column2') {
                column_2.appendChild(disc);
            } else {
                column_3.appendChild(disc);
            }
        })
    })

    if (initPlates.length === hanoi.column3.length) {
        let usersScoreboard = JSON.parse(window.localStorage.getItem("User_details")) || [];
        // Add the current user's details
        usersScoreboard.push({
            userName: user_name,
            move: move,
            gameLevel: gameLevel,
            time: { minut: minut, second: second },
        });

        window.localStorage.setItem('User_details', JSON.stringify(usersScoreboard));
        window.location.href = `winnerpage/winnerpage.html?player_name=${user_name}&game_level=${gameLevel}`
    }
};

const hanldeButtonClick = () => {
    // debugger
    document.getElementById('start-btn').disabled = true;
    getCurrentDiscs();
    const timer = document.getElementById('timer')
    timerInterval = setInterval(() => {
        second = second + 1
        if (second > 60) {
            minut = minut + 1;
            second = 0;
        }
        timer.textContent = `Time: ${minut} : ${second}`
    }, 1000)
    messageAlert("Your game is started!!!")
}

const handleTimerStop = () => {
    clearInterval(timerInterval)
    timerInterval = null;
    document.getElementById('stop-btn').disabled = true;
}

const handleReset = () => {
    window.location.reload();
}