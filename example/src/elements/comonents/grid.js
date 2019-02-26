import { define, WeElement } from 'omi'
import css from './_index.css'

define('swiper-grid', class extends WeElement {
  css () {
    return css
  }

  name = 'grid'

  _getCase = ( instance ) => {}

  data = {
    swiper: {
      pagination: {
        el: '.swiper-pagination'
      },
      slidesPerView : 2,
      centeredSlides : true
    },
    imgs: [
      {src: require('./img/300_1.jpg')},
      {src: require('./img/300_2.jpg')},
      {src: require('./img/300_3.jpg')},
      {src: require('./img/300_4.jpg')},
      {src: require('./img/300_5.jpg')}
    ],
    getCase: this._getCase,
    name: 'swiper-grid'
  }

  render() {
    return (
      <div style="height: 300px">
        <o-swiper data={this.data} />
      </div>
    )
  }
})
