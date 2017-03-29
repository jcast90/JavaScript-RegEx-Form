
var AddressType = document.getElementById('addressType');
var Submit = document.getElementById('submit');
var input = document.getElementById('otherInput');
var AllInputs = document.querySelectorAll('input[type="text"]');



AddressType.addEventListener('change', function(){

  if (AddressType.value === "other"){
    input.classList.remove('hidden');
  }else{
    input.classList.add('hidden');
  }
}, false);


var State = document.getElementById('state');
var Phone = document.getElementById('phone');
var Name = document.getElementById('name');
var Zip = document.getElementById('zip');
var Email = document.getElementById('email');
// NAME VERIFICATION => + check if empty

Name.addEventListener('focusout', focus, false);

function focus(){
  if(Name.value.match(/^[a-zA-z ]*$/)){
    Name.style.border = "solid 3px green";
      return true;

  }else{
    Name.style.border = "solid 3px red";
    Name.value = "";

  }
};


// ZIP VERIFICATION => + check if empty

Zip.addEventListener('focusout', zipF, false);
function zipF(){
  var zipTest = /^([0-9]{5}(?:-[0-9]{4})?)/;
  if(Zip.value.match(zipTest)){
    Zip.style.border = "solid 3px green";
      return true;
  }else{
    Zip.style.border = "solid 3px red";
}
}

// EMAIL VERIFICATION => + check if empty

Email.addEventListener('focusout', emailF, false);
function emailF(){
  var emailTest = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/;
  if(Email.value.match(emailTest)){
    Email.style.border = "solid 3px green";
      return true;
  }else{
    Email.style.border = "solid 3px red";
  }
}


// STATE VERIFICATION => + check if empty
var State = document.getElementById('state');
State.addEventListener('focusout', stateF, false);

function stateF(){
 var stateTest = /^(?:A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])*$/;
 if (State.value.match(stateTest)){
   State.style.border = "solid 3px green";
     return true;
 }else{
   State.style.border = "solid 3px red";
   return State.value = "";

 }
}




// PHONE VERIFICATION => add to check if empty
var Phone = document.getElementById('phone');
Phone.addEventListener('focusout', phoneF, false);

function phoneF(){
 var phoneTest = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
 if (Phone.value.match(phoneTest)){
   Phone.style.border = "solid 3px green";
     return true;
 } else{
   Phone.style.border = "solid 3px red";
   return Phone.value = "";

 }
}


function inputsTrue(){
if (AllInputs === true){
    Submit.classList.remove('hidden');
}else{
    Submit.classList.add('hidden');
}
};
    
inputsTrue();

// function required(){
//   // name doesn't contain numbers;
//   input.match()
//   // email is properly formatted;
//   // phone is properly formatted;
//   // zip code is properly formatted;
//   // state contains to Alpha characters;
// }
