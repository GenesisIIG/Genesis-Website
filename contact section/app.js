<script type="module" > 
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";
</script>
var firebaseConfig = {
    apiKey: "AIzaSyANSnNAqtBw8-SUlkItMakonOLaUpYinEE",
    authDomain: "genesis-contact.firebaseapp.com",
    databaseURL: "https://genesis-contact-default-rtdb.firebaseio.com",
    projectId: "genesis-contact",
    storageBucket: "genesis-contact.appspot.com",
    messagingSenderId: "866042026802",
    appId: "1:866042026802:web:37bd5f94ce85ee9549552b"
  };

  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  const app = initializeApp(firebaseConfig);
  // Refernece contactInfo collections
  var contactInfo = app.database().ref("infos");
  
  // Listen for a submit
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    //   Get input Values
    let name = document.querySelector(".contact-form-text").value;
    let phone = document.querySelector(".contact-form-text").value;
    let email = document.querySelector(".contact-form-text").value;
    let message = document.querySelector(".contact-form-text").value;
    console.log(name, email, phone, message);
  
    saveContactInfo(name, email, phone, message);
  
    document.querySelector(".contact-form").reset();
  }
  
  // Save infos to Firebase
  function saveContactInfo(name, email, phone, message) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      name: name,
      email: email,
      phone: phone,
      message: message,
    });
  }