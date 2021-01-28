namespace MemoryGame {
    // Wrapper für die Buttons als Variable
    const btnWrapper: HTMLElement = document.getElementById("buttonsContainer");

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

    // geht das mit den buttons auch kürzer???
    // 
    btnEasy.addEventListener("click", function (): void {
        console.log("Difficulty: Easy");
        btnEasy.classList.add("hidden");
        btnHard.classList.add("hidden");
        btnMedium.classList.add("hidden");
    });

    btnMedium.addEventListener("click", function (): void {
        console.log("Difficulty: Medium");
        btnEasy.classList.add("hidden");
        btnHard.classList.add("hidden");
        btnMedium.classList.add("hidden");
    });

    btnHard.addEventListener("click", function (): void {
        console.log("Difficulty: Hard");
        btnEasy.classList.add("hidden");
        btnHard.classList.add("hidden");
        btnMedium.classList.add("hidden");
    });


    interface CardsInterface {
        color: string;
        pictogram: string;
        scentence: string;
        compare: number;
    }

    let allCards: CardsInterface[] = [ //Muss man jedes Objekt zweimal erstellen?? Kann man das nicht mit for schleife zweimal erstellen? Wie soll das dann mit dem Satz gehen?
        {
            color: "#CCFFCA",
            pictogram: "fas fa-bolt",
            scentence: "",
            compare: 1
        },
        {
            color: "",
            pictogram: "fas fa-wind",
            scentence: "",
            compare: 2
        },
        {
            color: "#84FE7F",
            pictogram: "fas fa-smog",
            scentence: "",
            compare: 3
        },
        {
            color: "#84FE7F",
            pictogram: "fas fa-cloud",
            scentence: "",
            compare: 4
        },
        {
            color: "#8BCA89",
            pictogram: "fas fa-sun",
            scentence: "",
            compare: 5
        },
        {
            color: "#8BCA89",
            pictogram: "fas fa-umbrella",
            scentence: "",
            compare: 6
        },
        {
            color: "#619F5F",
            pictogram: "fas fa-rainbow",
            scentence: "",
            compare: 7
        },
        {
            color: "#619F5F",
            pictogram: "fas fa-cloud-sun-rain",
            scentence: "",
            compare: 8
        },
        {
            color: "",
            pictogram: "fas fa-cloud-sun",
            scentence: "",
            compare: 9
        },
        {
            color: "",
            pictogram: "fas fa-cloud-showers-heavy",
            scentence: "",
            compare: 10
        },
        {
            color: "",
            pictogram: "fas fa-cloud-rain",
            scentence: "",
            compare: 11
        },
        {
            color: "",
            pictogram: "fas fa-cloud-moon-rain",
            scentence: "",
            compare: 12
        },
        {
            color: "",
            pictogram: "fas fa-cloud-meatball",
            scentence: "",
            compare: 13
        },
        {
            color: "",
            pictogram: "fas fa-temperature-low",
            scentence: "",
            compare: 14
        },
        {
            color: "",
            pictogram: "far fa-snowflake",
            scentence: "",
            compare: 15
        },
        {
            color: "",
            pictogram: "fas fa-cloud-moon",
            scentence: "",
            compare: 16
        }
    ];

    let cardDOMElement: HTMLElement;

}