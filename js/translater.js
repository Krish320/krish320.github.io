"use strict";

import translations_ca from "../lng/catalan.json" assert { type: 'json' };;
import translations_en from "../lng/english.json" assert { type: 'json'};;
import translations_vi from "../lng/vietnamese.json" assert { type: 'json'};;
import translations_ro from "../lng/romanian.json" assert { type: 'json' };;

let usrlang;
if (navigator.userLanguage) // Explorer
    usrlang = navigator.userLanguage;
else if (navigator.language) // FF
    usrlang = navigator.language;
else
    usrlang = "en";

window.translate = () => {
    
    let json_ca = JSON.stringify(translations_ca);
    let json_ca_Parse = JSON.parse(json_ca);

    let json_vi = JSON.stringify(translations_vi);
    let json_vi_Parse = JSON.parse(json_vi);

    let json_ro = JSON.stringify(translations_ro);
    let json_ro_Parse = JSON.parse(json_ro);

    let usr_lng = usrlang.slice(0,2);

    if (usr_lng == "en") {
        let json_en = JSON.stringify(translations_en);
        let json_en_Parse = JSON.parse(json_en);

        const menu = document.getElementById("starter");
        
        translate(json_en_Parse, "translations_en");
    }
};

function translate(json_parse, json_lng){
    for (let z in json_parse[json_lng][0]) {
        const menu = document.getElementById(z);
        menu.innerHTML = json_parse[json_lng][0][z];
        console.log(json_parse[json_lng][0][z]);                   
    }
}