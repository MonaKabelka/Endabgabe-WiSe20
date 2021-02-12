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
    var refreshBtn = document.querySelector("#fa-redo-alt");
    //Boolean, für den ersten/zweiten Zug
    var firstMove = true;
    var humanMove = false;
    var computerMove = true;
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
        computer();
    });
    btnMedium.addEventListener("click", function () {
        console.log("Difficulty: Medium");
        hideBtns();
        levelCards = mediumCards; //Alle Karten aus dem mediumCards Array sind nun im zuvor leeren levelCards gespeichert
        createCard("containerEasyMedium");
        mixCards();
    });
    btnHard.addEventListener("click", function () {
        console.log("Difficulty: Hard");
        hideBtns();
        levelCards = hardCards; //Alle Karten aus dem hardCards Array sind nun im zuvor leeren levelCards gespeichert
        createCard("containerHard");
        mixCards();
    });
    //Funktion zum verstecken von den Buttons mit CSS Klasse
    function hideBtns() {
        btnEasy.classList.add("hidden");
        btnMedium.classList.add("hidden");
        btnHard.classList.add("hidden");
    }
    //Variable für das div im HTML, in welches die Karten gepusht werden sollen
    var container = document.getElementById("cardContainer");
    function createCard(grid) {
        //Container leeren
        container.innerHTML = "";
        container.classList.add(grid); //Die richtige Klasse für das Grid in CSS bei Funktionsaufruf als Argument übergeben
        var _loop_1 = function (index) {
            var newCard = document.createElement("div");
            newCard.classList.add("cardDiv" + index);
            newCard.innerHTML = "<img src=material/BackCard/Memory-Back.png>";
            newCard.addEventListener("click", function () {
                flipCard(index);
            });
            container.appendChild(newCard);
        };
        //Eine Karte als HTML-Element erstellen
        for (var index = 0; index < levelCards.length; index++) {
            _loop_1(index);
        }
    }
    //Karte umdrehen
    function flipCard(index) {
        console.log("flipflip");
        var container = document.querySelector(".cardDiv" + index);
        container.innerHTML = "<img src=" + levelCards[index].pic + ">";
        compareCards(index);
    }
    var firstCardChoice;
    var secondCardChoice;
    var firstIndex;
    var secondIndex;
    function compareCards(index) {
        console.log("comparing");
        if (firstMove == true) {
            firstCardChoice = levelCards[index].compare;
            firstIndex = index;
            console.log(firstCardChoice);
            firstMove = false;
        }
        else {
            secondCardChoice = levelCards[index].compare;
            secondIndex = index;
            if (firstCardChoice == secondCardChoice) {
                levelCards[firstIndex].found = true;
                levelCards[secondIndex].found = true;
                var container1 = document.querySelector(".cardDiv" + firstIndex);
                container1.classList.add("hidden");
                var container2 = document.querySelector(".cardDiv" + secondIndex);
                container2.classList.add("hidden");
                //Score vom jeweiligen Spieler hochzählen
                //Nutzerwechsel
                console.log("Richtig");
                firstMove = true;
                if (computerMove == true) {
                    computer();
                } //else {
                //     computerMove = true;
                // }
            }
            else {
                setTimeout(function () {
                    var container1 = document.querySelector(".cardDiv" + firstIndex);
                    container1.innerHTML = "<img src=material/BackCard/Memory-Back.png >";
                    var container2 = document.querySelector(".cardDiv" + secondIndex);
                    container2.innerHTML = "<img src=material/BackCard/Memory-Back.png >";
                }, 3000);
                firstMove = true;
                console.log("Falsch");
                console.log(firstCardChoice);
                console.log(secondCardChoice);
                // Karten wieder umdrehen
                if (computerMove == true) {
                    computerMove = false;
                }
                else {
                    computerMove = true;
                    computer();
                }
            }
        }
    }
    //Karten im levelCards Array mischen
    function mixCards() {
        levelCards.sort(function () { return 0.5 - Math.random(); });
    }
    //Computer
    function computer() {
        var randomNumber = [];
        randomNumber.push(Math.floor(Math.random() * 8)); //-> *8 = random Zahlen von 0-7 (Easy)
        randomNumber.push(Math.floor(Math.random() * 8));
        if (randomNumber[0] != randomNumber[1]) {
            if (levelCards[randomNumber[0]].found == false && levelCards[randomNumber[1]].found == false) {
                flipCard(randomNumber[0]);
                flipCard(randomNumber[1]);
            }
            else {
                computer();
            }
        }
        else {
            computer();
        }
    }
})(MemoryGame || (MemoryGame = {}));
//# sourceMappingURL=MemoryGame.js.map