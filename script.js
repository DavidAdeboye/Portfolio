// Get the navbar element
const navbar = document.querySelector('.navbar');

// Get the initial offset of the navbar
const navbarOffset = navbar.offsetTop;

// Function to fix the navbar's position when scrolling
function fixNavbar() {
    if (window.pageYOffset >= navbarOffset) {
        navbar.classList.add('fixed');
    } else {
        navbar.classList.remove('fixed');
    }
}

// Add event listener for scroll event
window.addEventListener('scroll', fixNavbar);


// script.js
window.onload = function() {
    const img = document.querySelector('.app__header-img');
    let opacity = 0;
    const animationSpeed = 0.02; // Adjust animation speed as needed

    // Function to fade in the image
    function fadeInImage() {
        opacity += animationSpeed;
        img.style.opacity = opacity;

        if (opacity < 1) {
            requestAnimationFrame(fadeInImage);
        }
    }

    // Start the fade-in animation
    requestAnimationFrame(fadeInImage);
};



document.addEventListener('DOMContentLoaded', function() {
    const filterItems = document.querySelectorAll('.app__work-filter-item');
    const projects = document.querySelectorAll('.project');

    // Function to filter projects
    function filterProjects(filter) {
        projects.forEach(project => {
            if (filter === 'all' || project.dataset.category === filter) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }

    // Add click event listeners to filter items
    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove 'item-active' class from all filter items
            filterItems.forEach(filterItem => filterItem.classList.remove('item-active'));
            // Add 'item-active' class to the clicked filter item
            item.classList.add('item-active');
            // Get the filter category from the clicked filter item
            const filter = item.getAttribute('data-filter');
            // Filter projects based on the selected filter
            filterProjects(filter);
        });
    });

    // Display all projects by default
    filterProjects('all');
});
window.onload = function() {
    const img = document.querySelector('.app__work-portfolio');
    let opacity = 0;
    const animationSpeed = 0.018; // Adjust animation speed as needed

    // Function to fade in the image
    function fadeInImage() {
        opacity += animationSpeed;
        img.style.opacity = opacity;

        if (opacity < 1) {
            requestAnimationFrame(fadeInImage);
        }
    }

    // Start the fade-in animation
    requestAnimationFrame(fadeInImage);
};
window.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.app__navbar');
    const blurryBackground = document.querySelector('.blurry-background');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            blurryBackground.classList.add('active');
        } else {
            navbar.classList.remove('scrolled');
            blurryBackground.classList.remove('active');
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.getElementById('send-button');
    
    sendButton.addEventListener('click', function() {
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (username && email && message) {
            // Log the form data to the console
            console.log('Name:', username);
            console.log('Email:', email);
            console.log('Message:', message);

            // Store the form data in localStorage
            let messages = JSON.parse(localStorage.getItem('messages')) || [];
            messages.push({ username, email, message });
            localStorage.setItem('messages', JSON.stringify(messages));

            // Display a confirmation message to the user
            const confirmationMessage = document.getElementById('confirmation-message');
            confirmationMessage.style.display = 'block';

            // Clear the form inputs
            document.getElementById('username').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        } else {
            alert('Please fill out all fields.');
        }
    });

    // Retrieve and log all messages stored in localStorage
    function logStoredMessages() {
        let storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
        storedMessages.forEach((msg, index) => {
            console.log(`Message ${index + 1}`);
            console.log('Name:', msg.username);
            console.log('Email:', msg.email);
            console.log('Message:', msg.message);
        });
    }

    // Call the function to log stored messages when the page loads
    logStoredMessages();
});

