let score = [0,1,2,3,4,5,6];
var turn;

//Team 1 details
var team1 ={
    name: "CSK",
    runs: [],
    score: 0
}

//Team 2 details
var team2 ={
    name: "RCB",
    runs: [],
    score: 0
}

window.onload = () => {
    //Decide who's gonna bat first
    selectTurn();
    //Update text of button 
    updateButtonText();
    //Update the Initial scores
    updateScore();
    //Update team names
    updateNames();
}

let selectTurn = () => {
    turn =Math.round(Math.random())+1;
}

let updateButtonText = () => {
    var button = document.getElementById("strike-button");
    
    var result = document.getElementById("result");
    result.style.visibility = "";
    //check if the game is over.
    if(team1.runs.length==6 && team2.runs.length == 6){
        button.remove();
        //check if match is draw
        result.textContent = team1.score === team2.score ? `Match Draw` : `${team1.score > team2.score ? team1.name : team2.name} Wins`;
    }
    else{
        turn = team1.runs.length === 6 ? 2 : team2.runs.length === 6 ? 1 : turn;
        button.textContent = `${turn === 1 ? team1.name : team2.name} Batting`;
    }
}

let updateScore = () => {
    document.getElementById("team-1-score").textContent = team1.score;
    document.getElementById("team-2-score").textContent = team2.score;
    UpdateRuns();
}

let updateNames = () => {
    document.getElementById("team-1-name").textContent = team1.name;
    document.getElementById("team-2-name").textContent = team2.name;
}

var ButtonClick = () => {
    var runs = score[Math.floor(Math.random()*score.length)];
    runs = runs === 5 ? "W" : runs;

    if(turn === 1){
        team1.runs.push(runs);
        team1.score = CalculateScore(team1.runs);
    }
    else{
        team2.runs.push(runs);
        team2.score = CalculateScore(team2.runs);
    }

    updateButtonText();
    updateScore();
}

var CalculateScore = (runs) => {
    return runs.map(num => {
        return num=="W" ? 0 :  num;
    }).reduce((total,num) => total+num);
}

var UpdateRuns = () => {
    var teamOne = document.getElementById("team-1-runs").children;
    var teamTwo = document.getElementById("team-2-runs").children;
    team1.runs.forEach((runs,index) => {
        teamOne[index].textContent = runs;
    })
    team2.runs.forEach((runs,index) => {
        teamTwo[index].textContent = runs;
    })
}