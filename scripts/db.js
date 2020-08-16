console.log("db.js lauched");

const db = firebase.firestore();
const collectionName = ""


// offline data support
// db.enablePersistence().catch((err) => {
//   if (err.code == "failed-precondition") {
//     console.log("persistence failed");
//   } else if (err.code == "unimplemented") {
//     console.log("persistence is not available");
//   }
// });


db.collection(collectionName).get().then((snapshot) => {
  render_docs(snapshot.docs)
  
});

const delete_document = (e) => {
  let id = e.target.getAttribute("data-id");
  db.collection("users").doc(id).delete();
};

const add_document = (data, id) => {
  id = id ? id : `word${Date.now()}`;
  db.collection("users")
    .doc(id)
    .set(data)
    .then(() => afficherFeedback("Token sent to server"))
    .catch((error) => console.log(error));
};

// const users = document.querySelector(".users");
const render_documents = (docs) => {
  //   console.log(document, id);
  docs.forEach(doc =>{
    console.log(doc.data())
  })
  return null;
  //   users.innerHTML = `<li>${document.fcm}</li>` + users.innerHTML
};

// const remove_document = (id) => {
//   console.log(id);
// };
