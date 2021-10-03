var userNum;

function validateEntry(userInput) {
    if (userInput < 0) {
        return Math.abs(userInput);
    }
    else if (userInput > 0 && userInput < 1) {
        return Math.round(userInput);
    }
    else{
        return userInput;
    }

}

function runCondition(userInput) {
    if (userInput >= 0 || userInput <= 10) {
        return false;
    }
    else {
        alert("Please input a number between 0 and 10")
        return true;
    }
}

function getShape(corrUser) {
    switch (parseInt(corrUser)) {
        case 1:
            return "henagon or monogon";
            break;
        case 2:
            return "digon or bigon";
            break;
        case 3:
            return "trigon or triangle";
            break;
        case 4:
            return "tetragon or quadrilateral";
            break;
        case 5:
            return "pentagon";
            break;
        case 6:
            return "hexagon";
            break;
        case 7:
            return "heptagon or septagon";
            break;
        case 8:
            return "octogon";
            break;
        case 9:
            return "enneagon or nonagon";
            break;
        case 10:
            return "decagon";
            break;
    }
}

function printShape(corrUser){
    alert("The polygon that has that many sides is: " + getShape(corrUser) + ".")
}

do {
    userNum = prompt("The Satyrical Axolotl is feeling nice and would like to know your number (0-10): ");
    //alert("userNum = " + userNum);
    var corrEntry = validateEntry(userNum);
    alert("You entered " + corrEntry + " as your number.");
    printShape(corrEntry);
} while (runCondition(corrEntry));











