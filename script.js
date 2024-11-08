document.addEventListener('DOMContentLoaded', function() {
    // Check if the current page is the home page
    const isHomePage = window.location.pathname === '/'; // Adjust this if your home page has a different path
    const button = document.querySelector('.scroll-to-home-button');

    if (isHomePage) {
        button.style.display = 'none'; // Hide the button on the home page
    }

    button.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        const target = document.getElementById('navbarr'); // Assuming your home section has this ID
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the home section
        }
    });
});


// image filter//
function filterImages(category, button) {
    var images = document.querySelectorAll('.image-container');
    var buttons = document.querySelectorAll('.filter-btn');

    // Remove active class from all buttons
    buttons.forEach(function(btn) {
        btn.classList.remove('btn-active');
    });

    // Add active class to the clicked button
    button.classList.add('btn-active');

    // Show all images if "all" is selected
    if (category === 'all') {
        images.forEach(function(image) {
        image.style.display = 'block';
        });
    } else {
        images.forEach(function(image) {
        // Check if the image has the class for the selected category
        if (image.classList.contains(category)) {
            image.style.display = 'block'; // Show
        } else {
            image.style.display = 'none'; // Hide
        }
        });
    }
    }

    //mail sending

    