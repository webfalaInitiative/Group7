

    document.addEventListener("DOMContentLoaded", function() {
        const customerHeader = document.getElementById("customerHeader");
        const driverHeader = document.getElementById("driverHeader");
        const customerForm = document.getElementById("customerForm");
        const driverForm = document.getElementById("driverForm");

        // Function to show the specified form and hide the other one
        function showForm(formToShow) {
            if (formToShow === "customer") {
                // If customer form is hidden, show it and hide driver form
                customerForm.style.display = "block";
                driverForm.style.display = "none";
            } else if (formToShow === "driver") {
                // If customer form is visible, hide it and show driver form
                customerForm.style.display = "none";
                driverForm.style.display = "block";
            }
        }

        // Add click event listeners to customer and driver headers
        customerHeader.addEventListener("click", function() {
            showForm(customerForm);
        });

        driverHeader.addEventListener("click", function() {
            showForm("driver");
        });
    });