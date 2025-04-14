const form = document.getElementById("data-form");
const responseDisplay = document.getElementById("response");

// Replace YOUR_WEBHOOK_URL with the Web App URL you provided
const webhookURL = "https://script.google.com/macros/s/AKfycbzNeUV8vhoLtvcA9U9Yq7APmKjkaDWblcUD6yID72CbIAxm-PauoQlKhOOmDOkpjqBH/exec";

form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    const formData = {
        name: document.getElementById("name").value,
        subject: document.getElementById("subject").value,
        grade: document.getElementById("grade").value
    };

    fetch(webhookURL, {
        method: "POST",
        body: JSON.stringify(formData)
    })
        .then(response => response.text())
        .then(data => {
            responseDisplay.textContent = "Data submitted successfully!";
            form.reset(); // Clear the form
        })
        .catch(error => {
            responseDisplay.textContent = "Error submitting data.";
            console.error("Error:", error);
        });
});
