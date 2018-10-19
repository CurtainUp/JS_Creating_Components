// ----FIRST ADVANCED CHALLENGE-------

// Selects first element with ID of "messages"
// let messages = document.querySelector("#messages");

// let convo = [
//   {
//     text: "Did you wrap the trampoline?"
//   },
//   {
//     text: "I started it but I need help."
//   },
//   {
//     text: "Ok, I'll be home soon"
//   },
//   {
//     text: "Bring more paper"
//   },
//   {
//     text: "...I'll just get a giant bow"
//   }
// ]

// function talk(words) {
//   words.forEach((item) => {
//     // Creates section with class of "message"
//     let message = document.createElement("section");
//     message.className = "message";
//     message.textContent = item.text;

//     // Inserts section into the DOM by appending to messages article
//     messages.appendChild(message);
//   })
// }

// talk(convo)

// -------SECOND ADVANCED CHALLENGE-----------
const fragment = document.createDocumentFragment()
// let messages = document.querySelector("#messages");

let convo = [
  {
    text: "Did you wrap the trampoline?"
  },
  {
    text: "I started it but I need help."
  },
  {
    text: "Ok, I'll be home soon"
  },
  {
    text: "Bring more paper"
  },
  {
    text: "...I'll just get a giant bow"
  }
]

function talk(words) {
  words.forEach((item) => {
    // Creates section with class of "message"
    let message = document.createElement("section");
    message.className = "message";
    message.textContent = item.text;

    // Inserts section into the DOM by appending to messages article
    fragment.appendChild(message);
    document.querySelector("#messages").appendChild(fragment)
  })
}

talk(convo)