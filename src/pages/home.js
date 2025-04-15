// import TopNavigation from "./components/home/topnavigation";
import CategoriesSection from "./components/home/categoriesSection";
import DeliveryBanner from "./components/home/deliverybanner";
import DealsScroll from "./components/home/dealsscrool";
import PromoBanners from "./components/home/promobanner";
import MustHaveGrid from "./components/home/musthavegrid";
import CategoryPills from "./components/home/categotypills";
import Newsletter from "./components/home/newsletter";
import Footer from "./components/home/footer";

export default function createHomePage() {
  const homeContainer = document.createElement('div');
  homeContainer.classList = 'w-full bg-[#f3f3f3]';


  const categories = stringToElement(CategoriesSection()); 
  const banner = stringToElement(DeliveryBanner()); 

  
  homeContainer.appendChild(categories);
  homeContainer.appendChild(banner);

  
  lazyLoadComponent(DealsScroll, homeContainer);
  lazyLoadComponent(PromoBanners, homeContainer);
  lazyLoadComponent(MustHaveGrid, homeContainer);
  lazyLoadComponent(CategoryPills, homeContainer);
  lazyLoadComponent(Newsletter, homeContainer);
  lazyLoadComponent(Footer, homeContainer);

  return homeContainer;
}

// Converts HTML string to DOM element
function stringToElement(htmlString) {
  const template = document.createElement('template');
  template.innerHTML = htmlString.trim();
  return template.content.firstElementChild;
}

// Lazy load component when it enters viewport
function lazyLoadComponent(componentFn, container) {
  const placeholder = document.createElement('div');
  placeholder.className = 'min-h-[200px] w-full';
  container.appendChild(placeholder);

  const observer = new IntersectionObserver((entries, obs) => {
    if (entries[0].isIntersecting) {
      const el = stringToElement(componentFn());
      container.replaceChild(el, placeholder);
      obs.disconnect();
    }
  });

  observer.observe(placeholder);
}
