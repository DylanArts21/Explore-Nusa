
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
  
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
        if (navMenu.classList.contains('active')) {
          mobileMenuBtn.style.transform = 'rotate(-90deg)';
        } else {
          mobileMenuBtn.style.transform = 'rotate(0deg)';
        }
      });
    }
  
    // Featured destinations on homepage
    const featuredDestinationsContainer = document.getElementById('featured-destinations');
    if (featuredDestinationsContainer) {
      // Get the first 3 destinations
      const featuredDestinations = getAllDestinations().slice(0, 3);
      
      // Clear loading placeholders
      featuredDestinationsContainer.innerHTML = '';
      
      // Add featured destinations
      featuredDestinations.forEach((destination, index) => {
        const card = createDestinationCard(destination, index);
        featuredDestinationsContainer.appendChild(card);
      });
    }
  
    // Destinations page functionality
    const destinationsContainer = document.getElementById('destinations-container');
    const searchInput = document.getElementById('search-input');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const noResultsElement = document.getElementById('no-results');
  
    if (destinationsContainer) {
      let currentCategory = 'all';
      let searchQuery = '';
  
      // Initial load
      loadDestinations(currentCategory, searchQuery);
  
      // Category filter
      if (categoryButtons.length > 0) {
        categoryButtons.forEach(button => {
          button.addEventListener('click', function() {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current category
            currentCategory = this.getAttribute('data-category');
            
            // Load destinations
            loadDestinations(currentCategory, searchQuery);
          });
        });
      }
  
      // Search functionality
      if (searchInput) {
        searchInput.addEventListener('input', function() {
          searchQuery = this.value.toLowerCase();
          loadDestinations(currentCategory, searchQuery);
        });
      }
  
      // Check URL for category parameter
      const urlParams = new URLSearchParams(window.location.search);
      const categoryParam = urlParams.get('category');
      
      if (categoryParam) {
        const categoryButton = document.querySelector(`.category-btn[data-category="${categoryParam}"]`);
        if (categoryButton) {
          categoryButton.click();
        }
      }
    }
  
    // Function to load destinations
    function loadDestinations(category, query) {
      // Get destinations by category
      let filteredDestinations = getDestinationsByCategory(category);
      
      // Filter by search query
      if (query) {
        filteredDestinations = filteredDestinations.filter(destination => 
          destination.name.toLowerCase().includes(query) ||
          destination.location.toLowerCase().includes(query) ||
          destination.description.toLowerCase().includes(query) ||
          destination.category.toLowerCase().includes(query)
        );
      }
      
      // Clear destinations container
      destinationsContainer.innerHTML = '';
      
      // Show no results message if no destinations found
      if (filteredDestinations.length === 0) {
        noResultsElement.classList.remove('hidden');
      } else {
        noResultsElement.classList.add('hidden');
        
        // Add destinations to container
        filteredDestinations.forEach((destination, index) => {
          const card = createDestinationCard(destination, index);
          destinationsContainer.appendChild(card);
        });
      }
    }
  
    // Function to create destination card
    function createDestinationCard(destination, index) {
      const card = document.createElement('a');
      card.href = `destination-detail.html?id=${destination.id}`;
      card.className = 'destination-card staggered-fade-in';
      card.style.animationDelay = `${0.1 + index * 0.1}s`;
      
      card.innerHTML = `
        <div class="destination-image">
          <img src="${destination.image}" alt="${destination.name}" loading="lazy">
          <div class="rating-badge">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            <span>${destination.rating}</span>
          </div>
        </div>
        <div class="destination-content">
          <div class="destination-header">
            <h3 class="destination-title">${destination.name}</h3>
            <div class="destination-location">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>${destination.location}</span>
            </div>
          </div>
          <div class="destination-category">${getCategoryName(destination.category)}</div>
          <p class="destination-description">${destination.shortDescription}</p>
        </div>
      `;
      
      return card;
    }
  
    // Function to get category name
    function getCategoryName(category) {
      const categories = {
        'beach': 'Pantai',
        'mountain': 'Gunung',
        'culture': 'Budaya',
        'adventure': 'Petualangan'
      };
      
      return categories[category] || category;
    }
  });
  