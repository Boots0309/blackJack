        // check if a person is old enough to enter the night club (21)
// log a suitable message in the console for both cases

// if less than 21 log 
let message1 = "You are to young to enter the club!";
// else log
let message2 = "Welcome!";
let age = 89;

if (age >= 21) {
    console.log(message2);
} else {
    console.log(message1);
};

// Check if the person is elegible for a birthday card from the King!
// if less the 100 log "Not elegible"
// if exactly 100 log "Here is your birthday card from the king!"
// else log "Not elegible, you've already gotten one"

let ageCheck = 101;

    if (ageCheck < 100) {
        console.log("Not elegible");
    } else if (ageCheck === 100) {
        console.log("Here is your birthday card from the king!");
    } else {
        console.log("Not elegible, you've already gotten one");
    };


    function assignVal(val) {
        let cardVal = "";
        switch(val) {
            case "2d":
            case "2h":
            case "2c":
            case "2s":
                cardVal = 2;
                break;
            case "3d":
            case "3h":
            case "3c":
            case "3s":
                cardVal = 3;
                break;
            case "4d":
            case "4h":
            case "4c":
            case "4s":
                cardVal = 4;
                break;
            case "5d":
            case "5h":
            case "5c":
            case "5s":
                cardVal = 5;
                break;
            case "6d":
            case "6h":
            case "6c":
            case "6s":
                cardVal = 6;
                break;
            case "7d":
            case "7h":
            case "7c":
            case "7s":
                cardVal = 7;
                break;
            case "8d":
            case "8h":
            case "8c":
            case "8s":
                cardVal = 8;
                break;
            case "9d":
            case "9h":
            case "9c":
            case "9s":
                cardVal = 9;
                break;
            case "10d":
            case "10h":
            case "10c":
            case "10s":
                cardVal = 10;
                break;
                                                                  
        };
    
        return cardVal;
    };
    
    console.log(assignVal("7c"))


    // Arrays
    // let mySelf = ["Joshua", 43, true]

let message = ["Hey, how's it going", 
    "I'm great, thank you! How about you?", 
    "All good. Been working on my portfolio lately."
]

let newMessage = "Same here";

message.push(newMessage);