import { define, WeElement } from 'omi'
import css from './_index.css'

define('swiper-scrollbar', class extends WeElement {
  css () {
    return css
  }

  name = 'scrollbar'

  _getCase = ( instance ) => {
    instance.scrollbar.$dragEl.css('background', '#ff6600')
  }

  data = {
    swiper: {
      autoplay: true,
      navigation: {
        type: 'white',
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination'
      },
      scrollbar: {
        el: '.swiper-scrollbar'
      }
    },
    imgs: [
      {src: require('./img/300_1.jpg')},
      {src: require('./img/300_2.jpg')},
      {src: require('./img/300_3.jpg')},
      {src: require('./img/300_4.jpg')},
      {src: require('./img/300_5.jpg')}
    ],
    getCase: this._getCase,
    name: 'swiper-scrollbar'
  }

  render() {
    return (
      <div style="height: 300px">
        <o-swiper data={this.data} />
      </div>
    )
  }
})
