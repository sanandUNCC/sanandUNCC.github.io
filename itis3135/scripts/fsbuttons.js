function quip(){
    var quips = ["Always remember that you’re unique. Just like everyone else.", 
    "When something goes wrong in your life, just yell “Plot Twist” and move on.", 
    "Nobody really cares if you’re miserable, so you might as well be happy.",
    "When one door closes, another opens. Or you can open the closed door. That’s how doors work."];
    var randomQuip = quips[Math.floor(Math.random() * 4)];
    alert("You wanted me to be funny so laugh: " + randomQuip);
}
function useless(){
    alert("So that's how you want to spend your time? Ok go there I guess.");
    open("https://theuselessweb.com", "_blank");
}
function axoFacts(){
    var facts = ["Axolotl are only found in Mexico", "Axolotl can regrow limbs up to 5 times", 
    "Axolotl have gills and functional lungs", "Axolotl feed through suction"];
    var randomFact = facts[Math.floor(Math.random() * 4)];
    alert("You wanted a fact so here: " + randomFact);
}
function calcHeck(){
    var userHeck = prompt("How many hecks do you give?");
    var numHeck = parseInt(userHeck);
    alert("Well I know you give " + numHeck + " hecks, but I give " + (numHeck * 0) + " hecks." );
}
function boop(){
    alert("You just got booped. You feel better.")
}