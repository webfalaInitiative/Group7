

    document.addEventListener("DOMContentLoaded", function () {
        // Select the "Contact" link
        let contactLink = document.getElementById("contact");
    
        // Add click event listener to the "Contact" link
        contactLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default link behavior
    
            // Select the nested ul
            let nestedUl = contactLink.nextElementSibling;
    
            // Toggle the visibility of the nested ul
            nestedUl.classList.toggle('hidden');
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
        let closeDropdownButton = document.getElementById("closeDropdown");
        let dropdown = document.getElementById("dropdown");
    
        closeDropdownButton.addEventListener("click", function () {
            dropdown.classList.add("hidden");
        });
    });

    document.addEventListener("DOMContentLoaded", function () {
       let menulink = document.getElementById("menu");

       menulink.addEventListener("click", function (event) {
            event.preventDefault();
            let nestedLi = menulink.nextElementSibling;
                nestedLi.classList.toggle('hidden')
       })
    })
    
    document.addEventListener("DOMContentLoaded", function () {
        let menuClose = document.getElementById("menu-close");
        let menudrop = document.getElementById("menudrop");

        menuClose.addEventListener("click",function 
        () {
            menudrop.classList.add("hidden")
        })
    })

