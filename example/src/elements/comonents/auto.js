import { define, WeElement } from 'omi'
import css from './_index.css'

define('swiper-auto', class extends WeElement {
  css () {
    return css
  }

  name = 'auto'

  _getCase = ( instance ) => {}

  data = {
    swiper: {
      autoplay: true,
      navigation: {
        type: 'black',
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination'
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
    name: 'swiper-auto'
  }

  render() {
    return (
      <div style="height: 300px">
        <o-swiper data={this.data} />
      </div>
    )
  }
})
