// her ligger min javascript del for at navbaren kommer inn når navbaren på toppen er vekk

const scrollNavbar = document.querySelector('.scroll_navbar');
const scrollPoint = 50; 

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  console.log('Scroll Top:', scrollTop); 

  if (scrollTop > scrollPoint) {
    console.log('Showing navbar'); 
    scrollNavbar.classList.add('show-scroll_navbar');
  } else {
    console.log('Hiding navbar'); 
    scrollNavbar.classList.remove('show-scroll_navbar');
  }
});