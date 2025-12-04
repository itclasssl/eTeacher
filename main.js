document.addEventListener("DOMContentLoaded", function () {
    // Accordion functionality for Subjects
    document.querySelectorAll('.subject-title').forEach(function (subjectTitle) {
        subjectTitle.addEventListener('click', function () {
            const content = this.nextElementSibling;
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });

    // Accordion functionality for Categories
    document.querySelectorAll('.category-title').forEach(function (categoryTitle) {
        categoryTitle.addEventListener('click', function () {
            const content = this.nextElementSibling;
            if (content.style.display === "none" || content.style.display === "") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        });
    });
});
