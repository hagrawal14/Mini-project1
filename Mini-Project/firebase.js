
  // Import the functions you need from the SDKs you need
  


  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
  import {getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBb9dROroGNZMSoIrCqnjPdmrJxmN7Tvdg",
    authDomain: "project-login-5b131.firebaseapp.com",
    projectId: "project-login-5b131",
    storageBucket: "project-login-5b131.appspot.com",
    messagingSenderId: "753408367305",
    appId: "1:753408367305:web:ecf85bf2a05ec95cd30b18"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();
  
  
  var signup = document.getElementById('register');
  signup.addEventListener('click', (e) => {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      let fname = document.getElementById('firstname').value;
      let lname = document.getElementById('lastname').value;
  
  
      if (validate_email(email) == false) {
          alert('Email is not valid');
          return;
      }
      if (validate_password(password) == false) {
          alert('Password is not valid');
          return;
      }
      // if (validate_fields(fname) == false) {
      //     alert('First name cannot be empty');
      //     return;
      // }
      // if (validate_fields(lname) == false) {
      //     alert('Last name cannot be empty');
      //     return;
      // }
      if (validate_fields(fname) == false) {
          return;
      }
      if (validate_fields(lname) == false) {
          return;
      }
  
  
  
      createUserWithEmailAndPassword(auth, email, password).then((userCredentials) => {
          const user = userCredentials.user;
  
          set(ref(database, 'user/' + user.uid), {
              email: email,
              fname: fname,
              lname: lname,
              last_login: Date.now()
          });
  
          alert('user created');
      }).catch((error) => {
          const errCode = error.code;
          const message = error.message;
          alert(message);
      })
  })
  
  
  
  var login = document.getElementById('login');
  login.addEventListener('click', (e) => {
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value;
      signInWithEmailAndPassword(auth, email, password).then((userCredentials) => {
          const user = userCredentials.user;
  
          update(ref(database, 'users/' + user.uid), {
              last_login: Date.now()
          })
  
        //   var login_container = document.getElementById('content-container');
        //   login_container.style.left = `2500px`;
        //   window.location.assign('./HTML/main_companies.html');
          alert('logged in successfully');
  
  
      }).catch((error) => {
          const errCode = error.code;
          const errMessage = error.message;
          alert(errMessage);
      })
  })
  
  
  
  const user = auth.currentUser;
  onAuthStateChanged(auth, (user) => {
      if (user) {
          user.perventDefault();
          const uid = user.uid;
      } else {
  
      }
  });
  
  
  var logout = document.getElementById('logout');
  logout.addEventListener('click', (e) => {
      signOut(auth).then(() => {
        //   window.location.assign('../index.html');
          alert('user logged out');
      }).catch((error) => {
          const errCode = error.code;
          const errMessage = error.message;
          alert(errMessage);
      });
  });
  
  
  
  function validate_email(email) {
      let expression = /^[^@]+@\w+(\.\w+)+\w$/;
      if (expression.test(email) == true) {
          return true;
      } else {
          return false;
      }
  }
  
  function validate_password(password) {
      if (password.length < 6) {
          return false;
      } else {
          return true;
      }
  }
  
  function validate_fields(field) {
      if (field == null) {
          alert('First name cannot be empty');
          return false;
      }
  
      if (field.length <= 0) {
          alert('First name cannot be empty');
          return false;
      } else {
          // return true;
          let expression = /^[A-Za-z]+$/;
          if (expression.test(field) == true) {
              return true;
          } else {
              alert('only letter are allowed in name');
              return false;
          }
      }
  }