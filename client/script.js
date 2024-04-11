const teamsWrapper = document.getElementById("teamsWrapper");

async function getTeams() {
  const response = await fetch(
    "https://express-sql-games-demo.onrender.com/games"
  );
  const teams = await response.json();
  console.log(teams);

  teams.forEach(function (team) {
    const h2 = document.createElement("h2");
    const p = document.createElement("p");
    const img = document.createElement("img");

    h2.textContent = team.name;
    p.textContent = `Established in ${team.year}`;
    img.src = team.imgUrl;
    img.alt = team.name;

    teamsWrapper.appendChild(h2);
    teamsWrapper.appendChild(p);
    teamsWrapper.appendChild(img);
  });
}

getTeams();
