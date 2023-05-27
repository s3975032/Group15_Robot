window.addEventListener('DOMContentLoaded', (event) => {
    const wavyText = document.querySelector('.wavy-text'); /*wavy-text for the index.html*/
    const underlineText = document.querySelector('.underline-text'); /*underline-text for the link in tools.html*/
  
    function animateWavyText() {
      wavyText.style.transform = 'translateY(-10px)';
      setTimeout(() => {
        wavyText.style.transform = 'translateY(0)';
      }, 1000);
    }
  
    setInterval(animateWavyText, 2000);
  
    underlineText.addEventListener('mouseover', () => {
      underlineText.classList.add('wavy');
    });
    underlineText.addEventListener('mouseout', () => {
      underlineText.classList.remove('wavy');
    });
});
  


        
