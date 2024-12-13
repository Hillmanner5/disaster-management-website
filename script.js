// Function to simulate a live news feed for disasters
function loadNews() {
    const newsContainer = document.getElementById('news-feed-container');
    
    // Sample list of news articles (can be fetched from a live API later)
    const newsArticles = [
        "Breaking: Flood warning issued in Mumbai and surrounding areas. Evacuations underway.",
        "Cyclone Yaas makes landfall in Odisha, thousands of people evacuated.",
        "Severe earthquake reported in North India. Multiple buildings have collapsed.",
        "Forest fires continue in the Western Ghats region, emergency response teams deployed.",
        "Tornadoes in parts of Uttar Pradesh and Bihar, rescue teams on-site.",
        "Heavy rainfall predicted in Kerala and Tamil Nadu due to cyclone formation."
    ];

    // Clear any existing news content
    newsContainer.innerHTML = '';

    // Add new news articles to the container
    newsArticles.forEach((article, index) => {
        const articleElement = document.createElement('p');
        articleElement.textContent = `${index + 1}. ${article}`;
        newsContainer.appendChild(articleElement);
    });
}

// Call the loadNews function when the page loads
window.onload = loadNews;
