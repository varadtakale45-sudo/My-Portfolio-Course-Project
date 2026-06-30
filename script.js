function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");
  let nameField = document.getElementById("rec_name");

  // If the user has left a recommendation, display a pop-up
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");

    // Create a new 'recommendation' element and set its value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";

    // If a name was provided, include it as a byline
    if (nameField.value != null && nameField.value.trim() != "") {
      var nameLine = document.createElement("div");
      nameLine.setAttribute("class", "rec-name");
      nameLine.textContent = "— " + nameField.value.trim();
      element.appendChild(nameLine);
    }

    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element);

    // Reset the values of the form fields
    recommendation.value = "";
    nameField.value = "";

    // Show the success popup only when a new recommendation was actually submitted
    showPopup(true);
  }
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible';
  } else {
    document.getElementById('popup').style.visibility = 'hidden';
  }
}
