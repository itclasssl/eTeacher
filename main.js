document.addEventListener('DOMContentLoaded', () => {

    // Function to handle accordion toggling
    function setupAccordion(triggerSelector, contentSelector) {
        const triggers = document.querySelectorAll(triggerSelector);

        triggers.forEach(trigger => {
            trigger.addEventListener('click', () => {
                // Find the content associated with this trigger
                // Assuming structure: invalid-syntax trigger followed by invalid-syntax content
                const content = trigger.nextElementSibling;

                if (content && content.matches(contentSelector)) {
                    // Toggle visibility
                    if (content.style.display === 'block') {
                        content.style.display = 'none';
                    } else {
                        content.style.display = 'block';
                    }
                }
            });
        });
    }

    // Initialize accordions for Subjects and Categories
    setupAccordion('.subject-title', '.subject-content');
    setupAccordion('.category-title', '.category-content');

});
