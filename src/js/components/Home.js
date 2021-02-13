
import {templates} from '.././settings.js';

class Home{
  constructor(wrapper){
    const thisHome = this;

    thisHome.render(wrapper);
    thisHome.initWidgets();
  }

  render(wrapper){
    const thisHome = this;

    const generatedHTML = templates.homeWidget();
    thisHome.dom = {};
    thisHome.dom.wrapper = wrapper;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }

  initWidgets(){
    const thisHome = this;

    thisHome.elem = document.querySelector('.main-carousel');
    //eslint-disable-next-line no-undef
    thisHome.flkty = new Flickity( thisHome.elem, {
      // options
      cellAlign: 'left',
      contain: true,
      autoplay: true,
      wrapAround: true,
    });
  }
}

export default Home;
