document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("message-form");
    const outputName = document.getElementById("output-name");
    const outputBirthdate = document.getElementById("output-birthdate");
    const outputGender = document.getElementById("output-gender");
    const outputMessage = document.getElementById("output-message");
    const currentTime = document.getElementById("current-time");

    // Function to get current time
    function getCurrentTime() {
        const now = new Date();
        return now.toUTCString();
    }

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value;
        const birthdate = document.getElementById("birthdate").value;
        const gender = document.querySelector('input[name="gender"]:checked').value;
        const message = document.getElementById("message").value;

        // Update output section
        outputName.textContent = name;
        outputBirthdate.textContent = birthdate;
        outputGender.textContent = gender;
        outputMessage.textContent = message;
        currentTime.textContent = getCurrentTime();
    });
});