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
  if(Name.value.match(/^[a-zA-z ]*$/) && Name.value != 0){
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
  if(Email.value.match(emailTest) || Email.value != 0){
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
 if (State.value.match(stateTest) && State.value != 0){
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
var pizza = {

    cheese: [
        ['Light', 0],
        ['Normal', 0],
        ['Extra', 2.99],
        ['Double', 3.99]
    ],
    sauce: [
        ['Regular Tomato', 0],
        ['Hearty Tomato', .99],
        ['BBQ', 1.99]
    ],
    toppings: [
        ['Pepperoni', .99],
        ['Sausage', .99],
        ['Ham', .99],
        ['Bacon', .99],
        ['Salami', .99],
        ['Peppers', .99],
        ['Olives', .99],
        ['Jalapenos', .99],
        ['Mushrooms', .99],
        ['Pineapple', .99],
        ['Onion', .99]
    ],


}


var doughPrice = document.getElementById("dough-price");
var cheesePrice = document.getElementById("cheese-price");
var saucePrice = document.getElementById("sauce-price");
var toppings = document.getElementById("toppings");
// pulls the value of radio buttons
var dough = document.querySelector('.doughOptions');

var pizza = {
    crusts: ["Thin Crust", "Thick Crust", "New York Style", "Gluten Free"],
    thincrust: ["Small ($9.99)", "Medium ($10.99)", "Large ($11.99)", "X-Large ($12.99)"],
    thickcrust: ["Small ($9.99)", "Medium ($10.99)", "Large ($11.99)"],
    newyork: ["Medium ($10.99)", "Large ($11.99)"],
    glutenfree: ["Small ($11.99)"],
    cheese: ['Light ($0]', 'Normal $0','Extra 2.99','Double 3.99'],
    sauce: [
        ['Regular Tomato', 0],
        ['Hearty Tomato', .99],
        ['BBQ', 1.99]
      ]
};

/* ADD OPTIONS TO MENUS */
var crust = document.getElementById("crust");
pizza.crusts.forEach(function (element) {
    "use strict";
    var opt = document.createElement("option");
    opt.innerHTML = element;
    crust.appendChild(opt);
});
var thin = document.getElementById("thin");
pizza.thincrust.forEach(function (element) {
    "use strict";
    var opt = document.createElement("option");
    opt.innerHTML = element;
    thin.appendChild(opt);
});
var thick = document.getElementById("thick");
pizza.thickcrust.forEach(function (element) {
    "use strict";
    var opt = document.createElement("option");
    opt.innerHTML = element;
    thick.appendChild(opt);
});
var nys = document.getElementById("nys");
pizza.newyork.forEach(function (element) {
    "use strict";
    var opt = document.createElement("option");
    opt.innerHTML = element;
    nys.appendChild(opt);
});
var gluten = document.getElementById("gluten");
pizza.glutenfree.forEach(function (element) {
    "use strict";
    var opt = document.createElement("option");
    opt.innerHTML = element;
    gluten.appendChild(opt);
});

/* PRE HIDE MENUS */
thin.style.display = "none";
thick.style.display = "none";
nys.style.display = "none";
gluten.style.display = "none";

/* SHOW MENU BASED ON CRUST SELECTED */
var select = document.getElementById("options");
crust.addEventListener("change", function () {
    "use strict";
    switch (crust.options[crust.selectedIndex].value) {
        case "Thin Crust":
            thin.style.display = "block";
            thick.style.display = "none";
            nys.style.display = "none";
            gluten.style.display = "none";
            break;
        case "Thick Crust":
            thin.style.display = "none";
            thick.style.display = "block";
            nys.style.display = "none";
            gluten.style.display = "none";
            break;
        case "New York Style":
            thin.style.display = "none";
            thick.style.display = "none";
            nys.style.display = "block";
            gluten.style.display = "none";
            break;
        case "Gluten Free":
            thin.style.display = "none";
            thick.style.display = "none";
            nys.style.display = "none";
            gluten.style.display = "block";
            break;
    }
});

//binds value to select option


//  pizza.cheese.forEach(function (element, i) {
//
//            "use strict";
//            var opt = document.createElement("option");
//            opt.innerHTML = element;
//            cheesePrice.appendChild(opt);
//     });

//
// pizza.sauce.forEach(function (element, i) {
//
//           "use strict";
//           var opt = document.createElement("option");
//           opt.innerHTML = element;
//           saucePrice.appendChild(opt);
//    });
//
//    pizza.toppings.forEach(function(element, i){
//      "use strict";
//     var _toppings = pizza.toppings;
//     var opt = document.createElement("input");
//     var label = document.createElement("label");
//
//      opt.type = 'checkbox';
//      opt.value = _toppings[i];
//
//      opt.innerHTML = element;
//      toppings.appendChild(opt);
//      toppings.appendChild(label);
//      label.appendChild(document.createTextNode(_toppings[i]));
//
//    })

//stores value when changed
// var optionSelect = document.getElementsByName('optionSelect');
// optionSelect.addEventListener("change", function () {
//     "use strict";
//     window.console.log(optionSelect.options[optionSelect.selectedIndex].value);
// })
/*************** LUHN ALGORITHM **********************/

// var visa = {
//   prefix: [4],
//   numDigits: [13,16],
//   checkDigits: [10],
// };
// var masterCard = {
//   prefix: [51, 52, 53, 54, 55],
//   numDigits: [16],
//   checkDigits: [10]
// };
// var americanExpress = {
//   prefix: [37],
//   numDigits: [15],
//   checkDigits: [10]
// }
//
