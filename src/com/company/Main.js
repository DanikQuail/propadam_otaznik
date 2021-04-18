let pocetznamek = 0;
let znamky;
let mean;
let pridatznamky;
let propadam;
let vypocitatZnamky;

let zaklady = function () {
    znamky = document.getElementById("listvsechznamek");
    pridatznamky = document.getElementById("add_grade")
    mean = document.getElementById("meanId")
    propadam = document.getElementById("propadam_otaznik");
    
    vypocitatZnamky = document.getElementById("vypocitatpls")
    vypocitatZnamky.addEventListener("click", vypocitatFunkce)
    pridatznamky.addEventListener("click", add);

}

let generovaniContaineru = function () {
    let div = document.createElement('div')

    div.classList.add('input')

    let input1 = document.createElement("input")
    let input2 = document.createElement("input")

    let label1 = document.createElement("label")

    input1.className = "input1";
    input2.className = "input2";
    input1.placeholder = "Známka";
    input2.placeholder = "Váha";

    input1.id = 'grade' + pocetznamek;
    input2.id = 'weight' + pocetznamek;

    label1.className = "label1";

    label1.innerText = pocetznamek+ "." + " známka";

    div.appendChild(label1)
    div.appendChild(input1)
    div.appendChild(input2)

    znamky.appendChild(div)
}

let add = function () {
    pocetznamek++;
    
    generovaniContaineru();
}

let vypocitatFunkce = function () {
    let prumer = 0;
    let vahy = 0;
    let finalnivysledek = 0;
    let vysledek = 0;

    for (let i = 1; i < pocetznamek; i++) {

        let znamecky = document.getElementById("grade" + i);
        let ANOVAHYZNAMEK = document.getElementById('weight' + i);

        let vsechnyZnamky = parseInt(znamecky.value)
        let vsechnyVahy = parseInt(ANOVAHYZNAMEK.value)


        vysledek = vsechnyZnamky * vsechnyVahy;
        vahy += vsechnyVahy
        finalnivysledek += vysledek
        prumer = finalnivysledek / vahy

        vysledekJestliPropadam(prumer)
    }
}

function vysledekJestliPropadam(prumer) {
    if (prumer <= 40) {
        propadam.innerText = "POZOR, PROPADÁŠ, MUSÍŠ SE POLEPŠIT"
        mean.innerText = "Průměr: " + prumer.toFixed(3);
    } else {
        propadam.innerText = "Zatím nepropadáš, jsi šikulka, jen tak dál"
        mean.innerText = "Průměr: " + prumer.toFixed(3) + "%";
    }
}



window.onload = zaklady;
