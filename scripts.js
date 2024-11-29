// Function to format the date and time with an icon
function updateDateTime() {
    const dateTimeSpan = document.getElementById('date-time');
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString('en-GB', options);
    const formattedTime = now.toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });

    dateTimeSpan.innerHTML = `<i class="fas fa-clock"></i> ${formattedDate}, ${formattedTime}`;
}

// Update date and time on page load and refresh every second
updateDateTime();
setInterval(updateDateTime, 1000);

// Music Button Interaction
const audio = document.getElementById('background-audio');
const playMusicBtn = document.getElementById('play-music-btn');

// Add click event to the button
playMusicBtn.addEventListener('click', () => {
    audio.play()
        .then(() => {
            playMusicBtn.textContent = 'Playing...';
            playMusicBtn.disabled = true;
            playMusicBtn.style.backgroundColor = '#4CAF50';
            setTimeout(() => playMusicBtn.style.display = 'none', 1500); // Hide button after starting to play
        })
        .catch(error => {
            console.error('Error playing audio:', error);
            playMusicBtn.textContent = 'Retry Playing Music';
        });
});

// Event listener to detect when the audio has ended
audio.addEventListener('ended', () => {
    playMusicBtn.textContent = 'Play Music';
    playMusicBtn.disabled = false;
    playMusicBtn.style.backgroundColor = '#3E2723'; // Restore the original color
    playMusicBtn.style.display = 'block'; // Make the button visible again
});

// Search Functionality
const searchForm = document.getElementById('search-form');
const searchQuery = document.getElementById('search-query');
const resultsList = document.getElementById('results-list');
const searchResultsDiv = document.getElementById('search-results');

// Predefined pages array with content descriptions for keyword search
const pages = [
    { title: "Home", url: "index.html", content: "Welcome to Yasmin's Website! Learn about myself, my experiences, and more, including my passion and goals, like ambition and growth." },
    { title: "About Me", url: "biodata.html", content: "hobbies, ambitions, social media, favourite song" },
    { title: "Experience", url: "experience.html", content: "Explore my professional experiences, including internships, work, and how my ambition has guided my career path." },
    { title: "Education", url: "education.html", content: "Details about my education journey, focusing on how I achieved my goals and worked towards my ambitions." },
    { title: "Family", url: "family.html", content: "A glimpse into my family, our values, relationships, and how ambition runs through the generations." },
    { title: "Gallery", url: "gallery.html", content: "A collection of images that showcase my experiences, family, and moments of personal growth." }
];

// Event listener for search submission
searchForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const query = searchQuery.value.toLowerCase().trim();

    if (!query) {
        alert('Please enter a search term.');
        return; // Prevent searching if query is empty
    }

    // Filter pages based on query found within the content description
    const results = pages.filter(page =>
        page.content.toLowerCase().includes(query) // Search within content for the keyword
    );

    // Clear previous results
    resultsList.innerHTML = '';

    if (results.length > 0) {
        results.forEach(result => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<a href="${result.url}">${result.title}</a>: ${result.content}`;
            resultsList.appendChild(listItem);
        });

        // Make the results section visible
        searchResultsDiv.style.display = 'block';
    } else {
        resultsList.innerHTML = '<li>No results found</li>';
        searchResultsDiv.style.display = 'block'; // Ensure results are displayed even when no matches are found
    }
});


