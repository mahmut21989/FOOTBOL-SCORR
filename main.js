// Aşağısı sayfa açılınca müzik çalması 
function myFunction() {
    let audio2 = document.getElementById("music3");
    audio2.play();
  }

//  TAKIM-A TAKIMININ YANI SAYFANIN SOL TARAFININ JS KODLARI

// Aşağısı tıklayınca takımın adının değiştirilmesi
function changeTeamName() {
    let newTeamName = prompt("Yeni takım adını girin:");
    newTeamName = newTeamName.toUpperCase();
    document.getElementById("teamName").innerText = newTeamName;
}

// Aşağısı +1 gol butonun js
const golMinusBirButton = document.querySelector(".button-one");
golMinusBirButton.addEventListener("click", function() {
  document.querySelector("#fname").value++;
  let audio=document.getElementById("music")
  audio.play();
});

// Aşağısı -1 Butonunn js ancak input değeri 0 olunca daha aşağıya inmiyor
const golMinusBirButtonTwo = document.querySelector(".button-two");
golMinusBirButtonTwo.addEventListener("click", function() {
  const golSayisiInput = document.querySelector("#fname");
  let golSayisi = parseInt(golSayisiInput.value);

  if (golSayisi > 0) {
    golSayisi--;
    golSayisiInput.value = golSayisi;
    let audio = document.getElementById("music-two");
    audio.play();
  }
});

// Bu Kendimizin gol sayısını kullanıcıdan istediğimiz butonun js
function promptForGol() {
    const golSayisi = prompt("Lütfen gol sayısını girin:");
    const golSayisiInput = document.getElementById("fname");

    if (golSayisi !== null) {
        golSayisiInput.value = golSayisi;
    }
}

// Aşağısı +2 gol butonunun js 
const golTwoBirButton = document.querySelector(".button-four");
golTwoBirButton.addEventListener("click", function() { 
  let valueNew=document.querySelector("#fname").value;
  valueNew=Number(valueNew);
  valueNew+=2;
  document.querySelector("#fname").value=valueNew
  let audio=document.getElementById("music")
  audio.play();    

});

// Aşağıdaki kod +3 gol butonun js kodu 
const golThreeBirButton= document.querySelector(".button-five");
golThreeBirButton.addEventListener("click", function(){
  let valueThree=document.querySelector("#fname").value;
  valueThree=Number(valueThree);
  valueThree+=3;
  document.querySelector("#fname").value=valueThree
  let audio=document.getElementById("music")
  audio.play();  
})


    // TAKIM-B TAKIMI YANİ SAYFANIN SAĞ TARAFININ JS KODLARI

function changeTeamBName(){
  let newTeamBName=prompt("Yeni Takım Adını Giriniz");
  newTeamBName=newTeamBName.toUpperCase();
  document.getElementById("teamBName").innerText =newTeamBName;
}



