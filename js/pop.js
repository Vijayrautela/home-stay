
      // Function to open the popup
    //   function openPopup() {
    //       document.getElementById("popup").style.display = "block";
    //   }
  
    //   // Function to close the popup
    //   function closePopup() {
    //       document.getElementById("popup").style.display = "none";
    //   }
    // Get the popup element
    var popup = document.getElementById("popup");

    // Function to open the popup
    function openPopup() {
        popup.style.display = "block";
        // Add event listener to close popup when clicking outside of it
        window.addEventListener("click", outsideClick);
    }
          // Function to close the popup
    function closePopup() {
        popup.style.display = "none";
        // Remove event listener
        window.removeEventListener("click", outsideClick);
    }

    // Function to handle outside click
    function outsideClick(event) {
        if (event.target == popup) {
            closePopup();
        }
    }


      function calculateTotal() {
        var roomType = document.getElementById("roomType").value;
        var numGuests = document.getElementById("numGuests").value;
        var totalPricePerNight = 0;
        var totalPricePerWeek = 0;
        var totalPricePerMonth = 0;
        var packageRadios = document.getElementsByName("package");
        for (var i = 0; i < packageRadios.length; i++) {
            if (packageRadios[i].checked) {
                var packageValue = packageRadios[i].value;
                if (packageValue === "Single") {
                    totalPricePerNight += 80;
                    totalPricePerWeek += 80 * 7;
                    totalPricePerMonth += 80 * 30;
                } else if (packageValue === "Double") {
                    totalPricePerNight += 120;
                    totalPricePerWeek += 120 * 7;
                    totalPricePerMonth += 120 * 30;
                } else if (packageValue === "Twin") {
                    totalPricePerNight += 120;
                    totalPricePerWeek += 120 * 7;
                    totalPricePerMonth += 120 * 30;
                }  else if (packageValue === "En-Suite") {
                    totalPricePerNight += 150;
                    totalPricePerWeek += 150 * 7;
                    totalPricePerMonth += 150 * 30;
                }  else if (packageValue === "Family") {
                    totalPricePerNight += 200;
                    totalPricePerWeek += 200 * 7;
                    totalPricePerMonth += 200 * 30;
                }  else if (packageValue === "Entire") {
                    totalPricePerNight += 800;
                    totalPricePerWeek += 800 * 7;
                    totalPricePerMonth += 800 * 30;
                }  else if (packageValue === "Studios") {
                    totalPricePerNight += 200;
                    totalPricePerWeek += 200 * 7;
                    totalPricePerMonth += 200 * 30;
                }  else if (packageValue === "Dormitory") {
                    totalPricePerNight += 350;
                    totalPricePerWeek += 350 * 7;
                    totalPricePerMonth += 350 * 30;
                }
            }
        }
        totalPricePerNight *= numGuests; // Multiply total price per night by number of guests
        totalPricePerWeek *= numGuests; // Multiply total price per week by number of guests
        totalPricePerMonth *= numGuests; // Multiply total price per month by number of guests
        document.getElementById("totalPricePerNight").innerText = "₹" + totalPricePerNight + " per night ";
        document.getElementById("totalPricePerWeek").innerText = "₹" + totalPricePerWeek + " per week ";
        document.getElementById("totalPricePerMonth").innerText = "₹" + totalPricePerMonth + " per month ";
    }
    function pay() {
        // Implement payment logic here
        alert("Payment successful!");
    }
    
  