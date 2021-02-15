namespace MemoryGame {


    //Interface für Objekte von Karten mit Keys für: Hintergrundbild, Vergleichsindikator für das passende Kartenpaar, und ob die Karte gefunden wurde oder nicht
    interface CardsInterface {
        pic: string;
        compare: number;
        found: boolean;
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

    //Leeres Array, in welches die Karten des ausgewählten Schwierigkeitsgrades gepusht werden
    let levelCards: CardsInterface[] = [];

    //Wrapper für die Buttons als Variable
    const btnWrapper: HTMLElement = document.getElementById("buttonsContainer");
    //Variable für Resfresh Button in HTML
    
    let firstMove: boolean = true; //Boolean, für den ersten/zweiten Zug
    let computerMove: boolean = true; //Boolean für den Computer Zug
    let restartBtn: HTMLElement = document.querySelector(".fa-redo-alt"); //Variable für den Restart Button
    let maxCards: number; //Variable für maximale Anzahl an Karten (entsprechend nach Schwirigkeitsgrad) für Computer
    let maxCardsPair: number; //Variable für maximale Anzahl an Kartenpaaren (entsprechend nach Schwirigkeitsgrad) für winAlert
    let computerLock: boolean = true; //Boolean nach Ende des Spiels auf false setzen, damit Computer blockiert ist

    //Buttons erstellen in Wrapper
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
        hideBtns(); //Die Buttons für die Schwierigkeitsgrade werden versteckt mit einer Klasse in CSS
        levelCards = easyCards; //Alle Karten aus dem easyCards Array sind nun im zuvor leeren levelCards gespeichert
        createCard("containerEasyMedium"); //Karten werden in Container kreiirt, das Argument beschreibt die richtige Klasse für das Grid (in CSS)
        mixCards(); //Funktionsaufruf für das Mischen des Indexes
        showRestartBtn(); //Restartbutton wird angezeigt
        maxCards = 8; //Die höchste ANzahl an Karten für den Computer
        maxCardsPair = 4; //Die höchste Anzahl an Kartenpaaren für den Gewinn-Alert
        computerLock = true; //Boolean um Computer zu sperren auf true setzen (damit Botfunktion ablaufen kann)
        computer(); // Funktionsaufruf für den Spielzug des Computers
    });

    btnMedium.addEventListener("click", function (): void {
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

    btnHard.addEventListener("click", function (): void {
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

    //Funktion zum verstecken des Restart-Buttons mit CSS Klasse
    function hideRestartBtn(): void {
        restartBtn.classList.add("hidden");
    }

    //Variable für das div im HTML, in welches die Karten gepusht werden sollen
    let container: HTMLElement = document.getElementById("cardContainer"); 
    let stopMoves: boolean = true; //Boolean für das Begrenzen der Züge
    let winCounter: number = 0; //Variable für das Zählen der Punkte

    function createCard(grid: string): void {
        //Container leeren
        container.innerHTML = "";
        container.classList.add(grid); //Die richtige Klasse für das Grid in CSS bei Funktionsaufruf als Argument übergeben

        //Eine Karte als HTML-Element erstellen
        for (let index: number = 0; index < levelCards.length; index++) { //durch Array itterieren
            let newCard: HTMLElement = document.createElement("div"); //Div erstellen
            newCard.classList.add("cardDiv" + index); //Klasse und Indexzahl als Klasse hinzufügen
            newCard.innerHTML = "<img src=material/BackCard/Memory-Back.png>"; //Hintergrundbild hinzufügen (Rückseite)
            newCard.addEventListener("click", function (): void {
                if (stopMoves == true) { //Boolean ist nur bei ersten zwei Zügen true, danach false => kein aufrufen der Funktion mehr
                    flipCard(index); //Eventlistener: beim klicken Karte umdrehen
                 }
            });
            container.appendChild(newCard); //Elemente im Container erstellen
        }
    }

    let indexSaving: number[] = [];

    //Karte umdrehen Funktion
    function flipCard(index: number): void { //Index aus levelCards als Argument übergeben (Aufruf in createCard Funktion)
        let container: HTMLElement = document.querySelector(".cardDiv" + index); //richtigen Container selektieren
        container.innerHTML = "<img src=" + levelCards[index].pic + ">"; //via innerHTML das jeweilige Hintergrundbild (im Objekt hinterlegt) hinzufügen
        
        indexSaving.push(index); //beim Klicken wird Index gespeichert, um zu verhindern, dass die gleiche Karte zweimal geklickt werden kann
        if (indexSaving[0] != indexSaving[1]) { //nur wenn die karten ungleich sind, werden sie verglichen
            compareCards(index); //compareCards-Funktion aufrufen um Karten zu vergleichen
        } else {
            indexSaving.pop(); //Wenn sie nicht gleich sind wird die gleiche Stelle gelöscht und nichts verglichen
        }
    }

    let firstCardChoice: number; //Variable, um Vergleichoperator (compare Nummer im Objekt) beim ersten Klick zu speichern
    let secondCardChoice: number; //Variable, um Vergleichoperator (compare Nummer im Objekt) beim ersten Klick zu speichern
    let firstIndex: number; //Variable um Index beim ersten Klick zu speichern
    let secondIndex: number; //Variable um Index beim zweiten Klick zu speichern

    //Funktion um Karten zu vergleichen
    function compareCards(index: number): void {
        if (firstMove == true) { //wenn Boolean true ist, dann ist es der erste von zwei Zügen
            firstCardChoice = levelCards[index].compare; //Vergleichszahl wird in Variable gespeichert
            firstIndex = index; //Der Index wird in einer Variable gespeichert
            firstMove = false; //Boolean für den ersten Zug wird auf false gestellt
        } else { //zweiter Zug
            stopMoves = false; //Nach dem zweiten Zug Boolean auf false setzten, um weiteres klicken zu verhindern
            setTimeout(function (): void { //Damit sich die Karten nach einer bestimmten Zeit wieder umdrehen
                secondCardChoice = levelCards[index].compare; //!!!!!!!!!! Vergleichszahl wird in Variable gespeichert
                secondIndex = index; //Der Index wird in einer Variable gespeichert
                if (firstCardChoice == secondCardChoice) { //Variablen vergleichen -> wenn die Variablen gleich sind, dann...
                    levelCards[firstIndex].found = true; //Gefunden Boolean von beiden Objekten auf true setzen
                    levelCards[secondIndex].found = true;

                    let container1: HTMLElement = document.querySelector(".cardDiv" + firstIndex); //Container von erster Karte in Variable selektieren
                    container1.classList.add("hidden"); //dem Container die Klasse hidden geben (in CSS definiert), damit Karte verschwindet

                    let container2: HTMLElement = document.querySelector(".cardDiv" + secondIndex); //Container von zweiter Karte in Variable sleketieren
                    container2.classList.add("hidden"); 

                    firstMove = true; //Boolean um ersten Zug zu erlauben auf true stellen
                    stopMoves = true; //Boolean nach dem zweiten Zug wieder auf true setzten, um neue Züge zu ermöglichen
                    counter(); //Funktion zum Zählen aufrufen
                    winCounter++; //Variable als Punkte hochzählen
                    winAlert(); //Gewinnfunktion aufrufen
                    indexSaving = [];
                    
                    if (computerMove == true) { //Wenn der Boolean für den Computerzug true ist, dann...
                        computer(); //Computer Funktion aufrufen
                    }  //ComputerMove Boolean nicht auf false setzen, da der Computer noch einen Zug machen darf, nachdem ein Kartenpaar gefunden wurde

                } else { //Wenn die Variablen nicht gleich sind

                    let container1: HTMLElement = document.querySelector(".cardDiv" + firstIndex); //Container von erster Karte in Variable selektieren
                    container1.innerHTML = "<img src=material/BackCard/Memory-Back.png >"; //Hintergrund wieder auf Rückseite ändern, zum Karte umdrehen

                    let container2: HTMLElement = document.querySelector(".cardDiv" + secondIndex); //Container von zweiter Karte in Variable selektieren
                    container2.innerHTML = "<img src=material/BackCard/Memory-Back.png >"; //Hintergrund wieder auf Rückseite ändern, zum Karte umdrehen

                    firstMove = true; //Boolean um ersten Zug zu erlauben auf true stellen
                    stopMoves = true; //Boolean nach dem zweiten Zug wieder auf true setzten, um neue Züge zu ermöglichen
                    // Karten wieder umdrehen
                    indexSaving = [];

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

    //Karten im levelCards Array mischen
    function mixCards(): void {
        levelCards.sort(() => 0.5 - Math.random());
    }

    let computerCounterHTML: HTMLElement = document.getElementById("counterComputer"); //Variable für <p> Tag in der HTML
    let playerCounterHTML: HTMLElement = document.getElementById("counterPlayer");

    let computerPoints: number = 0; //Punkte für den Computer
    let playerPoints: number = 0; //Punkte für den Spieler

    //Zählen Funktion
    function counter(): void {
        if (computerMove == true) { //Wenn der Boolean computerMove true ist, ist der Computer am Zug
            computerPoints++; //=> Variable des Computers +1
            computerCounterHTML.innerHTML = "Computer: " + computerPoints + " in total"; //Punkte inner HTML ausgeben
        } else { //wenn Computer nicht dran ist (compterMove Boolean false), dann ist der Spieler am Zug
            playerPoints++; //=> Variable des Spielers +1
            playerCounterHTML.innerHTML = "Player: " + playerPoints + " in total"; //Punkte inner HTML ausgeben
        }
    }

    //Computer
    function computer(): void {
        if (computerLock == true) {
            let randomNumber: number[] = []; //Leeres Array, in welches  random Zahlen gepusht werden
            randomNumber.push(Math.floor(Math.random() * maxCards)); //-> *8 = random Zahlen von 0-7 (Easy) ins Array gepusht
            randomNumber.push(Math.floor(Math.random() * maxCards)); 
            if (randomNumber[0] != randomNumber[1]) { //Wenn die Nummern ungleich sind...
                if (levelCards[randomNumber[0]].found == false && levelCards[randomNumber[1]].found == false) { //...Wenn die "simulierten" Index im Array levelCards noch nicht gefunden wurden (Boolean found false)
                setTimeout(function (): void { //Damit die erste Karte etwas verzögert aufgedeckt wird
                        flipCard(randomNumber[0]); //Simulierter Index (Stelle der Karte) wird mit flipCard aufgerufen (Karte wird dann umgedreht)
                },         200);
                setTimeout(function (): void { //Damit die zweite Karte noch verzögerter aufgedeckt wird
                flipCard(randomNumber[1]);
                },         350);
                } else { //Wenn der Boolean found true ist, wurden Karten schon gefunden
                    computer(); //=> nochmal Computer, bis zwei Karten gezogen wurden, die noch nicht gefunden wurden
                }
            } else { //Wenn die Nummern gleich sind 
                computer(); //=> nochmal Computer, bis die Nummern ungleich sind (damit eine Karte nicht doppelt gezogen werden kann)
            }
        }
    }

    //Funktion für den Gewinnalert
    function winAlert(): void { 
        // setTimeout(function (): void {
        if (winCounter == maxCardsPair && computerPoints > playerPoints) {  //Wenn die Variable
            computerLock = false;
            setTimeout(function (): void {
            window.alert("Der Computer hat mit " + computerPoints + " Punkten gewonnen!");
            restart();
        },             500);
        } else if (winCounter == maxCardsPair && computerPoints < playerPoints) { 
            computerLock = false;
            setTimeout(function (): void {
            window.alert("Du hast mit " + playerPoints + " Punkten gewonnen!");
            restart();
        },             500);
        } else if (winCounter == maxCardsPair &&  computerPoints == playerPoints) { 
            computerLock = false;
            setTimeout(function (): void {
            window.alert("Unentschieden!");
            restart();
        },             500);
        }
    // },             500);
    } 

    function restart(): void {
        for (let index: number = 0; index < easyCards.length; index++) {
            easyCards[index].found = false;
            }
        for (let index: number = 0; index < mediumCards.length; index++) { 
            mediumCards[index].found = false;
            }
        for (let index: number = 0; index < hardCards.length; index++) { 
            hardCards[index].found = false;
            }
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
        winCounter = 0;
        if (container.classList.contains("containerHard")) {
            container.classList.remove("containerHard");
        } else if (container.classList.contains("containerEasyMedium")) { 
            container.classList.remove("containerEasyMedium");
        }
        
    }

    restartBtn.addEventListener("click", function (): void {
        computerLock = false;
        restart(); 
    });
}