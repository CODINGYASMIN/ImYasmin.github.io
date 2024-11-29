// Helper function to query elements
function qs(selector, all = false) {
    return all ? document.querySelectorAll(selector) : document.querySelector(selector);
}

// Select elements
const sections = qs('.section', true);
const timeline = qs('.timeline');
const line = qs('.line');
const header = qs('header'); // Select the header element

// Initial setup
line.style.bottom = `calc(100% - 20px)`;
let prevScrollY = window.scrollY;
let up, down;
let full = false;
let set = 0;
const targetY = window.innerHeight * 0.8;

// Scroll handler function
function scrollHandler(e) {
    const { scrollY } = window;
    up = scrollY < prevScrollY; // Determine if scrolling up
    down = !up; // Determine if scrolling down

    // Header behavior
    if (header) {
        if (down) {
            header.classList.add('hidden'); // Hide the header on scroll down
        } else if (up) {
            header.classList.remove('hidden'); // Show the header on scroll up
        }
    }

    // Timeline animation logic
    const timelineRect = timeline.getBoundingClientRect();
    const dist = targetY - timelineRect.top;

    if (down && !full) {
        set = Math.max(set, dist);
        line.style.bottom = `calc(100% - ${set}px)`;
    }

    if (dist > timeline.offsetHeight + 50 && !full) {
        full = true;
        line.style.bottom = `-50px`;
    }

    // Section animation logic
    sections.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top + item.offsetHeight / 5 < targetY) {
            item.classList.add('show-me');
        }
    });

    // Update previous scroll position
    prevScrollY = window.scrollY;
}

// Initialize
scrollHandler();
line.style.display = 'block';
window.addEventListener('scroll', scrollHandler);
