(function(){
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAIUxvJOyE4hpljF6Xffzq2WZoHWSZSfMA",
      authDomain: "choppiesfeedback-23456.firebaseapp.com",
      databaseURL: "https://choppiesfeedback-23456.firebaseio.com",
      projectId: "choppiesfeedback-23456",
      storageBucket: "choppiesfeedback-23456.appspot.com",
      messagingSenderId: "621092921845"
    };

    firebase.initializeApp(config); 


//get elements
 const logEmail =document.getElementById('logEmail');
const logPassword =document.getElementById('logPassword');
const sigEmail =document.getElementById('sigEmail');
const sigPassword =document.getElementById('sigPassword');
const btnSignup =document.getElementById('btnSignup');
const btnlogin =document.getElementById('btnlogin');
const btnlogout =document.getElementById('btnlogout');

//add login event
btnlogin.addEventListener('click', e =>{
//get  email and pass
const email = logEmail.value;
const pass = logPassword.value;
const auth = firebase.auth();

//sign in
auth.signInWithEmailAndPassword(email, pass);

});

//add signup event
btnSignup.addEventListener('click', (e) => {
e.preventDefault();
//get  email and pass
const email = sigEmail.value;
const pass = sigPassword.value;
const auth = firebase.auth();

//sign in
 auth.createUserWithEmailAndPassword(email, pass);

 });

//logout




//realtime listener
 firebase.auth().onAuthStateChanged(user => {
if (user) {
  window.location = 'exaple.html';
}
 });




}());



















const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container2 = document.querySelector(".container2");

sign_up_btn.addEventListener("click", () => {
  container2.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container2.classList.remove("sign-up-mode");
});

 


(function ($) {
  "use strict";
  // Preloader 
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

})(jQuery);

