
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


let synth = window.speechSynthesis;




$$(".card").forEach((card) => {
    card.addEventListener("click", (e) => {

      let targetWord = e.currentTarget.getAttribute("data-target")
      console.log(targetWord)
      let utterance = new SpeechSynthesisUtterance(targetWord);
      let voices = synth.getVoices();
      for(var i = 0; i < voices.length ; i++) {
        console.log(voices[i].lang);
      if(voices[i].lang === "en-US") {
          utterance.voice = voices[i];
      }}
      
      synth.speak(utterance);

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
