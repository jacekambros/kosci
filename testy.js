/**
 * Created by cgpe on 2017-07-17.
 */
// Biblioteka funkcji testowych
var testRzucKosci = function () {
    tablicaWynikow = [0, 0, 0, 0, 0, 0];
    for (var i = 0; i < 1000; i += 1) {
        tablicaWynikow[getRandomIntInclusive(1, 6) - 1]++;
    }
    console.log(tablicaWynikow);

}
var testPokera = function () {
    var wynik = [];
    var poker = [0, 0, 0, 0, 0, 0, 0];
    for (var j = 1; j < 100000; j += 1) {
        var mozeBycPoker = true;
        for (var i = 1; i <= 6; i += 1) {
            wynik[i] = getRandomIntInclusive(1, 6);
            //kosc = document.getElementById("kosc" + i);
            //kosc.setAttribute("src", "wynik" + wynik[i] + ".svg");
            if (mozeBycPoker) {
                if (i > 1) {
                    if (wynik[i] != wynik [i - 1]) {
                        mozeBycPoker = false;
                    }
                }
                if ((i == 6) && mozeBycPoker) {
                    poker[wynik[i]]++;
                }
            }
        }
    }
    alert("Koniec rzucania!!!");
    console.log(poker);
}
