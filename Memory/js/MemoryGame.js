var MemoryGame;
(function (MemoryGame) {
    //Array, das alle Spielkarten für den einfachen Schwierigkeitsgrad enthält (als Objekte)
    var easyCards = [
        // Kartenpaar 1
        {
            pic: "material/EasyCards/1.png",
            compare: 1,
            found: false //Boolean für gefunden/noch nicht gefunden
        },
        {
            pic: "material/EasyCards/1.png",
            compare: 1,
            found: false
        },
        // Kartenpaar 2
        {
            pic: "material/EasyCards/2.png",
            compare: 2,
            found: false
        },
        {
            pic: "material/EasyCards/2.png",
            compare: 2,
            found: false
        },
        // Kartenpaar 3
        {
            pic: "material/EasyCards/3.png",
            compare: 3,
            found: false
        },
        {
            pic: "material/EasyCards/3.png",
            compare: 3,
            found: false
        },
        // Kartenpaar 4
        {
            pic: "material/EasyCards/4.png",
            compare: 4,
            found: false
        },
        {
            pic: "material/EasyCards/4.png",
            compare: 4,
            found: false
        }
    ];
    //Alle Spielkarten für den mittleren Schwierigkeitsgrad
    var mediumCards = [
        // Kartenpaar 1
        {
            pic: "material/MediumCards/1.png",
            compare: 1,
            found: false
        },
        {
            pic: "material/MediumCards/2.png",
            compare: 1,
            found: false
        },
        // Kartenpaar 2
        {
            pic: "material/MediumCards/3.png",
            compare: 2,
            found: false
        },
        {
            pic: "material/MediumCards/4.png",
            compare: 2,
            found: false
        },
        // Kartenpaar 3
        {
            pic: "material/MediumCards/5.png",
            compare: 3,
            found: false
        },
        {
            pic: "material/MediumCards/6.png",
            compare: 3,
            found: false
        },
        // Kartenpaar 4
        {
            pic: "material/MediumCards/7.png",
            compare: 4,
            found: false
        },
        {
            pic: "material/MediumCards/8.png",
            compare: 4,
            found: false
        },
        // Kartenpaar 5
        {
            pic: "material/MediumCards/9.png",
            compare: 5,
            found: false
        },
        {
            pic: "material/MediumCards/10.png",
            compare: 5,
            found: false
        },
        // Kartenpaar 6
        {
            pic: "material/MediumCards/11.png",
            compare: 6,
            found: false
        },
        {
            pic: "material/MediumCards/12.png",
            compare: 6,
            found: false
        },
        // Kartenpaar 7
        {
            pic: "material/MediumCards/13.png",
            compare: 7,
            found: false
        },
        {
            pic: "material/MediumCards/14.png",
            compare: 7,
            found: false
        },
        // Kartenpaar 8
        {
            pic: "material/MediumCards/15.png",
            compare: 8,
            found: false
        },
        {
            pic: "material/MediumCards/16.png",
            compare: 8,
            found: false
        }
    ];
    //Alle Spielkarten für den schwersten Schwierigkeitsgrad
    var hardCards = [
        // Kartenpaar 1
        {
            pic: "material/HardCards/1.png",
            compare: 1,
            found: false
        },
        {
            pic: "material/HardCards/2.png",
            compare: 1,
            found: false
        },
        // Kartenpaar 2
        {
            pic: "material/HardCards/3.png",
            compare: 2,
            found: false
        },
        {
            pic: "material/HardCards/4.png",
            compare: 2,
            found: false
        },
        // Kartenpaar 3
        {
            pic: "material/HardCards/5.png",
            compare: 3,
            found: false
        },
        {
            pic: "material/HardCards/6.png",
            compare: 3,
            found: false
        },
        // Kartenpaar 4
        {
            pic: "material/HardCards/7.png",
            compare: 4,
            found: false
        },
        {
            pic: "material/HardCards/8.png",
            compare: 4,
            found: false
        },
        // Kartenpaar 5
        {
            pic: "material/HardCards/9.png",
            compare: 5,
            found: false
        },
        {
            pic: "material/HardCards/10.png",
            compare: 5,
            found: false
        },
        // Kartenpaar 6
        {
            pic: "material/HardCards/11.png",
            compare: 6,
            found: false
        },
        {
            pic: "material/HardCards/12.png",
            compare: 6,
            found: false
        },
        // Kartenpaar 7
        {
            pic: "material/HardCards/13.png",
            compare: 7,
            found: false
        },
        {
            pic: "material/HardCards/14.png",
            compare: 7,
            found: false
        },
        // Kartenpaar 8
        {
            pic: "material/HardCards/15.png",
            compare: 8,
            found: false
        },
        {
            pic: "material/HardCards/16.png",
            compare: 8,
            found: false
        },
        // Kartenpaar 9
        {
            pic: "material/HardCards/17.png",
            compare: 9,
            found: false
        },
        {
            pic: "material/HardCards/18.png",
            compare: 9,
            found: false
        },
        // Kartenpaar 10
        {
            pic: "material/HardCards/19.png",
            compare: 10,
            found: false
        },
        {
            pic: "material/HardCards/20.png",
            compare: 10,
            found: false
        },
        // Kartenpaar 11
        {
            pic: "material/HardCards/21.png",
            compare: 11,
            found: false
        },
        {
            pic: "material/HardCards/22.png",
            compare: 11,
            found: false
        },
        // Kartenpaar 12
        {
            pic: "material/HardCards/23.png",
            compare: 12,
            found: false
        },
        {
            pic: "material/HardCards/24.png",
            compare: 12,
            found: false
        },
        // Kartenpaar 13
        {
            pic: "material/HardCards/25.png",
            compare: 13,
            found: false
        },
        {
            pic: "material/HardCards/26.png",
            compare: 13,
            found: false
        },
        // Kartenpaar 14
        {
            pic: "material/HardCards/27.png",
            compare: 14,
            found: false
        },
        {
            pic: "material/HardCards/28.png",
            compare: 14,
            found: false
        },
        // Kartenpaar 15
        {
            pic: "material/HardCards/29.png",
            compare: 15,
            found: false
        },
        {
            pic: "material/HardCards/30.png",
            compare: 15,
            found: false
        },
        // Kartenpaar 16
        {
            pic: "material/HardCards/31.png",
            compare: 16,
            found: false
        },
        {
            pic: "material/HardCards/32.png",
            compare: 16,
            found: false
        }
    ];
    //Leeres Array, in welches die Karten des ausgewählten Schwierigkeitsgrades gepusht werden
    var levelCards = [];
    //Wrapper für die Buttons als Variable
    var btnWrapper = document.getElementById("buttonsContainer");
    //Variable für Resfresh Button in HTML
    var firstMove = true; //Boolean, für den ersten/zweiten Zug
    var computerMove = true; //Boolean für den Computer Zug
    var restartBtn = document.querySelector(".fa-redo-alt"); //Variable für den Restart Button
    var maxCards; //Variable für maximale Anzahl an Karten (entsprechend nach Schwirigkeitsgrad) für Computer
    var maxCardsPair; //Variable für maximale Anzahl an Kartenpaaren (entsprechend nach Schwirigkeitsgrad) für winAlert
    var computerLock = true; //Boolean nach Ende des Spiels auf false setzen, damit Computer blockiert ist
    //Buttons erstellen in Wrapper
    var btnEasy = document.createElement("button");
    btnEasy.innerHTML = "Easy";
    btnWrapper.appendChild(btnEasy);
    var btnMedium = document.createElement("button");
    btnMedium.innerHTML = "Medium";
    btnWrapper.appendChild(btnMedium);
    var btnHard = document.createElement("button");
    btnHard.innerHTML = "Hard";
    btnWrapper.appendChild(btnHard);
    //Eventlistener für die Buttons
    btnEasy.addEventListener("click", function () {
        console.log("Difficulty: Easy");
        hideBtns(); //Die Buttons für die Schwierigkeitsgrade werden versteckt mit einer Klasse in CSS
        levelCards = easyCards; //Alle Karten aus dem easyCards Array sind nun im zuvor leeren levelCards gespeichert
        createCard("containerEasyMedium"); //Karten werden in Container kreiirt, das Argument beschreibt die richtige Klasse für das Grid (in CSS)
        mixCards(); //Funktionsaufruf für das Mischen des Indexes
        showRestartBtn();
        maxCards = 8;
        maxCardsPair = 4;
        computerLock = true;
        computer(); // Funktionsaufruf für den >Spielzug des Computers
    });
    btnMedium.addEventListener("click", function () {
        console.log("Difficulty: Medium");
        hideBtns();
        levelCards = mediumCards; //Alle Karten aus dem mediumCards Array sind nun im zuvor leeren levelCards gespeichert
        createCard("containerEasyMedium");
        mixCards();
        showRestartBtn();
        maxCards = 16;
        maxCardsPair = 8;
        computerLock = true;
        computer();
    });
    btnHard.addEventListener("click", function () {
        console.log("Difficulty: Hard");
        hideBtns();
        levelCards = hardCards; //Alle Karten aus dem hardCards Array sind nun im zuvor leeren levelCards gespeichert
        createCard("containerHard");
        mixCards();
        showRestartBtn();
        maxCards = 32;
        maxCardsPair = 16;
        computerLock = true;
        computer();
    });
    //Funktion zum verstecken von den Buttons mit CSS Klasse
    function hideBtns() {
        btnEasy.classList.add("hidden");
        btnMedium.classList.add("hidden");
        btnHard.classList.add("hidden");
    }
    function showBtns() {
        btnEasy.classList.remove("hidden");
        btnMedium.classList.remove("hidden");
        btnHard.classList.remove("hidden");
    }
    function showRestartBtn() {
        restartBtn.classList.remove("hidden");
    }
    function hideRestartBtn() {
        restartBtn.classList.add("hidden");
    }
    //Variable für das div im HTML, in welches die Karten gepusht werden sollen
    var container = document.getElementById("cardContainer");
    var stopMoves = true; //Boolean für das Begrenzen der Züge
    var winCounter = 0; //Variable für das Zählen der Punkte
    function createCard(grid) {
        //Container leeren
        container.innerHTML = "";
        container.classList.add(grid); //Die richtige Klasse für das Grid in CSS bei Funktionsaufruf als Argument übergeben
        var _loop_1 = function (index) {
            var newCard = document.createElement("div"); //Div erstellen
            newCard.classList.add("cardDiv" + index); //Klasse und Indexzahl als Klasse hinzufügen
            newCard.innerHTML = "<img src=material/BackCard/Memory-Back.png>"; //Hintergrundbild hinzufügen (Rückseite)
            newCard.addEventListener("click", function () {
                if (stopMoves == true) { //Boolean ist nur bei ersten zwei Zügen true, danach false => kein aufrufen der Funktion mehr
                    flipCard(index); //Eventlistener: beim klicken Karte umdrehen
                }
            });
            container.appendChild(newCard); //Elemente im Container erstellen
        };
        //Eine Karte als HTML-Element erstellen
        for (var index = 0; index < levelCards.length; index++) {
            _loop_1(index);
        }
    }
    var indexSaving = [];
    //Karte umdrehen Funktion
    function flipCard(index) {
        var container = document.querySelector(".cardDiv" + index); //richtigen Container selektieren
        container.innerHTML = "<img src=" + levelCards[index].pic + ">"; //via innerHTML das jeweilige Hintergrundbild (im Objekt hinterlegt) hinzufügen
        indexSaving.push(index); //beim Klicken wird Index gespeichert, um zu verhindern, dass die gleiche Karte zweimal geklickt werden kann
        if (indexSaving[0] != indexSaving[1]) { //nur wenn die karten ungleich sind, werden sie verglichen
            compareCards(index); //compareCards-Funktion aufrufen um Karten zu vergleichen
        }
        else {
            indexSaving.pop(); //Wenn sie nicht gleich sind wird die gleiche Stelle gelöscht und nichts verglichen
        }
    }
    var firstCardChoice; //Variable, um Vergleichoperator (compare Nummer im Objekt) beim ersten Klick zu speichern
    var secondCardChoice; //Variable, um Vergleichoperator (compare Nummer im Objekt) beim ersten Klick zu speichern
    var firstIndex; //Variable um Index beim ersten Klick zu speichern
    var secondIndex; //Variable um Index beim zweiten Klick zu speichern
    //Funktion um Karten zu vergleichen
    function compareCards(index) {
        if (firstMove == true) { //wenn Boolean true ist, dann ist es der erste von zwei Zügen
            firstCardChoice = levelCards[index].compare; //Vergleichszahl wird in Variable gespeichert
            firstIndex = index; //Der Index wird in einer Variable gespeichert
            firstMove = false; //Boolean für den ersten Zug wird auf false gestellt
        }
        else { //zweiter Zug
            stopMoves = false; //Nach dem zweiten Zug Boolean auf false setzten, um weiteres klicken zu verhindern
            setTimeout(function () {
                secondCardChoice = levelCards[index].compare; //Vergleichszahl wird in Variable gespeichert
                secondIndex = index; //Der Index wird in einer Variable gespeichert
                if (firstCardChoice == secondCardChoice) { //Variablen vergleichen -> wenn die Variablen gleich sind, dann...
                    levelCards[firstIndex].found = true; //Gefunden Boolean von beiden Objekten auf true setzen
                    levelCards[secondIndex].found = true;
                    var container1 = document.querySelector(".cardDiv" + firstIndex); //Container von erster Karte in Variable selektieren
                    container1.classList.add("hidden"); //dem Container die Klasse hidden geben (in CSS definiert), damit Karte verschwindet
                    var container2 = document.querySelector(".cardDiv" + secondIndex); //Container von zweiter Karte in Variable sleketieren
                    container2.classList.add("hidden");
                    firstMove = true; //Boolean um ersten Zug zu erlauben auf true stellen
                    stopMoves = true; //Boolean nach dem zweiten Zug wieder auf true setzten, um neue Züge zu ermöglichen
                    counter(); //Funktion zum Zählen aufrufen
                    winCounter++; //Variable als Punkte hochzählen
                    winAlert(); //Gewinnfunktion aufrufen
                    indexSaving = [];
                    if (computerMove == true) { //Wenn der Boolean für den Computerzug true ist, dann...
                        computer(); //Computer Funktion aufrufen
                    } //ComputerMove Boolean nicht auf false setzen, da der Computer noch einen Zug machen darf, nachdem ein Kartenpaar gefunden wurde
                }
                else { //Wenn die Variablen nicht gleich sind
                    var container1 = document.querySelector(".cardDiv" + firstIndex); //Container von erster Karte in Variable selektieren
                    container1.innerHTML = "<img src=material/BackCard/Memory-Back.png >"; //Hintergrund wieder auf Rückseite ändern, zum Karte umdrehen
                    var container2 = document.querySelector(".cardDiv" + secondIndex); //Container von zweiter Karte in Variable selektieren
                    container2.innerHTML = "<img src=material/BackCard/Memory-Back.png >"; //Hintergrund wieder auf Rückseite ändern, zum Karte umdrehen
                    firstMove = true; //Boolean um ersten Zug zu erlauben auf true stellen
                    stopMoves = true; //Boolean nach dem zweiten Zug wieder auf true setzten, um neue Züge zu ermöglichen
                    // Karten wieder umdrehen
                    indexSaving = [];
                    if (computerMove == true) { //Wenn der Computer am Zug ist, dann...
                        computerMove = false; //Boolean auf false setzen -> Computer nicht mehr am Zug
                    }
                    else { //Wenn Computer nicht am Zug ist, dann...
                        computerMove = true; //Boolean auf true setzen => Computer hat den nächsten Zug
                        computer(); //Computer Funktion aufrufen -> Computer macht seinen Zug
                    }
                }
            }, 2500);
        }
    }
    //Karten im levelCards Array mischen
    function mixCards() {
        levelCards.sort(function () { return 0.5 - Math.random(); });
    }
    var computerCounterHTML = document.getElementById("counterComputer"); //Variable für <p> Tag in der HTML
    var playerCounterHTML = document.getElementById("counterPlayer");
    var computerPoints = 0; //Punkte für den Computer
    var playerPoints = 0; //Punkte für den Spieler
    //Zählen Funktion
    function counter() {
        if (computerMove == true) { //Wenn der Boolean computerMove true ist, ist der Computer am Zug
            computerPoints++; //=> Variable des Computers +1
            computerCounterHTML.innerHTML = "Computer: " + computerPoints + " in total"; //Punkte inner HTML ausgeben
        }
        else { //wenn Computer nicht dran ist (compterMove Boolean false), dann ist der Spieler am Zug
            playerPoints++; //=> Variable des Spielers +1
            playerCounterHTML.innerHTML = "Player: " + playerPoints + " in total"; //Punkte inner HTML ausgeben
        }
    }
    //Computer
    function computer() {
        if (computerLock == true) {
            var randomNumber_1 = []; //Leeres Array, in welches  random Zahlen gepusht werden
            randomNumber_1.push(Math.floor(Math.random() * maxCards)); //-> *8 = random Zahlen von 0-7 (Easy) ins Array gepusht
            randomNumber_1.push(Math.floor(Math.random() * maxCards));
            if (randomNumber_1[0] != randomNumber_1[1]) { //Wenn die Nummern ungleich sind...
                if (levelCards[randomNumber_1[0]].found == false && levelCards[randomNumber_1[1]].found == false) { //...Wenn die "simulierten" Index im Array levelCards noch nicht gefunden wurden (Boolean found false)
                    setTimeout(function () {
                        flipCard(randomNumber_1[0]); //Simulierter Index (Stelle der Karte) wird mit flipCard aufgerufen (Karte wird dann umgedreht)
                    }, 200);
                    setTimeout(function () {
                        flipCard(randomNumber_1[1]);
                    }, 350);
                }
                else { //Wenn der Boolean found true ist, wurden Karten schon gefunden
                    computer(); //=> nochmal Computer, bis zwei Karten gezogen wurden, die noch nicht gefunden wurden
                }
            }
            else { //Wenn die Nummern gleich sind 
                computer(); //=> nochmal Computer, bis die Nummern ungleich sind (damit eine Karte nicht doppelt gezogen werden kann)
            }
        }
    }
    function winAlert() {
        if (winCounter == maxCardsPair && computerPoints > playerPoints) {
            window.alert("Der Computer hat mit " + computerPoints + " Punkten gewonnen!");
            computerLock = false;
            restart();
        }
        else if (winCounter == maxCardsPair && computerPoints < playerPoints) {
            window.alert("Du hast mit " + playerPoints + " Punkten gewonnen!");
            computerLock = false;
            restart();
        }
        else if (winCounter == maxCardsPair && computerPoints == playerPoints) {
            window.alert("Unentschieden!");
            computerLock = false;
            restart();
        }
    }
    function restart() {
        levelCards = [];
        firstMove = true;
        computerMove = true;
        showBtns();
        hideRestartBtn();
        container.innerHTML = "";
        computerPoints = 0;
        playerPoints = 0;
        computerCounterHTML.innerHTML = "Computer: " + computerPoints + " in total";
        playerCounterHTML.innerHTML = "Player: " + playerPoints + " in total";
        if (container.classList.contains("containerHard")) {
            container.classList.remove("containerHard");
        }
        else if (container.classList.contains("containerEasyMedium")) {
            container.classList.remove("containerEasyMedium");
        }
        // CONSOLENAUSGABE STIMMT NICHT GANZ? Computer spielt nach neustart doppelt wenn man zu schnell drückt??
    }
    restartBtn.addEventListener("click", function () {
        computerLock = false;
        restart();
    });
})(MemoryGame || (MemoryGame = {}));
//# sourceMappingURL=MemoryGame.js.map