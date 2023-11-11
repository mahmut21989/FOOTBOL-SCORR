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
const golPlusBirButton = document.querySelector(".button-one");
golPlusBirButton.addEventListener("click", function() {
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

// Bu Kendimizin gol sayısını kullanıcıdan istediğimiz butonun js
function promptForGol() {
  const golSayisi = prompt("Lütfen gol sayısını girin:");
  const golSayisiInput = document.getElementById("fname");

  if (golSayisi !== null) {
      golSayisiInput.value = golSayisi;
  }
}


    // TAKIM-B TAKIMI YANİ SAYFANIN SAĞ TARAFININ JS KODLARI

    // TAKIMIN UKULLANICIDAN İSTENDİĞİ JS KODU
function changeTeamBName(){
  let newTeamBName=prompt("Yeni Takım Adını Giriniz");
  newTeamBName=newTeamBName.toUpperCase();
  document.getElementById("teamBName").innerText =newTeamBName;
}

  // GOL +1 YAZAN BUTONUN JS KODLARI
const golPlusBUtton=document.querySelector(".button-six");
golPlusBUtton.addEventListener("click", function(){
  document.querySelector("#pageİnput").value++;
  pageInput.innerHTML = `<strong>${pageInput.value}</strong>`;
  let audio=document.getElementById("music")
  audio.play();
});
  
  // GOL -1 YAZAN BUTON JS KODU

  const golMinusBButton=document.querySelector(".button-seven");
  golMinusBButton.addEventListener("click", function(){
    const golSayisiBInput =document.querySelector("#pageİnput");
    let golSayisiB= parseInt(golSayisiBInput.value);
    if (golSayisiB > 0) {
      golSayisiB--;
      golSayisiBInput.value=golSayisiB
      let audio=document.getElementById("music-two");
      audio.play();

    }

  })

  // GOL +2 YAZAN BUTON JS KODLARI
  const golSecendryButton = document.querySelector(".button-eight");
  golSecendryButton.addEventListener("click", function(){
    let valueFive = document.querySelector("#pageİnput").value;
    valueFive=Number(valueFive);
    valueFive+=2;
    document.querySelector("#pageİnput").value=valueFive
    let audio=document.getElementById("music")
    audio.play();
  })

  // Aşağıdaki kod +3 gol butonun js kodu 
  const golTertiaryButton=document.querySelector(".button-nine");
  golTertiaryButton.addEventListener("click", function(){
    let valueSix=document.querySelector("#pageİnput").value;
    valueSix=Number(valueSix);
    valueSix+=3;
    document.querySelector("#pageİnput").value=valueSix
    let audio=document.getElementById("music")
    audio.play();
  })

  
  // Bu Kendimizin gol sayısını kullanıcıdan istediğimiz butonun js

  function promptBGol(){
    const golSayisiC=prompt("Gol Sayısını Giriniz:");
    const golSayisiCInput=document.getElementById("pageİnput");

    if (golSayisiC !==null) {
      golSayisiCInput.value=golSayisiC;
    }
  }






