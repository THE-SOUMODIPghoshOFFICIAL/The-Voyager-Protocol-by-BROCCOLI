// Store selected travel type
let selectedTravelType = null;

// Get all travel type buttons
const travelTypeButtons = document.querySelectorAll("#travel-type button");

// Attach click event to each button
travelTypeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    travelTypeButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active class to clicked button
    button.classList.add("active");

    // Store selected value
    selectedTravelType = button.dataset.value;

    console.log("Selected travel type:", selectedTravelType);
  });
});
