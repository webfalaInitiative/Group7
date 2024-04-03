// Get all div elements within the FAQ section
const faqDivs = document.querySelectorAll('.faq-section div');

// Add click event listeners to each div element
faqDivs.forEach(div => {
    // Add click event listener to the div element
    div.addEventListener('click', () => {
        // Find the p element within the div
        const paragraph = div.querySelector('p');
        
        // Toggle the display of the paragraph element
        paragraph.classList.toggle('hidden');
        
        // Find the img element within the div
        const img = div.querySelector('img');
        
        
    });
});
