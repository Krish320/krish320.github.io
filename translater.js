
"use strict";

function translate(){
    const menu = document.getElementById("menu");
    menu.innerHTML = "Hi I am: " + usrlang;
}


var usrlang = navigator.language 
|| navigator.userLanguage;
console.log(
"User's preferred language is: "
+ usrlang);

var l_lang;
if (navigator.userLanguage) // Explorer
  l_lang = navigator.userLanguage;
else if (navigator.language) // FF
  l_lang = navigator.language;
else
  l_lang = "en";
