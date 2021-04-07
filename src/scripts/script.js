document.addEventListener("DOMContentLoaded", ()=>{

window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);

const afficherFeedback = (message) => {
  let feedback = document.querySelector(".feedbackMessage");
  feedback.innerHTML = message;
};

// let voices = speechSynthesis.getVoices();
// for(var i = 0; i < voices.length ; i++) {
//   console.log(voices[i].lang);
// if(voices[i].lang === "en-US") {
//     utterance.voice = voices[i];
// }
// }
let isEnglish = false;
let isJapanese = false;

// let synth = window.speechSynthesis;
let isSpeech = {isEnglish, isJapanese}
const getVoices = () => {
  if (!speechSynthesis) {
    alert("API not supported");
    return { isEnglish, isJapanese };
  }
  let voices = speechSynthesis.getVoices();
  // console.log(voices);
  for (var i = 0; i < voices.length; i++) {
    // console.log(voices[i].lang);
    if (voices[i].lang === "en-US") {
      // utterance.voice = voices[i];
      isEnglish = true;
      // isJapanese = false;
    }
    if (voices[i].lang === "ja-JP") {
      // utterance.voice = voices[i];
      // isEnglish = false;
      isJapanese = true;
    }
  }
  console.log("voices retrieved")
  return { isEnglish, isJapanese };
};

$("#toggleSpeech").addEventListener("change", (e) => {
  if (e.currentTarget.checked){
    console.log("User wants speech")
    isSpeech = getVoices();
  } else{
    console.log("User doesn't want speech")

  }
})

$$(".card").forEach((card) => {
  card.addEventListener("click", (e) => {
    

    let targetWord = e.currentTarget.getAttribute("data-target");
    let sourceWord = e.currentTarget.getAttribute("data-source");
    // console.log(targetWord);

    if (isSpeech.isJapanese && $("#toggleSpeech").checked) {
      let utterance = new SpeechSynthesisUtterance(sourceWord);
      utterance.lang = "ja-JP";
      speechSynthesis.speak(utterance);
    }
    if (isSpeech.isEnglish && $("#toggleSpeech").checked) {
      let utterance = new SpeechSynthesisUtterance(targetWord);
      utterance.lang = "en-US";
      speechSynthesis.speak(utterance);
    }

    if ($(".flipped")) {
      // lg()
      if (e.currentTarget.classList.contains("flipped")) {
        // clicked book was flipped
        e.currentTarget.classList.remove("flipped");
      } else {
        $(".flipped").classList.remove("flipped");
        e.currentTarget.classList.add("flipped");
      }
    } else {
      // no cards flipped
      e.currentTarget.classList.add("flipped");
    }
    // lg(e.currentTarget)
  });
});
})