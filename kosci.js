/**
 * Created by cgpe on 2017-07-07.
 */

var liczbaGraczy = 4;
var rzut = 1;
var wybranaKosc = [false, false, false, false, false];
var tabelka = {
    gracz: {
        tytul: "Gracz"
    },
    t1: {
        tytul: "1"
    },
    t2: {
        tytul: "2"
    },
    t3: {
        tytul: "3"
    },
    t4: {
        tytul: "4"
    },
    t5: {
        tytul: "5"
    },
    t6: {
        tytul: "6"
    },
    tSuma: {
        tytul: "Razem"
    },
    u1: {
        tytul: "Jedna para"
    },
    u2: {
        tytul: "Dwie pary"
    },
    u3: {
        tytul: "Trójka"
    },
    u4: {
        tytul: "Czwórka"
    },
    u5: {
        tytul: "Full"
    },
    u6: {
        tytul: "Mały strit"
    },
    u7: {
        tytul: "Duży strit"
    },
    u8: {
        tytul: "Generał"
    },
    u9: {
        tytul: "Szansa"
    },
    uSuma: {
        tytul: "Razem"
    },
    sSumaRazem: {
        tytul: "Razem"
    }
}

var elementTabelka = document.getElementById("tabelka");

tabelkaHTML = "<table>";
Object.keys(tabelka).forEach(function (key) {
    tabelkaHTML += "<tr><td>";
    tabelkaHTML += tabelka[key].tytul;
    tabelkaHTML += "</td>";
    for (var i = 1; i <= liczbaGraczy; i += 1) {
        //tabelkaHTML += ("<td><input type='number' " + "name='" + key + i + "'></td>");
        switch (key) {
            case "gracz":
                tabelkaHTML +=
                    ("<td><input value='Gracz' style='text-align:center;' type='text' class='gracz'" +
                    "name='" + key + i + "' id='" + key + i + "'></td>");
                break;
            case "tSuma":
                tabelkaHTML +=
                    ("<td><input value=2 style='text-align:right;' type='text' class='tSuma'" +
                    "name='" + key + i + "' id='" + key + i + "'></td>");
                break;
            case "uSuma":
                tabelkaHTML +=
                    ("<td><input value=2 style='text-align:right;' type='text' class='uSuma'" +
                    "name='" + key + i + "' id='" + key + i + "'></td>");
                break;
            case "sSumaRazem":
                tabelkaHTML +=
                    ("<td><input value=2 style='text-align:right;' type='text' class='sSumaRazem'" +
                    "name='" + key + i + "' id='" + key + i + "'></td>");
                break;


            default:
                tabelkaHTML +=
                    ("<td><input value=2 style='text-align:right;' type='text' " +
                    "name='" + key + i + "' id='" + key + i + "'></td>");
        }
    }

    tabelkaHTML += "</tr>";

});

tabelkaHTML += "</table>"


elementTabelka.innerHTML = tabelkaHTML;


var obliczArek = function () {
    for (var i = 1; i <= liczbaGraczy; i += 1) {
        var sumaT = 0;
        for (var j = 1; j <= 6; j += 1) {
            var element = document.getElementById("t" + j + i);
            //sumaT += (isNaN(parseInt(element.value)))||parseInt(element.value);
            sumaT += parseInt(element.value) || 0;
        }
        var elementSumaRT = document.getElementById("tSuma" + i);
        if (sumaT > 15) {
            sumaT += 50;
        } else if (sumaT < 0) {
            sumaT -= 100;
        } else {
            sumaT += 0;
        }
        elementSumaRT.value = sumaT;
    }

    for (var i = 1; i <= liczbaGraczy; i += 1) {
        var sumaU = 0;
        for (var j = 1; j <= 8; j += 1) {
            var element = document.getElementById("u" + j + i);
            //sumaT += (isNaN(parseInt(element.value)))||parseInt(element.value);
            sumaU += parseInt(element.value) || 0;
        }
        var elementSumaRU = document.getElementById("uSuma" + i);
        elementSumaRT = document.getElementById("tSuma" + i);
        elementSumaRU.value = sumaU;
        var element = document.getElementById("sSumaRazem" + i);
        element.value = parseInt(elementSumaRT.value) + parseInt(elementSumaRU.value);
    }


}

var resetujGre = function () {
    var klucz = "213";
    //var wprowadzonyKlucz = prompt("Aby rozpocząc nową grę wprowadź: 213");
    wprowadzonyKlucz = klucz;
    if (klucz == wprowadzonyKlucz) {
        for (var i = 1; i <= liczbaGraczy; i += 1) {
            for (var j = 1; j <= 6; j += 1) {
                var elementT = document.getElementById('t' + j + i);
                elementT.value = "";
            }
            for (var j = 1; j <= 9; j += 1) {
                var elementT = document.getElementById('u' + j + i);
                elementT.value = "";
            }

        }
    }

    wyczyscZaznaczenia();

    ustawPierwszyRzut();

    obliczArek();

}

var rzutKosci = function () {
    var wynik = [];
    if (rzut === 1) {
        wyczyscZaznaczenia();
    }
    rzut += 1;

    for (var i = 1; i <= 5; i += 1) {
        if (!wybranaKosc[i - 1]) {
            wynik[i - 1] = getRandomIntInclusive(1, 6);
            kosc = document.getElementById("kosc" + i);
            kosc.setAttribute("src", "wynik" + wynik[i - 1] + ".svg");
        }
    }
    if (rzut > 3) {
        rzut = 1;
    }
    var nrRzutu = document.getElementById("nrRzutu");
    nrRzutu.innerHTML = "(" + (rzut) + ")";
    //console.log(wybranaKosc);
}

var zmienZaznaczenie = function (nrKosci) {
    kosc = document.getElementById("kosc" + nrKosci);
    if (wybranaKosc[nrKosci - 1]) {
        kosc.style.borderColor = "transparent";
    } else {
        kosc.style.borderColor = "black";
    }

    wybranaKosc[nrKosci - 1] = !wybranaKosc[nrKosci - 1];

    //console.log(wybranaKosc);

}

var wyczyscZaznaczenia = function () {
    for (var i = 1; i <= 5; i += 1) {
        if (wybranaKosc[i - 1]) {
            zmienZaznaczenie(i);
        }
    }

}

var ustawPierwszyRzut = function () {
    rzut = 1;
    var nrRzutu = document.getElementById("nrRzutu");
    nrRzutu.innerHTML = "(" + (rzut) + ")";

}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

// Podpięcie zdarzeń

// Obliczenie sum
var elementOblicz = document.getElementById("oblicz");
elementOblicz.addEventListener('click', obliczArek);

// Nowa gra - reset ustawień
var elementReset = document.getElementById("reset");
elementReset.addEventListener('click', resetujGre);

// Rzut kości
var elementRzut = document.getElementById("rzut");
elementRzut.addEventListener('click', rzutKosci);

// Pozostawienie kości - zaznaczanie/ odznaczenie kości, które nie będą rzucane
for (let i = 1; i <= 5; i += 1) {
    var elementKosc = document.getElementById("kosc" + i);
    elementKosc.addEventListener('click', function () {
        zmienZaznaczenie(i);
    });
}

// Następny gracz
var elementNastepnyGracz = document.getElementById("nastepny");
elementNastepnyGracz.addEventListener('click', function () {
    wyczyscZaznaczenia();
    ustawPierwszyRzut();
});

// Ustaw nową grę
resetujGre();
