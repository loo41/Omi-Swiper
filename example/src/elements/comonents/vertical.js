import { define, WeElement } from 'omi'
import css from './_index.css'

define('swiper-vertical', class extends WeElement {
  css () {
    return css
  }

  name = 'vertical'

  _getCase = ( instance ) => {}

  data = {
    swiper: {
      autoplay: true,
      direction: 'vertical',
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
    name: 'swiper-vertical'
  }

  render() {
    return (
      <div style="height: 300px">
        <o-swiper data={this.data} />
      </div>
    )
  }
})
