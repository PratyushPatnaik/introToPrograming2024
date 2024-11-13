document.addEventListener("DOMContentLoaded", function () {
  const cutDownTreeButton = document.getElementById("cut-down-tree");

  // Function to update the inventory and save to localStorage
  function updateInventory(item) {
    // Get current items from localStorage
    let inventory = JSON.parse(localStorage.getItem("inventory")) || {
      food: "none",
      items: "none",
    };

    // Update inventory
    inventory.items = item; // Set the items to the new one (e.g., "lumber")

    // Save the updated inventory back to localStorage
    localStorage.setItem("inventory", JSON.stringify(inventory));

    // Update the inventory display
    const itemsElement = document.getElementById("items");
    itemsElement.textContent = `Items: ${inventory.items}`;
  }

  if (cutDownTreeButton) {
    cutDownTreeButton.addEventListener("click", function () {
      // Change button color when clicked
      this.classList.add("clicked");

      // Update the inventory and store it in localStorage
      updateInventory("lumber");
    });
  }

  // Retrieve the saved inventory from localStorage and display it
  const savedInventory = JSON.parse(localStorage.getItem("inventory"));
  if (savedInventory) {
    const foodElement = document.getElementById("food");
    const itemsElement = document.getElementById("items");

    // Display saved inventory
    foodElement.textContent = `Food: ${savedInventory.food}`;
    itemsElement.textContent = `Items: ${savedInventory.items}`;
  }
});
