// Initialize Firebase
var config = {
    apiKey: "AIzaSyD-OeWS2yOkCgIfZ5wPJwqB4KM_q7hvpdA",
    authDomain: "psicologica-firebase.firebaseapp.com",
    databaseURL: "https://psicologica-firebase.firebaseio.com",
    projectId: "psicologica-firebase",
    storageBucket: "",
    messagingSenderId: "46514218984"
};
firebase.initializeApp(config);

var emailRef = firebase.database().ref('emails');

//Colocando um escutador para saber quando houve o click no botão
document.getElementById('emailforms').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var email = document.getElementById('useremail').value;

    saveEmail(email)
}

function saveEmail(email){
    var newemailRef = emailRef.push();

    newemailRef.set({
        email: email
    });
}
