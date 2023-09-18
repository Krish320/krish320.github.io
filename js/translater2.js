//import translations_ca from "../lng/catalan.json" assert { type: 'json'};;
//import translations_en from "../lng/english.json" assert { type: 'json'};;
//import translations_vi from "../lng/vietnamese.json" assert { type: 'json'};;
//import translations_ro from "../lng/romanian.json" assert { type: 'json' };;

async function populate(json_filepath, json_lng) {
    const requestURL = json_filepath;
    const request = new Request(requestURL);

    const response = await fetch(request);
    const jsonText = await response.json();
    
    //const superHeroes = JSON.parse(jsonText);
    translate(jsonText, json_lng)
}

window.addEventListener("load", (event) => {
    //console.log("page is fully loaded");
    language();
});

//split url
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
}

function language() {
    let lang = getUrlParameter("lang");

    if (lang == "cat") {
        populate("/lng/catalan2.json", "translations_ca")
    }
    else if (lang == "spa") {
        populate("/lng/spanish2.json", "translations_es")
    }
    else if (lang == "rom") {
        populate("/lng/romanian2.json", "translations_ro")
    }
    else if (lang == "vie") {
        populate("/lng/vietnamese2.json", "translations_vi")
    }
    else if (lang == "eng") {
        populate("/lng/english2.json", "translations_en")
    }
}

/*function building() {

    let usr_lng = getUserLanguage().slice(0, 2);

    if (usr_lng == "ca") {
        populate("/lng/catalan2.json", "translations_ca")
    }
    else if (usr_lng == "es") {
        populate("/lng/spanish2.json", "translations_es")
    }
    else if (usr_lng == "ro") {
        populate("/lng/romanian2.json", "translations_ro")
    }
    else if (usr_lng == "vi") {
        populate("/lng/vietnamese2.json", "translations_vi")
    }
    else {
        populate("/lng/english2.json", "translations_en")
    }
}*/

function translate(json_parse, json_lng) {
    for (let z in json_parse[json_lng][0]) {
        const HTML_element = document.getElementById(z);
        HTML_element.innerHTML = json_parse[json_lng][0][z];
        //console.log(json_parse[json_lng][0][z]);
    }
}

/*function getUserLanguage() {
    let usrlang;
    if (navigator.userLanguage) // Explorer
        usrlang = navigator.userLanguage;
    else if (navigator.language) // FF
        usrlang = navigator.language;
    else
        usrlang = "en";

    return usrlang;
}*/