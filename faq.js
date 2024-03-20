// Get all h3 elements within the FAQ section
const faqTitles = document.querySelectorAll('.faq-section h3');

// Add click event listeners to each h3 element
faqTitles.forEach(title => {
    title.addEventListener('click', () => {
        // Toggle the display of the preceding paragraph element
        title.nextElementSibling.style.display = title.nextElementSibling.style.display === 'none' ? 'block' : 'none';
    });
});