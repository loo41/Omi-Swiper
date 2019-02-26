import { define, WeElement } from 'omi'
import css from './_index.css'

define('swiper-thumbs', class extends WeElement {
  css () {
    return css
  }

  name = 'thumbs'

  _getCase = ( instance ) => {
  }

  _getCases = ( instance ) => {
    console.log(this.instance)
  }
  data = {
    swiper: {
      loop: true,
      spaceBetween: 10,
      slidesPerView: 4,
      watchSlidesVisibility: true
    },
    imgs: [
      {src: require('./img/300_1.jpg')},
      {src: require('./img/300_2.jpg')},
      {src: require('./img/300_3.jpg')},
      {src: require('./img/300_4.jpg')},
      {src: require('./img/300_5.jpg')}
    ],
    getCase: this._getCase,
    name: 'swiper-thumb'
  }

  datas = {
    swiper: {
      loop: true,
      spaceBetween: 10,
      thumbs: {
        swiper: {
          el: '#swiper-thumb',
          slidesPerView: 2
        }
      }
    },
    imgs: [
      {src: require('./img/300_1.jpg')},
      {src: require('./img/300_2.jpg')},
      {src: require('./img/300_3.jpg')},
      {src: require('./img/300_4.jpg')},
      {src: require('./img/300_5.jpg')}
    ],
    getCase: this._getCases,
    name: 'swiper-thumbs'
  }

  render() {
    return (
      <div>
        <div style="height: 300px">
          <o-swiper data={this.datas} />
        </div>
        <div style="height: 100px">
          <o-swiper data={this.data} />
        </div>
      </div>
    )
  }
})
