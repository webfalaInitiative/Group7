
// Function to show the specified form and hide the other one

document.addEventListener("DOMContentLoaded", function() {
    const customerHeader = document.getElementById("customerHeader");
    const driverHeader = document.getElementById("driverHeader");
    const customerForm = document.getElementById("customerForm");
    const driverForm = document.getElementById("driverForm");

    // Function to show the specified form and hide the other one
    function showForm(formToShow) {
        if (formToShow === "customer") {
            // If customer form is hidden, show it and hide driver form
            customerForm.style.display = "flex";
            driverForm.style.display = "none";
        } else if (formToShow === "driver") {
            // If customer form is visible, hide it and show driver form
            customerForm.style.display = "none";
            driverForm.style.display = "block";
        }
    }

    // Add click event listeners to customer and driver headers
    customerHeader.addEventListener("click", function() {
        showForm("customer"); // Corrected argument passed here
    });

    driverHeader.addEventListener("click", function() {
        showForm("driver");
    });
});

 //function to check the customer form before submiting
       document.getElementById("customerForm").addEventListener("submit", function(event) {
        let fullName = document.getElementById("full-name").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let confirmPassword = document.getElementById("confirm-password").value.trim();
        
        if (fullName.split(" ").length < 2 || email === "" || password === "" || confirmPassword === "" || password !== confirmPassword) {
            event.preventDefault(); // Prevent form submission if validation fails
            alert("Kindly ensure all fields are completed accurately. Please confirm that your full name is entered correctly and that the password and its confirmation match. After verifying this information, kindly attempt submission again. Thank you."); 
        }
    });

     //function to allow the driver-verification-code to accept a valid 4-digit PIN
     document.getElementById("driver-verification-code").addEventListener("input", function() {
        let pin = this.value.trim();
        let isValid = /^\d{4}$/.test(pin); // Regular expression to match exactly 4 digits
        
        if (!isValid) {
            this.setCustomValidity("Please enter a valid 4-digit PIN.");
        } else {
            this.setCustomValidity(""); // Clear the custom validation message if the input is valid
        }
    });
    
    //function to check the driver form before submiting
    document.getElementById("driverForm").addEventListener("submit", function (event) {
        let driverName = document.getElementById("driver-name").value.trim();
        let driverEmail = document.getElementById("driver-email").value.trim();
        let phoneNumber = document.getElementById("driver-phone-number").value.trim();
        let verificationCode = document.getElementById("driver-verification-code").value.trim();
        
        if (driverName.split(" ").length < 2 || driverEmail === "" || phoneNumber === "" || verificationCode === "" ) {
            event.preventDefault(); // Prevent form submission if validation fails
            alert("Kindly ensure all fields are completed accurately. Please confirm that your full name is entered correctly"); 
        }
    })

    document.getElementById('full-name').addEventListener('input', function() {
        var userInput = this.value;
        console.log("User full name :", userInput);
    });