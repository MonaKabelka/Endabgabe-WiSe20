namespace MemoryGame {

    // Interface für Objekte von Karten _________________________________________________________________________________________________________
    interface CardsInterface {
        pic: string;
        compare: number;
        found: boolean;
    }

    let easyCards: CardsInterface[] = [
        // Kartenpaar 1
        {
            pic: "material/EasyCards/1.png",
            compare: 1,
            found: false
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

    let emptyArray: CardsInterface[] = [

    ];

    // Wrapper für die Buttons als Variable
    const btnWrapper: HTMLElement = document.getElementById("buttonsContainer");
    let firstMove: boolean = true;

    // Buttons erstellen in Wrapper
    let btnEasy: HTMLButtonElement = document.createElement("button");
    btnEasy.innerHTML = "Easy"; //wieso wird nur text von letztem button angezeigt?
    btnWrapper.appendChild(btnEasy);

    let btnMedium: HTMLButtonElement = document.createElement("button");
    btnMedium.innerHTML = "Medium";
    btnWrapper.appendChild(btnMedium);

    let btnHard: HTMLButtonElement = document.createElement("button");
    btnHard.innerHTML = "Hard";
    btnWrapper.appendChild(btnHard);

    // Eventlistener für die Buttons
    btnEasy.addEventListener("click", function (): void {
        console.log("Difficulty: Easy");
        hideBtns();
        emptyArray = easyCards;
        createCard("containerEasyMedium");
    });

    btnMedium.addEventListener("click", function (): void {
        console.log("Difficulty: Medium");
        hideBtns();
        emptyArray = mediumCards;
        createCard("containerEasyMedium");
    });

    btnHard.addEventListener("click", function (): void {
        console.log("Difficulty: Hard");
        hideBtns();
        emptyArray = hardCards;
        createCard("containerHard");
    });

    // Funktion zum verstecken von den Buttons
    function hideBtns(): void {
        btnEasy.classList.add("hidden");
        btnHard.classList.add("hidden");
        btnMedium.classList.add("hidden");
    }

    let container: HTMLElement = document.getElementById("cardContainer");

    function createCard(grid: string): void { //kann man ein array als argument übergeben?? idk
        // Container leeren
        container.innerHTML = "";
        container.classList.add(grid);

        for (let index: number = 0; index < emptyArray.length; index++) {
            let newCard: HTMLElement = document.createElement("div");
            newCard.classList.add("cardDiv" + index);
            newCard.innerHTML = "<img src=material/BackCard/Memory-Back.png>";
            newCard.addEventListener("click", function (): void {
                flipCard(index);
            });

            container.appendChild(newCard);
        }
    }

    function flipCard (index: number): void {
        console.log ("flipflip");
        let container: HTMLElement = document.querySelector(".cardDiv" + index);

        container.innerHTML = "<img src=" + emptyArray[index].pic + ">";

        compareCards(index);

        setTimeout(function (): void {
            container.innerHTML = "<img src=material/BackCard/Memory-Back.png>";
        },         3000);
    }

    let firstCardChoice: number;
    let secondCardChoice: number; 

    function compareCards (index: number): void {
        console.log ("comparing");

        if (firstMove == true) {
            console.log("HALLO");
            firstCardChoice = emptyArray[index].compare;
            console.log(firstCardChoice);
            firstMove = false;
        } else {
            console.log("TSCHÜSS");
            secondCardChoice = emptyArray[index].compare;
            if (firstCardChoice == secondCardChoice) {
                    //Score vom jeweiligen Spieler hoch
                    //hidden
                    //Nutzerwechsel
                    console.log ("Richtig");
                    firstMove = true;
            }   else {
                firstMove = true;
                console.log ("Falsch");
                console.log (firstCardChoice);
                console.log (secondCardChoice);
                // Karten umdrehen
                // 
            }
        }
    }

    let test: number;
    test = Math.floor(Math.random() * 9);
    console.log (test); //verhindern dass gleiche nummern gewählt werden; 


}