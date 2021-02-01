var MemoryGame;
(function (MemoryGame) {
    var easyCards = [
        // Kartenpaar 1
        {
            pic: "material/EasyCards/1.png",
            compare: 1
        },
        {
            pic: "material/EasyCards/1.png",
            compare: 1
        },
        // Kartenpaar 2
        {
            pic: "material/EasyCards/2.png",
            compare: 2
        },
        {
            pic: "material/EasyCards/2.png",
            compare: 2
        },
        // Kartenpaar 3
        {
            pic: "material/EasyCards/3.png",
            compare: 3
        },
        {
            pic: "material/EasyCards/3.png",
            compare: 3
        },
        // Kartenpaar 4
        {
            pic: "material/EasyCards/4.png",
            compare: 4
        },
        {
            pic: "material/EasyCards/4.png",
            compare: 4
        }
    ];
    var mediumCards = [
        // Kartenpaar 1
        {
            pic: "material/MediumCards/1.png",
            compare: 1
        },
        {
            pic: "material/MediumCards/2.png",
            compare: 1
        },
        // Kartenpaar 2
        {
            pic: "material/MediumCards/3.png",
            compare: 2
        },
        {
            pic: "material/MediumCards/4.png",
            compare: 2
        },
        // Kartenpaar 3
        {
            pic: "material/MediumCards/5.png",
            compare: 3
        },
        {
            pic: "material/MediumCards/6.png",
            compare: 3
        },
        // Kartenpaar 4
        {
            pic: "material/MediumCards/7.png",
            compare: 4
        },
        {
            pic: "material/MediumCards/8.png",
            compare: 4
        },
        // Kartenpaar 5
        {
            pic: "material/MediumCards/9.png",
            compare: 5
        },
        {
            pic: "material/MediumCards/10.png",
            compare: 5
        },
        // Kartenpaar 6
        {
            pic: "material/MediumCards/11.png",
            compare: 6
        },
        {
            pic: "material/MediumCards/12.png",
            compare: 6
        },
        // Kartenpaar 7
        {
            pic: "material/MediumCards/13.png",
            compare: 7
        },
        {
            pic: "material/MediumCards/14.png",
            compare: 7
        },
        // Kartenpaar 8
        {
            pic: "material/MediumCards/15.png",
            compare: 8
        },
        {
            pic: "material/MediumCards/16.png",
            compare: 8
        }
    ];
    var hardCards = [
        // Kartenpaar 1
        {
            pic: "material/HardCards/1.png",
            compare: 1
        },
        {
            pic: "material/HardCards/2.png",
            compare: 1
        },
        // Kartenpaar 2
        {
            pic: "material/HardCards/3.png",
            compare: 2
        },
        {
            pic: "material/HardCards/4.png",
            compare: 2
        },
        // Kartenpaar 3
        {
            pic: "material/HardCards/5.png",
            compare: 3
        },
        {
            pic: "material/HardCards/6.png",
            compare: 3
        },
        // Kartenpaar 4
        {
            pic: "material/HardCards/7.png",
            compare: 4
        },
        {
            pic: "material/HardCards/8.png",
            compare: 4
        },
        // Kartenpaar 5
        {
            pic: "material/HardCards/9.png",
            compare: 5
        },
        {
            pic: "material/HardCards/10.png",
            compare: 5
        },
        // Kartenpaar 6
        {
            pic: "material/HardCards/11.png",
            compare: 6
        },
        {
            pic: "material/HardCards/12.png",
            compare: 6
        },
        // Kartenpaar 7
        {
            pic: "material/HardCards/13.png",
            compare: 7
        },
        {
            pic: "material/HardCards/14.png",
            compare: 7
        },
        // Kartenpaar 8
        {
            pic: "material/HardCards/15.png",
            compare: 8
        },
        {
            pic: "material/HardCards/16.png",
            compare: 8
        },
        // Kartenpaar 9
        {
            pic: "material/HardCards/17.png",
            compare: 9
        },
        {
            pic: "material/HardCards/18.png",
            compare: 9
        },
        // Kartenpaar 10
        {
            pic: "material/HardCards/19.png",
            compare: 10
        },
        {
            pic: "material/HardCards/20.png",
            compare: 10
        },
        // Kartenpaar 11
        {
            pic: "material/HardCards/21.png",
            compare: 11
        },
        {
            pic: "material/HardCards/22.png",
            compare: 11
        },
        // Kartenpaar 12
        {
            pic: "material/HardCards/23.png",
            compare: 12
        },
        {
            pic: "material/HardCards/24.png",
            compare: 12
        },
        // Kartenpaar 13
        {
            pic: "material/HardCards/25.png",
            compare: 13
        },
        {
            pic: "material/HardCards/26.png",
            compare: 13
        },
        // Kartenpaar 14
        {
            pic: "material/HardCards/27.png",
            compare: 14
        },
        {
            pic: "material/HardCards/28.png",
            compare: 14
        },
        // Kartenpaar 15
        {
            pic: "material/HardCards/29.png",
            compare: 15
        },
        {
            pic: "material/HardCards/30.png",
            compare: 15
        },
        // Kartenpaar 16
        {
            pic: "material/HardCards/31.png",
            compare: 16
        },
        {
            pic: "material/HardCards/32.png",
            compare: 16
        }
    ];
    var emptyArray = [];
    // Wrapper für die Buttons als Variable
    var btnWrapper = document.getElementById("buttonsContainer");
    // Buttons erstellen in Wrapper
    var btnEasy = document.createElement("button");
    btnEasy.innerHTML = "Easy"; //wieso wird nur text von letztem button angezeigt?
    btnWrapper.appendChild(btnEasy);
    var btnMedium = document.createElement("button");
    btnMedium.innerHTML = "Medium";
    btnWrapper.appendChild(btnMedium);
    var btnHard = document.createElement("button");
    btnHard.innerHTML = "Hard";
    btnWrapper.appendChild(btnHard);
    // Eventlistener für die Buttons
    btnEasy.addEventListener("click", function () {
        console.log("Difficulty: Easy");
        hideBtns();
        emptyArray = easyCards;
        createCard("containerEasyMedium");
    });
    btnMedium.addEventListener("click", function () {
        console.log("Difficulty: Medium");
        hideBtns();
        emptyArray = mediumCards;
        createCard("containerEasyMedium");
    });
    btnHard.addEventListener("click", function () {
        console.log("Difficulty: Hard");
        hideBtns();
        emptyArray = hardCards;
        createCard("containerHard");
    });
    // Funktion zum verstecken von den Buttons
    function hideBtns() {
        btnEasy.classList.add("hidden");
        btnHard.classList.add("hidden");
        btnMedium.classList.add("hidden");
    }
    var container = document.getElementById("cardContainer");
    function createCard(grid) {
        // Container leeren
        container.innerHTML = "";
        container.classList.add(grid);
        var _loop_1 = function (index) {
            var newCard = document.createElement("div");
            newCard.classList.add("cardDiv" + index);
            newCard.innerHTML = "<img src=material/BackCard/Memory-Back.png>";
            newCard.addEventListener("click", function () {
                flipCard(index);
            });
            container.appendChild(newCard);
        };
        for (var index = 0; index < emptyArray.length; index++) {
            _loop_1(index);
        }
    }
    function flipCard(index) {
        console.log("flipflip");
        var container = document.querySelector(".cardDiv" + index);
        container.innerHTML = "<img src=" + emptyArray[index].pic + ">";
        compareCards(index);
        setTimeout(function () {
            container.innerHTML = "<img src=material/BackCard/Memory-Back.png>";
        }, 3000);
    }
    var firstMove = true;
    function compareCards(index) {
        console.log("comparing");
        var firstCardChoice;
        var secondCardChoice;
        if (firstMove == true) {
            firstCardChoice = emptyArray[index].compare;
            firstMove = false;
        }
        else {
            secondCardChoice = emptyArray[index].compare;
            if (firstCardChoice == secondCardChoice) {
                //Score vom jeweiligen Spieler hoch
                //hidden
                console.log("Richtig");
                firstMove = true;
            }
            else {
                firstMove = true;
                console.log("Falsch");
                console.log(firstCardChoice);
                console.log(secondCardChoice);
                // Karten umdrehen
                // 
            }
        }
    }
})(MemoryGame || (MemoryGame = {}));
//# sourceMappingURL=MemoryGame.js.map