namespace MemoryGame {

interface CardsInterface {
    color: string;
    pictogram: string;
    scentence: string;
    compare: number;
}

let EasyCards: CardsInterface [] = [ //Muss man jedes Objekt zweimal erstellen?? Kann man das nicht mit while schleifen machen?
    // Kartenpaar 1
    {
        color: "#CCFFCA",
        pictogram: "fab fa-pagelines",
        scentence: "", //geht das?? weil man nur die anderen sachen braucht
        compare: 1
    },
    {
        color: "#CCFFCA",
        pictogram: "fab fa-pagelines",
        scentence: "", 
        compare: 1
    },
    // Kartenpaar 2
    {
        color: "#84FE7F",
        pictogram: "fas fa-tree",
        scentence: "", 
        compare: 2
    },
    {
        color: "#84FE7F",
        pictogram: "fas fa-tree",
        scentence: "", 
        compare: 2
    },
    // Kartenpaar 3
    {
        color: "#8BCA89",
        pictogram: "fas fa-wine-bottle",
        scentence: "", 
        compare: 3
    },
    {
        color: "#8BCA89",
        pictogram: "fas fa-wine-bottle",
        scentence: "", 
        compare: 3
    },
    // Kartenpaar 4
    {
        color: "#619F5F",
        pictogram: "fas fa-bacterium",
        scentence: "", 
        compare: 4
    },
    {
        color: "#619F5F",
        pictogram: "fas fa-bacterium",
        scentence: "", 
        compare: 4
    }
];


    
}