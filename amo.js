
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

//REFERENCE MESSAGES COLLECTION
var messagesRef = firebase.database().ref('feedback');

//logout

const btnlogout =document.getElementById('btnlogout');

btnlogout.addEventListener('click', (e) => {
e.preventDefault();

const auth = firebase.auth();
const db = firebase.database();

firebase.auth().signOut().then(() =>{
	window.location = 'index.html';
});


});


const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});








document.getElementById('FeedbackForm').addEventListener('submit', submitform);

//SUBMIT FORM
function submitform(e){
	e.preventDefault();

	//get values
	var FirstName = getInputval('FirstName');
	var Surname = getInputval('Surname');
	var Phone = getInputval('Phone');
	var Which_Store = getInputval('Which_Store');
	var Message = getInputval('Message');

//SAVE MESSAGE
 	saveMessage(FirstName,Surname,Phone,Which_Store,Message);

 	//show alert
 	document.querySelector('.alert').style.display = 'block';

 	//hide alert after 3 seonds
 	setTimeout(function(){
 		document.querySelector('.alert').style.display = 'none';
 	},3000);

 	//clear the form
 	document.getElementById('FeedbackForm').reset();


}


//function to get form values
function getInputval(id){
	return document.getElementById(id).value;
}

//save messaghes to firebase
function saveMessage(FirstName,Surname,Phone,Which_Store,Message){
	var newMessageRef = messagesRef.push();
newMessageRef.set({
	FirstName: FirstName,
	Surname: Surname,
	Phone:Phone,
	Which_Store:Which_Store,
	Message:Message
});

}


//get data
db.collection('feedback').get().then(snapshot =>{
console.log(snapshot.docs)
});

