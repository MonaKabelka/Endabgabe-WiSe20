namespace MemoryGame {

    //Interface für Objekte von Karten
    interface CardsInterface {
        pic: string; //Key fürs Hintergrundbild
        compare: number; //Zahl als Vergleichsindikator für passendes Kartenpaar
        found: boolean; //Boolean, ob die Karte gefunden wurde oder nicht
    }

    //Array, das alle Spielkarten für den einfachen Schwierigkeitsgrad enthält (als Objekte)
    let easyCards: CardsInterface[] = [
        // Kartenpaar 1
        {
            pic: "material/EasyCards/1.png", //Jeweiliges Hintergrundbild mit entsprechenden Merkmalen
            compare: 1, //Vergleichsindikator für die zwei zusammengehörenden Kartenpaare
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
    let mediumCards: CardsInterface[] = [
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
    let hardCards: CardsInterface[] = [
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

    //Leeres Array, in welches die Karten des ausgewählten Schwierigkeitsgrades kommen
    let cardDeck: CardsInterface[] = [];

    
    
    let firstMove: boolean = true; //Boolean, für den ersten/zweiten Zug
    let computerMove: boolean = true; //Boolean für den Computer Zug
    const restartBtn: HTMLElement = document.querySelector(".fa-redo-alt"); //Variable für den Restart Button
    let maxCards: number; //Variable für maximale Anzahl an Karten (entsprechend nach Schwierigkeitsgrad) für Computer
    let maxCardsPair: number; //Variable für maximale Anzahl an Kartenpaaren (entsprechend nach Schwirigkeitsgrad) für winAlert
    let computerLock: boolean = true; //Boolean nach Ende des Spiels auf false setzen, damit Computer blockiert ist
    let indexSaveScndCLick: number[] = []; //Index von geglickten Karten in diesem Array speichern, um zu verhindern, dass eine Karte zweimal geklickt werden kann (siehe flipCard)
    const display: HTMLElement = document.getElementById("display");

    const btnWrapper: HTMLElement = document.getElementById("buttonsContainer"); //Wrapper für die Buttons als Variable
    
    //Buttons erstellen in Wrapper für Easy, Medium und Hard
    let btnEasy: HTMLButtonElement = document.createElement("button");
    btnEasy.innerHTML = "Easy";
    btnWrapper.appendChild(btnEasy);

    let btnMedium: HTMLButtonElement = document.createElement("button");
    btnMedium.innerHTML = "Medium";
    btnWrapper.appendChild(btnMedium);

    let btnHard: HTMLButtonElement = document.createElement("button");
    btnHard.innerHTML = "Hard";
    btnWrapper.appendChild(btnHard);

    //Eventlistener für die Buttons
    btnEasy.addEventListener("click", function (): void {
        console.log("Difficulty: Easy");
        display.classList.remove("hidden"); //Display mit Punkteanzeige etc anzeigen lassen
        hideBtns(); //Die Buttons für die Schwierigkeitsgrade werden versteckt mit einer Klasse in CSS
        cardDeck = easyCards; //Alle Karten aus dem easyCards Array sind nun im zuvor leeren cardDeck gespeichert
        createCard("containerEasyMedium"); //Karten werden in Container kreiirt, das Argument beschreibt die richtige Klasse für das Grid (in CSS)
        mixCards(); //Funktionsaufruf für das Mischen des Indexes => Karten mischeln
        showRestartBtn(); //Restartbutton wird angezeigt
        maxCards = 8; //Die höchste Anzahl an Karten für die Computerfunktion (beschreibt die Auswahlmöglichkeiten des Bots)
        maxCardsPair = 4; //Die höchste Anzahl an Kartenpaaren für den Gewinn-Alert
        computerLock = true; //Boolean, um Computer zu sperren auf true setzen (damit Botfunktion überhaupt ablaufen kann)
        computer(); //Funktionsaufruf für den Spielzug des Computers, damit dieser anfängt
        progress(); //Aufruf der progress Funktion, um maximale Kartenanzahl innerHTML zu aktualisieren
    });

    btnMedium.addEventListener("click", function (): void {
        console.log("Difficulty: Medium");
        display.classList.remove("hidden");
        hideBtns();
        cardDeck = mediumCards; //Alle Karten aus dem mediumCards Array sind nun im zuvor leeren cardDeck gespeichert
        createCard("containerEasyMedium");
        mixCards();
        showRestartBtn();
        maxCards = 16; //Maximale Kartenazahl für mittleren Schwierigkeitsgrad (für Computer)
        maxCardsPair = 8; //Die höchste Anzahl an Kartenpaaren für den Gewinn-Alert
        computerLock = true;
        computer();
        progress();
    });

    btnHard.addEventListener("click", function (): void {
        console.log("Difficulty: Hard");
        display.classList.remove("hidden");
        hideBtns();
        cardDeck = hardCards; //Alle Karten aus dem hardCards Array sind nun im zuvor leeren cardDeck gespeichert
        createCard("containerHard");
        mixCards();
        showRestartBtn();
        maxCards = 32; //Maximale Kartenazahl für schweren Schwierigkeitsgrad
        maxCardsPair = 16; //Die höchste Anzahl an Kartenpaaren für den Gewinn-Alert
        computerLock = true;
        computer();
        progress();
    });

    //Funktion zum verstecken von den Buttons (mit CSS Klasse hidden)
    function hideBtns(): void {
        btnEasy.classList.add("hidden");
        btnMedium.classList.add("hidden");
        btnHard.classList.add("hidden");
    }

    //Funktion zum zeigen der Buttons (CSS Klasse entfernen)
    function showBtns(): void {
        btnEasy.classList.remove("hidden");
        btnMedium.classList.remove("hidden");
        btnHard.classList.remove("hidden");
    }

    //Funktion zum zeigen des Restart-Buttons (CSS Klasse entfernen)
    function showRestartBtn(): void {
        restartBtn.classList.remove("hidden");
    }

    //Funktion zum verstecken des Restart-Buttons (mit CSS Klasse hidden)
    function hideRestartBtn(): void {
        restartBtn.classList.add("hidden");
    }
    
    let container: HTMLElement = document.getElementById("cardContainer"); //Variable für das div im HTML, in welches die Karten gepusht werden sollen
    let stopMoves: boolean = true; //Boolean, um zu erkennen, ob es der erste oder zweite Zug ist (true=erster Zug, false=zweiter Zug)
    let winCounter: number = 0; //Variable für das Zählen der gefundenen Kartenpaare


    //Funktion um Karte als HTMLElement zu kreieren
    function createCard(grid: string): void {
        container.innerHTML = ""; //Container leeren
        container.classList.add(grid); //Die richtige Klasse für das Grid in CSS wird bei Funktionsaufruf als Argument übergeben

        //Eine Karte als HTMLElement erstellen
        for (let index: number = 0; index < cardDeck.length; index++) { //durch Array itterieren
            let newCard: HTMLElement = document.createElement("div"); //Div erstellen
            newCard.classList.add("cardDiv" + index); //Klasse und Indexzahl als Klasse hinzufügen (um die divs voneinander unterscheiden zu können)
            newCard.innerHTML = "<img src=material/BackCard/Memory-Back.png>"; //Hintergrundbild hinzufügen (Rückseite)
            newCard.addEventListener("click", function (): void { //Eventlistener neuer Karte hinzufügen
                if (stopMoves == true) { //Boolean ist nur bei ersten zwei Zügen true, danach false => kein aufrufen der flipCard Funktion mehr
                    flipCard(index); //flipCard zum Karte umdrehen, entsprechenden Index als Argument übergeben
                 }
            });
            container.appendChild(newCard); //Elemente im Container erstellen
        }
    }

    //Karte umdrehen Funktion
    function flipCard(index: number): void { //Index aus cardDeck als Argument übergeben (Aufruf in createCard Funktion)
        let container: HTMLElement = document.querySelector(".cardDiv" + index); //richtigen Container selektieren
        container.innerHTML = "<img src=" + cardDeck[index].pic + ">"; //über innerHTML das jeweilige Hintergrundbild (im Objekt hinterlegt) hinzufügen
        indexSaveScndCLick.push(index); //beim Klicken wird Index gespeichert, um zu verhindern, dass die gleiche Karte zweimal geklickt werden kann
        if (indexSaveScndCLick[0] != indexSaveScndCLick[1]) { //nur wenn beim zweiten Klick die Indexe der geklickten Karten ungleich sind, werden sie verglichen (nicht gleiche Karte)
            compareCards(index); //compareCards-Funktion aufrufen um Karten zu vergleichen
        } else { //Wenn dieselbe Karte zweimal geklickt wurde,...
            indexSaveScndCLick.pop(); //...wird die gleiche Stelle gelöscht und nichts verglichen, man muss eine andere Karte auswählen
        }
    }

    let firstCardChoice: number; //Variable, um Vergleichsoperator (compare Nummer im Objekt) beim ersten Klick zu speichern
    let secondCardChoice: number; //Variable, um Vergleichsoperator (compare Nummer im Objekt) beim zweiten Klick zu speichern
    let firstIndex: number; //Variable, um Index-Stelle der Karte beim ersten Klick zu speichern
    let secondIndex: number; //Variable, um Index-Stelle der Karte beim zweiten Klick zu speichern

    //Funktion um Karten zu vergleichen
    function compareCards(index: number): void {
        if (firstMove == true) { //Wenn Boolean true ist, dann ist es der erste Zug
            firstCardChoice = cardDeck[index].compare; //Vergleichszahl wird in Variable gespeichert
            firstIndex = index; //Der Index wird in einer Variable gespeichert
            firstMove = false; //Boolean für den ersten Zug wird auf false gestellt

        } else { //Boolean ist nicht true => Zweiter Zug
            stopMoves = false; //Nach dem zweiten Zug wird Boolean auf false gesetzt, um weiteres anklicken von Karten zu verhindern
            setTimeout(function (): void { //Damit sich die Karten nach einer bestimmten Zeit wieder umdrehen
                secondCardChoice = cardDeck[index].compare; //!Fehler in Console? Vergleichszahl wird in Variable gespeichert
                secondIndex = index; //Der Index wird in einer Variable gespeichert

                if (firstCardChoice == secondCardChoice) { //Variablen vergleichen -> wenn die Variablen gleich sind, dann...
                    cardDeck[firstIndex].found = true; //Gefunden Boolean von beiden Objekten auf true setzen
                    cardDeck[secondIndex].found = true;

                    let container1: HTMLElement = document.querySelector(".cardDiv" + firstIndex); //Container von erster Karte in Variable selektieren
                    container1.classList.add("hidden"); //dem Container die Klasse hidden geben (in CSS definiert), damit Karte verschwindet
                    let container2: HTMLElement = document.querySelector(".cardDiv" + secondIndex); //Container von zweiter Karte in Variable sleketieren
                    container2.classList.add("hidden"); 

                    firstMove = true; //Boolean, um ersten Zug wieder zu erlauben, auf true stellen
                    stopMoves = true; //Boolean, um anklicken von Karten wieder zu ermöglichen, true stellen
                    counter(); //Funktion zum Zählen der Punkte aufrufen (für den Punktestand)
                    winCounter++; //Variable für gefundene Kartenpaare hochzählen (für das zählen bis zum Gewinn-Alert)
                    winAlert(); //Gewinnfunktion aufrufen (wird nur ausgeführt, wenn bestimmte Anzahl an Kartenpaaren gefunden wurden)
                    indexSaveScndCLick = []; //Array für das Karten umdrehen wieder leeren
                    progress();
                    
                    if (computerMove == true) { //Wenn der Boolean für den Computerzug true ist, dann...
                        computer(); //Computer Funktion aufrufen
                    }  //ComputerMove Boolean nicht auf false setzen, da der Computer noch einen Zug machen darf, nachdem ein Kartenpaar gefunden wurde

                } else { //Wenn die Variablen nicht gleich sind/die Karten kein Paar bilden, ...
                    let container1: HTMLElement = document.querySelector(".cardDiv" + firstIndex); //Container von erster Karte in Variable selektieren
                    container1.innerHTML = "<img src=material/BackCard/Memory-Back.png >"; //Hintergrund wieder auf Rückseite ändern, zum Karte umdrehen
                    let container2: HTMLElement = document.querySelector(".cardDiv" + secondIndex); //Container von zweiter Karte in Variable selektieren
                    container2.innerHTML = "<img src=material/BackCard/Memory-Back.png >"; //Hintergrund wieder auf Rückseite ändern, zum Karte umdrehen

                    firstMove = true; //Boolean um ersten Zug zu erlauben auf true stellen
                    stopMoves = true; //Boolean nach dem zweiten Zug wieder auf true setzten, um neue Züge zu ermöglichen
                    indexSaveScndCLick = []; //Array für das Karten umdrehen wieder leeren

                    if (computerMove == true) { //Wenn der Computer am Zug ist, dann...
                        computerMove = false; //Boolean auf false setzen -> Computer nicht mehr am Zug

                    } else { //Wenn Computer nicht am Zug ist, dann...
                        computerMove = true; //Boolean auf true setzen => Computer hat den nächsten Zug
                        computer(); //Computer Funktion aufrufen -> Computer macht seinen Zug
                    }
                }
            },         2500);
        }
    }

    //Karten im cardDeck Array mischen
    function mixCards(): void {
        cardDeck.sort(() => 0.5 - Math.random());
    }

    let computerCounterHTML: HTMLElement = document.getElementById("counterComputer"); //Variable für <p>-Tag in der HTML (Computer-Punktestand)
    let playerCounterHTML: HTMLElement = document.getElementById("counterPlayer"); //Variable für <p>-Tag in der HTML (Spieler-Punktestand)
    let computerPoints: number = 0; //Variable für die Punkte des Computers
    let playerPoints: number = 0; //VAriable für die Punkte des Spielers

    //Punktestand zählen Funktion
    function counter(): void {
        if (computerMove == true) { //Wenn der Boolean computerMove true ist, ist der Computer am Zug
            computerPoints++; //=> Punktestand des Computers +1
            computerCounterHTML.innerHTML = "Computer: " + computerPoints + " in total"; //Punkte inner HTML ausgeben
        } else { //wenn Computer nicht dran ist (compterMove Boolean false), dann ist der Spieler am Zug
            playerPoints++; //=> Punktestand des Spielers +1
            playerCounterHTML.innerHTML = "Player: " + playerPoints + " in total"; //Punkte inner HTML ausgeben
        }
    }

    //Computer
    function computer(): void {
        if (computerLock == true) { //Computer darf nur spielen, wenn Lock true ist, sonst nicht (Computer nach Spielende blockiert, durch Lock auf false)
            let randomNumber: number[] = []; //Leeres Array, in welches  random Zahlen gepusht werden
            randomNumber.push(Math.floor(Math.random() * maxCards)); //Richtige Kartenanzahl wird bei Funktionsaufruf vergeben (in Eventlistener von Buttons)
            randomNumber.push(Math.floor(Math.random() * maxCards)); //Computer pusht zwei random Zahlen in leeres Array
            if (randomNumber[0] != randomNumber[1]) { //Wenn die Nummern ungleich sind...
                if (cardDeck[randomNumber[0]].found == false && cardDeck[randomNumber[1]].found == false) { //...Wenn die "simulierten" Index (random Zahl) im Array cardDeck noch nicht gefunden wurden (Boolean found ist false)...
                setTimeout(function (): void { //Erste Karte wird nach kurzer Zeit aufgedeckt
                        flipCard(randomNumber[0]); //Index (Stelle der Karte) wird mit flipCard aufgerufen (Karte wird dann umgedreht)
                },         200);
                setTimeout(function (): void { //Die zweite Karte wird noch verzögerter aufgedeckt
                flipCard(randomNumber[1]); //Index der zweiten Karte wird mit flipCard aufgerufen (Karte wird umgedreht)
                },         350);
                } else { //Wenn der Boolean found true ist, wurden Karten schon gefunden
                    computer(); //=> nochmal Computer, bis zwei Karten gezogen wurden, die noch nicht gefunden wurden
                }
            } else { //Wenn die Nummern gleich sind...
                computer(); //=> nochmal Computer, bis die Nummern ungleich sind (damit eine Karte nicht doppelt gezogen werden kann)
            }
        }
    }

    //Funktion für den Gewinnalert
    function winAlert(): void { 
        //Wenn die Variable für gefundene Kartenpaare gleich der maximalen Kartenanzahl ist & der Computer mehr Punkte hat, als der Spieler...
        if (winCounter == maxCardsPair && computerPoints > playerPoints) {  
            computerLock = false; //Computer wird blockiert
            setTimeout(function (): void { //mit kleiner Verzögerung wird Gewinn-Alert angezeigt
            window.alert("The computer won with " + computerPoints + " points! Try again!"); //Computer als Gewinner wird ausgegeben mit entsprechender Punktzahl
            restart(); //Nach "okay" klicken beim Alert wird Spiel neu gestartet
        },             750); //Timeout auf 750, damit die Progress-Anzeige noch voll werden kann, vor dem Alert
        //Wenn die Variable für gefundene Kartenpaare gleich der maximalen Kartenanzahl ist & der Spieler mehr Punkte hat, als der Computer...
        } else if (winCounter == maxCardsPair && computerPoints < playerPoints) { 
            computerLock = false; 
            setTimeout(function (): void { 
            window.alert("Congratulations! YOU won with " + playerPoints + " points!"); //Spieler als Gewinner wird ausgegeben mit entsprechender Punktzahl
            restart();
        },             750);
        //Wenn die Variable für gefundene Kartenpaare gleich der maximalen Kartenanzahl ist & der Spieler und der COmputer gleich viele Punkte haben...
        } else if (winCounter == maxCardsPair &&  computerPoints == playerPoints) { 
            computerLock = false; 
            setTimeout(function (): void { 
            window.alert("The Game ended in a draw! Return Match!"); //Unentschieden
            restart();
        },             750);
        }
    } 

    //Restart Funktion (aka ALLES wird zurückgesetzt)
    function restart(): void {
        for (let index: number = 0; index < easyCards.length; index++) { //Alle Karten aus easyCards werden auf nicht gefunden gestellt (Boolean found auf false)
            easyCards[index].found = false;
            }
        for (let index: number = 0; index < mediumCards.length; index++) { //Alle Karten aus mediumCards werden auf nicht gefunden gestellt (Boolean found auf false)
            mediumCards[index].found = false;
            }
        for (let index: number = 0; index < hardCards.length; index++) { //Alle Karten aus hardCards werden auf nicht gefunden gestellt (Boolean found auf false)
            hardCards[index].found = false;
            }
        cardDeck = []; //Array, in welches am Anfang Karten gepusht werden, wird geleert
        firstMove = true; //Ersten Zug erlauben
        computerMove = true; //Computer Zug erlauben, damit dieser wieder den ersten Zug macht
        showBtns(); //showBtns Funktion -> Buttons für Schwierigkeitgrade anzeigen
        hideRestartBtn(); //Restart-Button verstecken
        container.innerHTML = ""; //Den Container in der HTML-Datei leeren (Karten entfernen)
        computerPoints = 0; //Punktestand des Computers auf 0 setzten
        playerPoints = 0; //Punktestand des Spielers auf 0 setzten
        computerCounterHTML.innerHTML = "Computer: " + computerPoints + " in total"; //Punktestand dementsprechend auch innerHTML anpassen
        playerCounterHTML.innerHTML = "Player: " + playerPoints + " in total";
        winCounter = 0; //Den Kartenpaar-Zähler für winAlert auf 0 setzen
        maxCardsPair = 0; //Maximale Kartenpaaranzahl für progress zurücksetzten
        progress(); //progress Anzeige aktualisieren/zurücksetzen
        display.classList.add("hidden"); //Display verstecken
        if (container.classList.contains("containerHard")) { //Wenn der container das Grid für den schweren Schwierigkeitsgrad enthalt,...
            container.classList.remove("containerHard"); //Wird es entfernt
        } else if (container.classList.contains("containerEasyMedium")) { //Wenn der container das Grid für den leichten oder mittleren Schwierigkeitsgrad enthalt,...
            container.classList.remove("containerEasyMedium"); //Wird dieses auch entfernt
        }
    }

    restartBtn.addEventListener("click", function (): void { //Eventlistener für Restart-Button
        computerLock = false; //Computer wieder erlauben zu spielen
        restart(); //restart FUnktion aufrufen
    });

    function progress(): void {
    document.querySelector(".chart").setAttribute("style", "width:" + ((winCounter * 100) / maxCardsPair) + "%");
    document.getElementById("progressOutput").innerHTML = winCounter + " out of " + maxCardsPair + " pairs found";
    }

}