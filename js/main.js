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

//Criação da base de dados "email" no Firebase
var emailRef = firebase.database().ref('emails');

//Colocando um escutador para saber quando houve o click no botão
//O getElementById identifica o espaço onde está o formulário (qual formulário deseja pegar o submit)
//O addEventListener sabe quando o o botão SVGNumberList, do formulário, foi clicado e chama a função que será executada após o click do botão
document.getElementById('emailforms').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    var email = document.getElementById('useremail').value;
    var nome = document.getElementById('nomedigitado').value;
    var data = new Date();
    var dia = data.toString();
    saveEmail(email, dia, nome)
}

function saveEmail(email, dia, nome){
    //"newEmail" está recebendo a função do "push" do Firebase, para poder mandar a informação para o Firebase 
    var newemailRef = emailRef.push();
    //A variável "email" do Firebase vai receber a nossa variável "email" 
    newemailRef.set({
        email: email,
        dia: dia,
        nome: nome
    });
}
