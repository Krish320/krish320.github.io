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

    let usr_lng = usrlang.slice(0, 2);

    if (usr_lng == "ca") {
        setLanguage(translations_ca, "translations_ca");
    }

    else if (usr_lng == "ro") {
        setLanguage(translations_ro, "translations_ro");
    }

    else if (usr_lng == "vi") {
        setLanguage(translations_vi, "translations_vi");
    }

    else {
        setLanguage(translations_en, "translations_en");
    }
};

function translate(json_parse, json_lng) {
    for (let z in json_parse[json_lng][0]) {
        const HTML_element = document.getElementById(z);
        HTML_element.innerHTML = json_parse[json_lng][0][z];
        console.log(json_parse[json_lng][0][z]);
    }
}

function setLanguage(jsonName, jsonNameString) {
    let json = JSON.stringify(jsonName);
    let jsonParse = JSON.parse(json);
    translate(jsonParse, jsonNameString);
}