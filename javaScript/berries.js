// Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript is working and DOM is fully loaded."); // This should log in the console when the page loads

  // Get the "Pick some berries" button
  const pickBerriesButton = document.getElementById("pick-berries");

  // Check if the button exists
  if (!pickBerriesButton) {
    console.log("Pick berries button not found!");
    return;
  } else {
    console.log("Pick berries button found!"); // This should log when the button is found
  }

  // Function to update the inventory
  function updateInventory() {
    console.log("Updating inventory...");

    // Update the food section of the inventory
    const foodElement = document.getElementById("food");
    foodElement.textContent = "Food: berries"; // This should update the inventory
  }

  // Add an event listener for the button
  pickBerriesButton.addEventListener("click", function () {
    console.log("Berries picked!"); // Log to confirm click is detected

    // Update inventory when the user picks berries
    updateInventory();

    // Change the text to reflect the player's action
    document.querySelector(".text h1").textContent = "You picked some berries!";
  });
});
