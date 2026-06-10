// Navbar Scroll Effect
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        
        if (scrollTop > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe Elements on Page Load
document.addEventListener('DOMContentLoaded', function() {
    const profileItems = document.querySelectorAll('.app__profile-item');
    const workItems = document.querySelectorAll('.app__work-item');
    const skillsItems = document.querySelectorAll('.app__skills-item');
    const footerCards = document.querySelectorAll('.app__footer-card');

    [profileItems, workItems, skillsItems, footerCards].forEach(collection => {
        collection.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            item.style.transition = 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
            observer.observe(item);
        });
    });
});

// Filter Functionality with Smooth Transitions
document.addEventListener('DOMContentLoaded', function() {
    const filterItems = document.querySelectorAll('.app__work-filter-item');
    const projects = document.querySelectorAll('.project');

    function filterProjects(filter) {
        projects.forEach((project, index) => {
            const shouldShow = filter === 'all' || project.dataset.category === filter;
            
            if (shouldShow) {
                setTimeout(() => {
                    project.style.display = 'block';
                    project.style.animation = 'none';
                    setTimeout(() => {
                        project.style.animation = 'fadeInUp 0.6s ease-out';
                    }, 10);
                }, index * 50);
            } else {
                project.style.display = 'none';
            }
        });
    }

    filterItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            filterItems.forEach(filterItem => filterItem.classList.remove('item-active'));
            item.classList.add('item-active');
            
            const filter = item.getAttribute('data-filter');
            filterProjects(filter);
        });
    });

    filterProjects('all');
});

// Contact Form Handler
document.addEventListener('DOMContentLoaded', function() {
    const sendButton = document.getElementById('send-button');
    
    if (sendButton) {
        sendButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            const confirmationMessage = document.getElementById('confirmation-message');

            if (username && email && message && username.value && email.value && message.value) {
                console.log('Name:', username.value);
                console.log('Email:', email.value);
                console.log('Message:', message.value);

                let messages = JSON.parse(localStorage.getItem('messages')) || [];
                messages.push({ 
                    username: username.value, 
                    email: email.value, 
                    message: message.value,
                    timestamp: new Date()
                });
                localStorage.setItem('messages', JSON.stringify(messages));

                if (confirmationMessage) {
                    confirmationMessage.style.display = 'block';
                    
                    setTimeout(() => {
                        confirmationMessage.style.opacity = '0';
                        confirmationMessage.style.transform = 'translateY(20px)';
                        
                        setTimeout(() => {
                            confirmationMessage.style.display = 'none';
                            confirmationMessage.style.opacity = '1';
                            confirmationMessage.style.transform = 'translateY(0)';
                        }, 300);
                    }, 3000);
                }

                username.value = '';
                email.value = '';
                message.value = '';
            } else {
                alert('Please fill out all fields.');
            }
        });
    }

    // Log stored messages
    function logStoredMessages() {
        let storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
        storedMessages.forEach((msg, index) => {
            console.log(`Message ${index + 1}:`, msg);
        });
    }

    logStoredMessages();
});

// Navigation Dots Active State
document.addEventListener('DOMContentLoaded', function() {
    const navigationDots = document.querySelectorAll('.app__navigation-dot');
    const containers = document.querySelectorAll('.app__container');

    const observerOptions = {
        threshold: 0.5
    };

    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navigationDots.forEach(dot => {
                    dot.style.backgroundColor = 'rgba(49, 59, 172, 0.2)';
                    dot.style.boxShadow = 'none';
                    dot.style.transform = 'scale(1)';
                    
                    if (dot.getAttribute('href') === `#${id}`) {
                        dot.style.backgroundColor = 'rgb(49, 59, 172)';
                        dot.style.boxShadow = '0 0 12px rgba(49, 59, 172, 0.3)';
                        dot.style.transform = 'scale(1.3)';
                    }
                });
            }
        });
    }, observerOptions);

    containers.forEach(container => navObserver.observe(container));
});

// Smooth Scroll Behavior for Navigation Links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link, .app__navigation-dot');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});
