import { define, WeElement } from 'omi'
import css from './_index.css'

define('swiper-lazy', class extends WeElement {
  css () {
    return css
  }

  name = 'lazy'

  _getCase = ( instance ) => {}

  data = {
    swiper: {
      width: 900,
      navigation: {
        type: 'white',
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      lazy: {}
    },
    imgs: [
      {html: 
       <div class="swiper-slide lazy">
          <img data-src={require('./img/300_1.jpg')} class="swiper-lazy" />
          <div class="swiper-lazy-preloader"> </div>
        </div>
      },
      {html: <div class="swiper-slide lazy">
            <img data-src={require('./img/300_2.jpg')} class="swiper-lazy" />
            <div class="swiper-lazy-preloader"></div>
        </div>
      },
      {html: <div class="swiper-slide lazy">
            <img data-src={require('./img/300_3.jpg')} class="swiper-lazy" />
            <div class="swiper-lazy-preloader"></div>
        </div>
      },
      {html: <div class="swiper-slide lazy">
            <img data-src={require('./img/300_4.jpg')} class="swiper-lazy" />
            <div class="swiper-lazy-preloader"></div>
        </div>
      },
      {html: <div class="swiper-slide lazy">
            <img data-src={require('./img/300_5.jpg')} class="swiper-lazy" />
            <div class="swiper-lazy-preloader"></div>
        </div>
      },
    ],
    getCase: this._getCase,
    name: 'swiper-lazy'
  }

  render() {
    return (
      <div style="height: 300px">
        <o-swiper data={this.data} />
      </div>
    )
  }
})
