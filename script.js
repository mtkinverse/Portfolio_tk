function addRecommendation() {
    // Get the message of the new recommendation
    let recommendation = document.getElementById("new_recommendation");
    // If the user has left a recommendation, display a pop-up
    if (recommendation.value != null && recommendation.value.trim() != "") {
        console.log("New recommendation added");
        //Call showPopup here

        // Create a new 'recommendation' element and set it's value to the user's message
        var element = document.createElement("div");
        element.setAttribute("class", "recommendation");
        element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";
        // Add this element to the end of the list of recommendations
        document.getElementById("all_recommendations").appendChild(element);

        // Reset the value of the textarea
        recommendation.value = "";
        showPopup(true);
    }
}

function showPopup(bool) {
    if (bool) {
        document.getElementById('popup').style.visibility = 'visible'
    } else {
        document.getElementById('popup').style.visibility = 'hidden'
    }
}

function ToggleNav() {

    const toggleButton = document.getElementById('dropdown');

    if (screen.width > 1080) {
        toggleButton.style.display = 'none';
    } else {

        if (toggleButton.style.display === 'none') {
            toggleButton.style.display = 'flex';
        } else {
            toggleButton.style.display = 'none';
        }

    }

}