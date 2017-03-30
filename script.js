//Part I Delivery Form
var AddressType = document.getElementById('addressType');
var Submit = document.getElementById('submit');
var input = document.getElementById('otherInput');
var inputNumber = document.getElementById('number');
var roomType = document.getElementById('room-type');

AddressType.addEventListener('change', function(){

  if (AddressType.value === "other"){
    input.classList.remove('hidden');
  }else{
    input.classList.add('hidden');
  }
}, false);

roomType.addEventListener('change', function(){
    var numberType = document.getElementsByName('number1');
    if(roomType.value === 'suite'){
        inputNumber.classList.remove('hidden');
        numberType[0].placeholder = 'Suite Number';
    } else if(roomType.value === 'room'){
        inputNumber.classList.remove('hidden');
          numberType[0].placeholder = 'Room Number';
    } else if(roomType.value === 'apt'){
        inputNumber.classList.remove('hidden');
         numberType[0].placeholder = 'Apartment Number';
    } else{
        inputNumber.classList.add('hidden');
    }
}, false)



var State = document.getElementById('state');
var Phone = document.getElementById('phone');
var Name = document.getElementById('name');
var Zip = document.getElementById('zip');
var Email = document.getElementById('email');
// NAME VERIFICATION => + check if empty

Name.addEventListener('focusout', focus, false);

function focus(){
  if(Name.value.match(/^[a-zA-z ]*$/)){
    Name.classList.add('valid');
      return true;

  }else{
    Name.classList.add('invalid');
    Name.value = "";

  }
};


// ZIP VERIFICATION => + check if empty

Zip.addEventListener('focusout', zipF, false);
function zipF(){
  var zipTest = /^([0-9]{5}(?:-[0-9]{4})?)/;
  if(Zip.value.match(zipTest)){
    Zip.classList.add('valid');
      return true;
  }else{
    Zip.classList.add('invalid');
}
}

// EMAIL VERIFICATION => + check if empty

Email.addEventListener('focusout', emailF, false);
function emailF(){
  var emailTest = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/;
  if(Email.value.match(emailTest)){
    Email.classList.add('valid');
      return true;
  }else{
    Email.classList.add('invalid');
  }
}


// STATE VERIFICATION => + check if empty
var State = document.getElementById('state');
State.addEventListener('focusout', stateF, false);

function stateF(){
 var stateTest = /^(?:A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])*$/;
 if (State.value.match(stateTest)){
   State.classList.add('valid');
     return true;
 }else{
   State.classList.add('invalid');
   return State.value = "";

 }
}




// PHONE VERIFICATION => add to check if empty
var Phone = document.getElementById('phone');
Phone.addEventListener('focusout', phoneF, false);

function phoneF(){
 var phoneTest = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
 if (Phone.value.match(phoneTest)){
   Phone.classList.add('valid');
     Phone.classList.remove('invalid');
     return true;
 } else{
   Phone.classList.add('invalid');
   return Phone.value = "";

 }
}

Submit.addEventListener('click', inputsTrue, false);

function inputsTrue(){
    var form = document.getElementById('form');
 if (phoneF() &&  stateF() && zipF() && focus() && emailF()){
    form.classList.remove('hidden');
}else{
    form.classList.add('hidden');
}
};
    
//PART II

//var pizza = {
//  doughType: {
//    ht: {
//      size: ['small', 'medium', 'large'],
//      price: [9.99, 12.99, 14.99]
//    },
//    tc: {
//      size: ['medium', 'large'],
//      price: [11.99, 13.99]
//    },
//    nyS: {
//      size: ['large', 'extra-large'],
//      price: [16.99, 19.99]
//    },
//    gf: {
//      size: ['small'],
//      price: [10.99]
//    }
//  },
//  cheese: {
//    amount: ['light', 'normal', 'extra', 'double'],
//    price: [0, 0, 2.99, 3.99]
//  },
//  sauce: {
//    amount: ['regular tomato', 'hearty tomato', 'bbq'],
//    price: [0, .99, 1.99]
//  },
//  toppings: {
//    ingredients: ['pepperoni', 'sausage', 'ham', 'bacon', 'salami', 'peppers', 'olives', 'jalapenos', 'mushrooms', 'pineapple', 'onion'],
//    price: [.99, .99, .99, .99, .99, .99, .99, .99, .99, .99, .99]
//  }
//}




var pizza = {
   thincrust: [("Small", "$1.99"), ("Medium",  "$2.99"), ("Large" , "$3.99")],
    thickcrust: ["Small ($1.99)", "Medium ($2.99)", "Large ($3.99)"],
    newyork: ["Small ($1.99)", "Medium ($2.99)", "Large ($3.99)"],
    glutenfree: ["Small ($1.99)", "Medium ($2.99)", "Large ($3.99)"]
};


var select = document.getElementById("options");

// pulls the value of radio buttons
var dough = document.querySelector('.doughOptions');

var selectDoughType = dough.addEventListener('click', function(){ 
                            for (var i = 0; i < dough.elements.length; i++){
                                if(dough.elements[i].type == 'radio'){
                                    if(dough.elements[i].checked == true){
                                        var doughResults = dough.elements[i].value;
                                        console.log(doughResults);
                                        
                                   }
                                }
                            }
                        }, false);
                      


//binds value to select option

                 funciton
                      pizza.forEach(function (element, i, pizza) {
                          
                                "use strict";
                                var opt = document.createElement("option");
                                opt.innerHTML = element;
                                select.appendChild(opt);
                         });
                
//stores value when changed
select.addEventListener("change", function () {
    "use strict";
    window.console.log(select.options[select.selectedIndex].value);
})