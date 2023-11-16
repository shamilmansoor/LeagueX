let numTeams, numMatches, teams;
numMatches = getURLParameter('matches');
numTeams = getURLParameter('teams');
displayFixture();

function generateFixture(teams) {
    if (teams.length % 2 !== 0) {
        teams.push('No team');
    }

    const numberOfRounds = teams.length - 1;
    const rounds = [];
    for(let n = 0; n < numMatches; n++){
        for (let i = 0; i < numberOfRounds; i++) {
            const round = [];
            for (let j = 0; j < teams.length / 2; j++) {
                const match = [teams[j], teams[teams.length - 1 - j]];
                round.push(match);
            }
            rounds.push(round);

            teams.splice(1, 0, teams.pop());
        }
    }
    return rounds;
}



function displayFixture() {
    const teams = [];

    for (let i = 0; i < numTeams; i++) {
        teams.push(prompt("Enter Team " + (i + 1) + "'s name:"));
    }

    const fixture = generateFixture(teams);

    const table = document.getElementById("fixtab");

    fixture.forEach((round, index) => {

        const roundRow = table.insertRow();
        const rdCell = document.createElement("th");
        rdCell.textContent = `Round ${index + 1}`;
        rdCell.colSpan = 3;
        roundRow.appendChild(rdCell);

        round.forEach(match => {

            const matchRow = table.insertRow();

            if (match[0] != "No team" && match[1] != "No team") {

                const team1Cell = matchRow.insertCell();
                team1Cell.textContent = match[0];

                const vsCell = matchRow.insertCell();
                vsCell.textContent = "VS";

                const team2Cell = matchRow.insertCell();
                team2Cell.textContent = match[1];
            }
        });
    });
}

function getURLParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

