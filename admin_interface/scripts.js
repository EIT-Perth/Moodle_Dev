// importScripts();
detectUser();

// Import relevant scripts
function importScripts() {
    // Call various functions
    let targettedNodeTwo = document.querySelector("body");
    targettedNodeTwo.insertAdjacentHTML('beforeend', '<script src="https://jmackas.github.io/Moodle_Dev/moodle_dropdown_sort/scripts.js"></script> <script src="https://jmackas.github.io/Moodle_Dev/moodle_grade_converter/script.js"></script>');
}

// Detect the user and invoke admin control options
function detectUser() {
    // Detect user's name
    let userName = document.querySelector(".usermendrop").innerText;

    // Array of managers to confirm. Note - add a space at the end of each name
    var managers = ["James Mackay ", "Natalie Deng "];

    // If the user is in the following array
    if (managers.includes(userName) == true) {
        // Check local storage to check if admin mode had been activated
        if (localStorage.getItem("Moodle Admin Mode") == "Activated") {
            // Activate admin mode
            activateAdmin()

            // Option to turn admin mode off
            let targettedNode = document.querySelector("ul.dropdown-menu.usermen");
            targettedNode.insertAdjacentHTML('beforeend', '<li><button onclick="deactivateAdmin()">Deactivate Admin Mode</button></li>');
        }
        
        // If local storage deactivated or not set yet
        if (localStorage.getItem("Moodle Admin Mode") == "Deactivated" || localStorage.getItem("Moodle Admin Mode") == null) {

            // Option to turn admin mode off
            let targettedNodeTwo = document.querySelector("ul.dropdown-menu.usermen");
            targettedNodeTwo.insertAdjacentHTML('beforeend', '<li><button onclick="activateAdmin()">Acivate Admin Mode</button></li>');
        }

        // Insert button for user if manager

    }

}

// Deactivate admin mode select
function deactivateAdmin() {
    localStorage.setItem("Moodle Admin Mode", "Deactivated");

    // Refresh required to deactivate admin
    window.location.reload();
}

// Activate admin mode
function activateAdmin() {
    // Confirm activation of admin mode and save to web storage
    localStorage.setItem("Moodle Admin Mode", "Activated");
    // Note stating it is admin mode
    let targettedNode = document.querySelector("#logocontainer");
    targettedNode.insertAdjacentHTML('beforeend', ' <span class="adminModeText">Administrator Mode Activated</span>');

}
