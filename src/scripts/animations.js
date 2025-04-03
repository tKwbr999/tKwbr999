// Import GSAP if using it in the browser
document.addEventListener('DOMContentLoaded', () => {
  // Add scroll reveal animation
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach(el => {
    observer.observe(el);
  });

  // Add random animation to skill tags
  const skillTags = document.querySelectorAll('.skill-tag');
  skillTags.forEach(tag => {
    // Random delay
    const delay = Math.random() * 2;
    tag.style.animationDelay = `${delay}s`;
    
    // Random starting position
    const x = Math.random() * 40 - 20;
    const y = Math.random() * 40 - 20;
    tag.style.transform = `translate(${x}px, ${y}px)`;
    
    // Animation for hover state is handled in CSS
  });

  // Add hover effect to project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('scale-105');
      card.classList.add('shadow-xl');
    });
    
    card.addEventListener('mouseleave', () => {
      card.classList.remove('scale-105');
      card.classList.remove('shadow-xl');
    });
  });

  // Typing animation for hero text
  const heroText = document.querySelector('.hero-text');
  if (heroText) {
    const text = heroText.textContent;
    heroText.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
      if (i < text.length) {
        heroText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    
    setTimeout(typeWriter, 500);
  }
});