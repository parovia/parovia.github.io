//Get form element
const form = document.getElementById("formDate");
const dateControl = document.getElementById("dateControl");
const login = document.getElementById("login");
const landing = document.getElementById("landing");
const main = document.getElementById("main");
const sadFace = document.getElementById("sadFace");
const nobtn = document.getElementById("nobtn");
const yesbtn = document.getElementById("yesbtn");

const width = document.body.offsetWidth-200;
const height = document.body.offsetHeight-200;

const audio = new Audio('fin.mp3');
audio.pause();

function submitForm(event){
   //Preventing page refresh
   event.preventDefault();
   

   if (dateControl.value === "2022-03-05" || true) {
    login.classList.add('hidden');
    landing.classList.remove('hidden');

   }
   else {
    console.log("no")

    sadFace.classList.remove('novis');
    setTimeout(() => {
        sadFace.classList.add('novis');
      }, "1000");

   }
}


function clickNo() {

    x = randomInt(-width/2, width/2);
    y = randomInt(-height/2, height/2);
    
    console.log(x, y)
    nobtn.style.top = y.toString() + "px";
    nobtn.style.left = x.toString() + "px";

}

function clickYes() {
    landing.classList.add('hidden');
    main.classList.remove("hidden");
    audio.play();
}

//Calling a function during form submission.
form.addEventListener('submit', submitForm);


function randomInt(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }