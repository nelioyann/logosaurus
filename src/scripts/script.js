
window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);


const afficherFeedback = message =>{
    let feedback = document.querySelector(".feedbackMessage")
    feedback.innerHTML = message
    

}








// let voices = speechSynthesis.getVoices();
// for(var i = 0; i < voices.length ; i++) {
//   console.log(voices[i].lang);
// if(voices[i].lang === "en-US") {
//     utterance.voice = voices[i];
// }
// }
let isEnglish = false;
let isJapanese = false;

let synth = window.speechSynthesis;


const getVoices = () => {
    let voices = synth.getVoices();
    console.log(voices)
    for(var i = 0; i < voices.length ; i++) {
      console.log(voices[i].lang);
    if(voices[i].lang === "en-US") {
        // utterance.voice = voices[i];
        isEnglish = true;
        // isJapanese = false;
    } if(voices[i].lang === "ja-JP") {
      // utterance.voice = voices[i];
      // isEnglish = false;
      isJapanese = true;
    }
  }
  return({isEnglish, isJapanese})
}


$$(".card").forEach((card) => {
    card.addEventListener("click", (e) => {




      let isSpeech = getVoices()

      let targetWord = e.currentTarget.getAttribute("data-target")
      let sourceWord = e.currentTarget.getAttribute("data-source")
      console.log(targetWord)
      
      if(isSpeech.isJapanese) {
        let utterance = new SpeechSynthesisUtterance(sourceWord);
        utterance.lang = "ja-JP";
        synth.speak(utterance);

      }
      if(isSpeech.isEnglish) {
        let utterance = new SpeechSynthesisUtterance(targetWord);
        utterance.lang = "en-US";
        synth.speak(utterance);

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
