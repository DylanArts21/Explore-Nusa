
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
  
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
      });
    }
  
    // Get destination ID from URL
    const urlParams = new URLSearchParams(window.location.search);
    const destinationId = urlParams.get('id');
    
    // Elements
    const loadingElement = document.getElementById('loading');
    const contentElement = document.getElementById('destination-content');
    const notFoundElement = document.getElementById('not-found');
  
    // Load destination details
    if (destinationId) {
      // Simulate loading delay
      setTimeout(() => {
        const destination = getDestinationById(destinationId);
        
        if (destination) {
          // Show content
          loadingElement.classList.add('hidden');
          contentElement.classList.remove('hidden');
          
          // Render destination details
          renderDestinationDetails(destination);
        } else {
          // Show not found message
          loadingElement.classList.add('hidden');
          notFoundElement.classList.remove('hidden');
        }
      }, 800);
    } else {
      // No ID provided, show not found
      loadingElement.classList.add('hidden');
      notFoundElement.classList.remove('hidden');
    }
  
    // Function to render destination details
    function renderDestinationDetails(destination) {
      const content = `
        <div class="detail-header">
          <h1 class="detail-title">${destination.name}</h1>
          <div class="detail-location">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>${destination.location}</span>
          </div>
        </div>
  
        <!-- Image Gallery -->
        <div class="gallery">
          <div class="gallery-main">
            <img src="${destination.images[0]}" alt="${destination.name}" id="main-image">
            <div class="gallery-info">
              <div class="rating">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
                <span>${destination.rating}</span>
              </div>
              <span>${getCategoryName(destination.category)}</span>
            </div>
          </div>
          <div class="gallery-thumbnails">
            ${destination.images.map((image, index) => `
              <div class="gallery-thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
                <img src="${image}" alt="${destination.name} ${index + 1}">
              </div>
            `).join('')}
          </div>
        </div>
  
        <!-- Content -->
        <div class="detail-content">
          <div class="detail-left">
            <div class="detail-description">
              <h2>Tentang ${destination.name}</h2>
              <p>${destination.description}</p>
            </div>
  
            <div class="detail-features">
              <h2>Fitur & Keunggulan</h2>
              <div class="features-list">
                ${destination.features.map(feature => `
                  <div class="feature-item">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                    <span>${feature}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
  
          <div class="detail-right">
            <!-- Card 1: Pricing -->
            <div class="info-card">
              <h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
                Kisaran Harga
              </h3>
              <p>${destination.priceRange}</p>
            </div>
  
            <!-- Card 2: Best Times -->
            <div class="info-card">
              <h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                Waktu Terbaik untuk Berkunjung
              </h3>
              <div>
                ${destination.popularTimes.map(time => `
                  <div class="time-item">
                    <div class="time-bullet"></div>
                    <span>${time}</span>
                  </div>
                `).join('')}
              </div>
            </div>
  
            <!-- Card 3: Tips -->
            <div class="tips-card">
              <h3>Tips Singkat</h3>
              <div class="tips-list">
                <div class="tips-item">
                  <div class="tips-bullet"></div>
                  <span>Bawalah sepatu yang nyaman untuk berjalan di sekitar area.</span>
                </div>
                <div class="tips-item">
                  <div class="tips-bullet"></div>
                  <span>Pesan akomodasi di awal selama musim puncak.</span>
                </div>
                <div class="tips-item">
                  <div class="tips-bullet"></div>
                  <span>Pertimbangkan untuk menyewa pemandu lokal untuk pengalaman terbaik.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
      
      contentElement.innerHTML = content;
      
      // Image gallery functionality
      setupGallery();
    }
  
    // Function to setup gallery
    function setupGallery() {
      const mainImage = document.getElementById('main-image');
      const thumbnails = document.querySelectorAll('.gallery-thumbnail');
      
      thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
          // Update active thumbnail
          thumbnails.forEach(thumb => thumb.classList.remove('active'));
          this.classList.add('active');
          
          // Update main image
          const index = this.getAttribute('data-index');
          const destination = getDestinationById(destinationId);
          mainImage.src = destination.images[index];
        });
      });
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
  