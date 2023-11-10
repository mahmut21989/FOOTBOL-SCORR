function changeTeamName() {
    let newTeamName = prompt("Yeni takım adını girin:");
    newTeamName = newTeamName.toUpperCase();
    document.getElementById("teamName").innerText = newTeamName;
}

const golMinusBirButton = document.querySelector(".button-one");
golMinusBirButton.addEventListener("click", function() {
  document.querySelector("#fname").value--;
  let audio=document.getElementById("music")
  audio.play();
});

const golPlusBirButton = document.querySelector(".button-two");
golPlusBirButton.addEventListener("click", function() {
  document.querySelector("#fname").value++;
  let audio=document.getElementById("music-two")
  audio.play();
});

function promptForGol() {
    const golSayisi = prompt("Lütfen gol sayısını girin:");
    const golSayisiInput = document.getElementById("fname");

    if (golSayisi !== null) {
        golSayisiInput.value = golSayisi;
    }
}

