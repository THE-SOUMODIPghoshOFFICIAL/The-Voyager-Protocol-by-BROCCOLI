// ---------- APPLICATION STATE ----------
const appState = {
  travelType: null,
  destination: null,
  duration: null,
  climate: null,
};

// ---------- GENERIC BUTTON HANDLER ----------
const optionSections = document.querySelectorAll("section[data-category]");

optionSections.forEach((section) => {
  const category = section.dataset.category;
  const buttons = section.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons in this section
      buttons.forEach((btn) => btn.classList.remove("active"));

      // Mark clicked button as active
      button.classList.add("active");

      // Store selected value in app state
      appState[category] = button.dataset.value;

      console.log("Updated state:", appState);
    });
  });
});
