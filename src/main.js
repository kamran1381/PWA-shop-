import './style.css';
import CreateNavbar from './pages/navbar.js';
import createHomePage from './pages/home.js';
import createSlider from './pages/components/slider.js';
import createStories from './pages/components/stories.js';
import Login from './pages/login/login.js';
import TopNavigation from './pages/components/home/topnavigation.js';
import ShoppingCartPage from './pages/cart/cart.js';
function renderPage(route) {
  const mainContent = document.getElementById('main-content');
  const slider = document.getElementById('slider');
  const stories = document.getElementById('stories-wrapper');
  const navbarContainer = document.getElementById('navbar');

  const existingTopNav = document.getElementById('top-navigation');
  if (existingTopNav) existingTopNav.remove();

  navbarContainer.innerHTML = '';

  let page;

  switch (route) {
    case 'shoppingcart':
      page = ShoppingCartPage();
      slider.style.display = 'none';
      stories.style.display = 'none';
      break;

    case 'login':
      page = Login();
      slider.style.display = 'none';
      stories.style.display = 'none';
      break;

    case 'home':
    default:
      navbarContainer.appendChild(CreateNavbar());

      const topNav = TopNavigation();
      topNav.id = 'top-navigation';
      mainContent.before(topNav);

      page = createHomePage();
      slider.style.display = 'flex';
      stories.style.display = 'flex';
  }

  mainContent.innerHTML = '';
  mainContent.appendChild(page);

  
  const navButtons = navbarContainer.querySelectorAll('[data-route]');
  navButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const newRoute = e.currentTarget.getAttribute('data-route');
      if (newRoute) {
        history.pushState({ route: newRoute }, '', `/${newRoute}`);
        renderPage(newRoute);
      }
    });
  });

 
  setTimeout(() => {
    const buyButtons = document.querySelectorAll('.buy-btn');
    buyButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        history.pushState({ route: 'shoppingcart' }, '', '/shoppingcart');
        renderPage('shoppingcart');
      });
    });
  }, 0);
}


document.addEventListener('DOMContentLoaded', () => {
  const sliderContainer = document.getElementById('slider');
  const storiesWrapper = document.getElementById('stories-wrapper');

  requestIdleCallback(() => {
    const stories = createStories();
    storiesWrapper.appendChild(stories);
  });

  requestIdleCallback(() => {
    const slider = createSlider();
    sliderContainer.appendChild(slider);
  });

  const path = window.location.pathname.replace('/', '') || 'home';
  renderPage(path);
});

window.onpopstate = (event) => {
  const route = event.state?.route || window.location.pathname.replace('/', '') || 'home';
  renderPage(route);
};
