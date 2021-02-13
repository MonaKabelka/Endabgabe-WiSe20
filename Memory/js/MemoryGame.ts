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
            pic: "material/EasyCards/1.png", //Jeweiliges Hintergrundbild
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
    const refreshBtn: HTMLElement = document.querySelector("#fa-redo-alt");
    //Boolean, für den ersten/zweiten Zug
    let firstMove: boolean = true;
    let humanMove: boolean = false;
    let computerMove: boolean = true;


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
        computer(); // Funktionsaufruf für den >Spielzug des Computers
    });

    btnMedium.addEventListener("click", function (): void {
        console.log("Difficulty: Medium");
        hideBtns();
        levelCards = mediumCards; //Alle Karten aus dem mediumCards Array sind nun im zuvor leeren levelCards gespeichert
        createCard("containerEasyMedium");
        mixCards();
        computer();
    });

    btnHard.addEventListener("click", function (): void {
        console.log("Difficulty: Hard");
        hideBtns();
        levelCards = hardCards; //Alle Karten aus dem hardCards Array sind nun im zuvor leeren levelCards gespeichert
        createCard("containerHard");
        mixCards();
        computer();
    });

    //Funktion zum verstecken von den Buttons mit CSS Klasse
    function hideBtns(): void {
        btnEasy.classList.add("hidden");
        btnMedium.classList.add("hidden");
        btnHard.classList.add("hidden");
    }

    //Variable für das div im HTML, in welches die Karten gepusht werden sollen
    let container: HTMLElement = document.getElementById("cardContainer");
    let stopMoves: boolean = true;
    let winCounter: number = 0;

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
                if (stopMoves == true) {
                    flipCard(index); //Eventlistener: beim klicken Karte umdrehen
                 }
            });
            container.appendChild(newCard); //Elemente im Container erstellen
        }
    }

    //Karte umdrehen Funktion
    function flipCard(index: number): void { //Index aus levelCards als Argument übergeben (Aufruf in createCard Funktion)
        console.log("flip");
        let container: HTMLElement = document.querySelector(".cardDiv" + index); //richtigen Container selektieren
        container.innerHTML = "<img src=" + levelCards[index].pic + ">"; //via innerHTMl das jeweilige Hintergrundbild (im Objekt hinterlegt) hinzufügen
        compareCards(index); //compareCards-Funktion aufrufen um Karten zu vergleichen
    }

    let firstCardChoice: number; //Variable um Vergleichoperator (compare Nummer im Objekt) beim ersten Klick zu speichern
    let secondCardChoice: number; //Variable um Vergleichoperator (compare Nummer im Objekt) beim ersten Klick zu speichern
    let firstIndex: number; //Variable um Index beim ersten Klick zu speichern
    let secondIndex: number; //Variable um Index beim zweiten Klick zu speichern

    //Funktion um Karten zu vergleichen
    function compareCards(index: number): void {
        if (firstMove == true) { //wenn boolean true ist, dann ist es der erste von zwei Zügen
            firstCardChoice = levelCards[index].compare; //Vergleichszahl wird in Variable gespeichert
            firstIndex = index; //Der Index wird in einer Variable gespeichert
            firstMove = false; //Boolean für den ersten Zug wird auf false gestellt
        } else {
            stopMoves = false;
            setTimeout(function (): void {
                secondCardChoice = levelCards[index].compare; //
                secondIndex = index;
                if (firstCardChoice == secondCardChoice) {
                    levelCards[firstIndex].found = true;
                    levelCards[secondIndex].found = true;

                    let container1: HTMLElement = document.querySelector(".cardDiv" + firstIndex);
                    container1.classList.add("hidden");

                    let container2: HTMLElement = document.querySelector(".cardDiv" + secondIndex);
                    container2.classList.add("hidden");

                    //Score vom jeweiligen Spieler hochzählen
                    console.log("Richtig");
                    firstMove = true;
                    stopMoves = true;
                    counter();
                    winCounter++;
                    
                    
                    if (computerMove == true) {
                        computer();
                    } //else {
                    //     computerMove = true;
                    // }
                    winAlert();
                } else {

                    let container1: HTMLElement = document.querySelector(".cardDiv" + firstIndex);
                    container1.innerHTML = "<img src=material/BackCard/Memory-Back.png >";

                    let container2: HTMLElement = document.querySelector(".cardDiv" + secondIndex);
                    container2.innerHTML = "<img src=material/BackCard/Memory-Back.png >";


                    firstMove = true;
                    console.log("Falsch");
                    stopMoves = true;
                    // Karten wieder umdrehen
                    if (computerMove == true) {
                        computerMove = false;
                    } else {
                        computerMove = true;
                        computer();
                    }
                }
            },         3000);
        }
    }

    //Karten im levelCards Array mischen
    function mixCards(): void {
        levelCards.sort(() => 0.5 - Math.random());
    }

    let computerCounterHTML: HTMLElement = document.getElementById("counterComputer");
    let playerCounterHTML: HTMLElement = document.getElementById("counterPlayer");

    let computerPoints: number = 0;
    let playerPoints: number = 0;

    function counter(): void {
        if (computerMove == true) {
            computerPoints++;
            computerCounterHTML.innerHTML = "Computer: " + computerPoints + " in total";
        } else {
            playerPoints++;
            playerCounterHTML.innerHTML = "Player: " + playerPoints + " in total";
        }
    }

    //Computer
    function computer(): void {
        let randomNumber: number[] = [];
        randomNumber.push(Math.floor(Math.random() * 8)); //-> *8 = random Zahlen von 0-7 (Easy)
        randomNumber.push(Math.floor(Math.random() * 8));
        if (randomNumber[0] != randomNumber[1]) {
            if (levelCards[randomNumber[0]].found == false && levelCards[randomNumber[1]].found == false) {
                flipCard(randomNumber[0]);
                flipCard(randomNumber[1]);
            } else {
                computer();
            }
        } else {
            computer();
        }
    }

    function winAlert(): void {
        if (winCounter == 4 && computerPoints > playerPoints) {
            window.alert("Der Computer hat mit " + computerPoints + " Punkten gewonnen!");
        } else if (winCounter == 4 &&  computerPoints < playerPoints) {
            window.alert("Der Player hat mit " + playerPoints + " Punkten gewonnen!");
        } else if (winCounter == 4 &&  computerPoints == playerPoints) {
            window.alert("Unentschieden!");
        }
    }


}