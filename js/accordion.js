document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            this.setAttribute('aria-expanded', !isExpanded);
            content.classList.toggle('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const title = document.getElementById('recommended-title');
  const featureItems = document.querySelector('.feature-items');

  title.addEventListener('click', function() {
      this.classList.toggle('active');
      featureItems.classList.toggle('active');
  });
});