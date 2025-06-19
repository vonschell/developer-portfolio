// Scroll to top button
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const scrollBtn = document.createElement('button');
    scrollBtn.textContent = '↑ Top';
    scrollBtn.setAttribute('id', 'scrollToTop');
    scrollBtn.style.position = 'fixed';
    scrollBtn.style.bottom = '20px';
    scrollBtn.style.right = '20px';
    scrollBtn.style.padding = '0.5rem 1rem';
    scrollBtn.style.border = 'none';
    scrollBtn.style.backgroundColor = '#222';
    scrollBtn.style.color = '#fff';
    scrollBtn.style.borderRadius = '0.5rem';
    scrollBtn.style.cursor = 'pointer';
    scrollBtn.style.display = 'none';
    document.body.appendChild(scrollBtn);
  
    scrollBtn.addEventListener('click', scrollToTop);
  
    window.addEventListener('scroll', () => {
      scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
    });
  });
  