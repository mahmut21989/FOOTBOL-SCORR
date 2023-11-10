function changeTeamName() {
    let newTeamName = prompt("Yeni takım adını girin:");
    newTeamName = newTeamName.toUpperCase();
    document.getElementById("teamName").innerText = newTeamName;
}

const golPlusBirButton = document.querySelector(".button-one");
golPlusBirButton.addEventListener("click", function() {
  document.querySelector("#fname").value++;
});