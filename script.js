const hero = document.getElementById('hero');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    hero.classList.add('header-small');
  } else {
    hero.classList.remove('header-small');
  }
});
