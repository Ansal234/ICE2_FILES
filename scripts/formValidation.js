console.log("formValidation.js loaded");

// globally declare general error and registration form elements to use
var generalError = document.getElementById("generalError");
var registrationForm = document.getElementById("registration-form");
let usernameInput = document.getElementById("usernameInput")

/**
 * Validate the username on form submission
 * @param {event}      the event when form submitted
 * @returns {boolean}  to indicate if the form is valid
 */
function validateForm(event) {
    //regex for checking format - KC03YYY (YYY - last 3 characters of userid)
    var usernameRegex = /^KC03[A-Z0-9]{3}$/;

    // entered username
    let username = usernameInput.value;

    //if valid username set general message and if not clear general message
    if(!username.match(usernameRegex)){
        // set red border for username
        usernameInput.style.border = "2px solid red";
        // set general error message
        generalError.innerHTML = "Enter valid username format KC03YYY - YYY is last 3 characters of userid";
        // show general error
        generalError.style.display = "block";
        
        return false; 
    }
    // remove set red border to default
    usernameInput.style.border = "inherit";
    // remove set general error message
    generalError.innerHTML = "";
    // hide general error
    generalError.style.display = "none";

    alert("Registration successfull!");
    
    return true;
}

// Called when reset button is clicked to reset form and clear error messages
function resetForm() {
    // remove if set general error message
    generalError.innerHTML = "";
    // hide if shown general error
    generalError.style.display = "none";
    // reset form programmatically
    registrationForm.reset();
}


//TODO:
// Make all fields required (HTML)
// Add a pattern attribute in the telephone element (HTML)
// Ensure the password is redacted into dots on screen when typed in (HTML)
// Create a function that knows if the username is valid (feel free to grab some RegEx from the Interwebs - cite source and test it!)
// If it is not valid, be sure to update the #generalError <p></p> with a good error message and some highlighting (red background, maybe?)
// Validate the username when the form is submitted
// Clear any additional error message and highlighting when the form is reset
// COMMENT EVERYTHING :D
