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
