let numTeams, numMatches;

function createTeams() {
    numTeams = parseInt(document.getElementById("numTeams").value);
    numMatches = parseInt(document.getElementById("numMatches").value);

    window.location.href = `./fixture.html?teams=${numTeams}&matches=${numMatches}`;
}

document.getElementById("setupForm").addEventListener("submit", function (event) {
    event.preventDefault();
    createTeams();
});

function displayFixture() {
    const teams = [];

    for (let i = 0; i < numTeams; i++) {
        teams.push(prompt("Enter Team " + (i + 1) + "'s name:"));
    }

    const fixture = generateFixture(teams);

    document.body.innerHTML = "<h1>Fixture</h1>";

    fixture.forEach((round, index) => {
        document.body.innerHTML += `<p>Round ${index + 1}:</p>`;
        round.forEach(match => {
            if(match[0] != "No team" && match[1] != "No team" ){
                document.body.innerHTML += `<p>${match[0]} vs ${match[1]}</p>`;
            }
        });
    });
}