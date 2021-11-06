var fname, lname, phone, email;
var run = true;
function printCust() {
    fname = document.getElementById("fname").value;
    lname = document.getElementById("lname").value;
    phone = parseInt(document.getElementById("phone").value);
    email = document.getElementById("email").value;

    if (validateEntry(fname, lname, phone, email) == true) {
        alert("Thank you for entering your info!!"
            + "\n" + "Name entered is: " + fname + " " + lname + "."
            + "\n" + "Phone number entered: " + phone + "."
            + "\n" + "Email entered is: " + email + ".");
    }
    else{
        alert("Please check the information entered")
    }




}

function validateEntry(fname, lname, phone, email) {
    if (typeof fname == "string") {

        if (typeof lname == "string") {

            if (typeof phone == "number") {
    

                if (typeof email == "string") {
                    return true;
                }
            }
        }
    }

    return false;
}
