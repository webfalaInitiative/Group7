

    document.addEventListener("DOMContentLoaded", function () {
        // Select the "Contact" link
        var contactLink = document.getElementById("contact");
    
        // Add click event listener to the "Contact" link
        contactLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default link behavior
    
            // Select the nested ul
            var nestedUl = contactLink.nextElementSibling;
    
            // Toggle the visibility of the nested ul
            nestedUl.classList.toggle('hidden');
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        var closeDropdownButton = document.getElementById("closeDropdown");
        var dropdown = document.getElementById("dropdown");
    
        closeDropdownButton.addEventListener("click", function () {
            dropdown.classList.add("hidden");
        });
    });
    