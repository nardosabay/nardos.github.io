function userInterestResponse() {
    const likeButton = document.getElementById("like");
    const dislikeButton = document.getElementById("dislike");
    const messagePanel = document.createElement("div");
    document.querySelector(".user-interact").appendChild(messagePanel);

    likeButton.addEventListener("click", function() {
        displayInterestMessage(true, messagePanel);
    });

    dislikeButton.addEventListener("click", function() {
        displayInterestMessage(false, messagePanel);
    });
}

// [5 marks] Conditional:
function displayInterestMessage(likesGameDev, messagePanel) {
    if (likesGameDev) {
        messagePanel.innerHTML = "You'd enjoy the Videos and Articles page!";
        messagePanel.style.backgroundColor = "green";
        messagePanel.style.color = "white";
    } else {
        messagePanel.innerHTML = "Stay clear of the Videos and Articles page!";
        messagePanel.style.backgroundColor = "red";
        messagePanel.style.color = "white";
    }
}
// invoke function
document.addEventListener("DOMContentLoaded", function() {
    userInterestResponse();
});

// [4 marks] Event Handler:
document.addEventListener("DOMContentLoaded", function() {
    let gameDev = document.getElementById('gameDev');
    gameDev.addEventListener('click', function() {
        if (!document.getElementById('thankYouMessage')) {
            let thankYouMessage = document.createElement('p');
            thankYouMessage.textContent = "Thank you for visiting my website!";
            thankYouMessage.setAttribute('id', 'thankYouMessage');
            thankYouMessage.style.color = 'black';
            gameDev.insertAdjacentElement('afterend', thankYouMessage);
        }
    });
});

// [20 marks] Form:
document.addEventListener("DOMContentLoaded", function() {
    const feedbackForm = document.getElementById("feedbackForm");
    const messagePanel = document.getElementById("message-panel");
    feedbackForm.addEventListener("submit", function(event) {
        console.log("Form submit event triggered.");
        event.preventDefault();
        const enjoyed = document.getElementById("enjoyed").value;
        const learned = document.getElementById("learned").value;
        const addition = document.getElementById("addition").value.trim();
        const removal = document.getElementById("removal").value.trim();
        const referral = document.getElementById("referral").value.trim();
        // checks if inputs are all entered or completely empty
        let isValid = enjoyed && learned && addition && removal && referral;
        messagePanel.innerHTML = isValid ? "Feedback submitted successfully. Thanks!" : "Please fill in all fields!";
        messagePanel.style.backgroundColor = isValid ? "green" : "red";
        messagePanel.style.color = "white";
    });
});

// [10 marks] Colour Changer:
function setLightMode() {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
}
function setDarkMode() {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
}
function setLightBlueMode() {
    document.body.style.backgroundColor = 'lightblue';
    document.body.style.color = 'black';
}
document.getElementById('light').addEventListener('click', setLightMode);
document.getElementById('dark').addEventListener('click', setDarkMode);
document.getElementById('lightBlue').addEventListener('click', setLightBlueMode);

setLightMode();