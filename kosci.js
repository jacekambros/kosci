/**
 * Created by cgpe on 2017-07-07.
 */

var liczbaGraczy = 4;
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
        tytul: "Mały strit"
    },
    u6: {
        tytul: "Duży strit"
    },
    u7: {
        tytul: "Generał"
    },
    u8: {
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
    console.log(key, tabelka[key].tytul);
    tabelkaHTML += "<tr><td>";
    tabelkaHTML += tabelka[key].tytul;
    tabelkaHTML += "</td>";
    for (var i = 1; i <= liczbaGraczy; i += 1) {
        //tabelkaHTML += ("<td><input type='number' " + "name='" + key + i + "'></td>");
        switch (key) {
            case "gracz":
                tabelkaHTML +=
                    ("<td><input value='Gracz' style='text-align:right;' type='text' " +
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
//tabelkaHTML += "</tr>"

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
        elementSumaRU.value = sumaU;
        var element = document.getElementById("sSumaRazem" + i);
        element.value = parseInt(elementSumaRT.value) + parseInt(elementSumaRU.value);
    }


}

var resetujGre = function () {
    var klucz = "213";
    var wprowadzonyKlucz = prompt("Aby rozpocząc nową grę wprowadź: 213");
    if (klucz == wprowadzonyKlucz) {
        for (var i = 1; i <= liczbaGraczy; i += 1) {
            for (var j = 1; j <= 6; j += 1) {
                var elementT = document.getElementById('t' + j + i);
                elementT.value = "";
            }
            for (var j = 1; j <= 8; j += 1) {
                var elementT = document.getElementById('u' + j + i);
                elementT.value = "";
            }

        }
    }

    obliczArek();
}

var elementOblicz = document.getElementById("oblicz");
elementOblicz.addEventListener('click', obliczArek);

var elementReset = document.getElementById("reset");
elementReset.addEventListener('click', resetujGre);

resetujGre();
