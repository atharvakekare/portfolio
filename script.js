document.addEventListener("DOMContentLoaded", function () {
    const viewButtons = document.querySelectorAll('.btn');
    
    

    viewButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent the default link behavior
            const projectContainer = button.closest('.btn');
            const projectLink = projectContainer.getAttribute('.data-link');

            if (projectLink) {
                window.location.href = projectLink;

            }

        });
    });
});