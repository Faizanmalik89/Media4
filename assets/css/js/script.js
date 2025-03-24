document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  
  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }
  
  // Tab navigation
  const blogsTab = document.getElementById('blogs-tab');
  const videosTab = document.getElementById('videos-tab');
  const blogsSection = document.getElementById('blogs-section');
  const videosSection = document.getElementById('videos-section');
  
  if (blogsTab && videosTab && blogsSection && videosSection) {
    blogsTab.addEventListener('click', function() {
      blogsTab.classList.add('active');
      videosTab.classList.remove('active');
      
      blogsSection.classList.add('active');
      blogsSection.classList.remove('hidden');
      videosSection.classList.remove('active');
      videosSection.classList.add('hidden');
    });
    
    videosTab.addEventListener('click', function() {
      videosTab.classList.add('active');
      blogsTab.classList.remove('active');
      
      videosSection.classList.add('active');
      videosSection.classList.remove('hidden');
      blogsSection.classList.remove('active');
      blogsSection.classList.add('hidden');
    });
  }
});
