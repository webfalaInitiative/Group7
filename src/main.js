
    document.addEventListener("DOMContentLoaded", function () {
        // Select the "Contact" link
        var contactLink = document.getElementById("contact");
        console.log(contactLink);

        // Select the nested ul
        var nestedUl = document.querySelector('li a[href="#"] + img + ul');
        console.log(nestedUl);

        // Add click event listener to the "Contact" link
        contactLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default link behavior

            // Toggle the visibility of the nested ul
            nestedUl.classList.toggle('hidden');
        });
    });
