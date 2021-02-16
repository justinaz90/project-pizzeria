
import {templates, select, classNames} from '.././settings.js';

class Home{
  constructor(wrapper){
    const thisHome = this;

    thisHome.render(wrapper);
    thisHome.initWidgets();
    thisHome.initActions();
  }

  render(wrapper){
    const thisHome = this;

    const generatedHTML = templates.homeWidget();
    thisHome.dom = {};
    thisHome.dom.wrapper = wrapper;
    thisHome.dom.wrapper.innerHTML = generatedHTML;

    thisHome.pages = document.querySelector(select.containerOf.pages).children;
    thisHome.navLinks = document.querySelectorAll(select.nav.links);
    // thisHome.mainOptions = document.querySelectorAll(select.home.mainOptions);

    thisHome.dom.orderOnline = document.querySelector(select.home.orderButton);
    thisHome.dom.BookATable = document.querySelector(select.home.bookButton);
  }

  initWidgets(){
    const thisHome = this;

    thisHome.elem = document.querySelector(select.widgets.carousel);
    //eslint-disable-next-line no-undef
    thisHome.flkty = new Flickity( thisHome.elem, {
      // options
      cellAlign: 'left',
      contain: true,
      autoPlay: 3000,
      prevNextButtons: false,
      wrapAround: true,
    });
  }

  initActions(){
    const thisHome = this;

    thisHome.dom.orderOnline.addEventListener('click', function(event){
      event.preventDefault();

      thisHome.pages[0].classList.remove(classNames.pages.active);
      thisHome.navLinks[0].classList.remove(classNames.nav.active);
      thisHome.pages[1].classList.add(classNames.pages.active);
      thisHome.navLinks[1].classList.add(classNames.nav.active);
    });

    thisHome.dom.BookATable.addEventListener('click', function(event){
      event.preventDefault();

      thisHome.pages[0].classList.remove(classNames.pages.active);
      thisHome.navLinks[0].classList.remove(classNames.nav.active);
      thisHome.pages[2].classList.add(classNames.pages.active);
      thisHome.navLinks[2].classList.add(classNames.nav.active);
    });
  }
}

export default Home;
