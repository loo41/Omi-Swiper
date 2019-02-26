import { define, WeElement } from 'omi'

define('my-app', class extends WeElement {
  css = require('./_index.css')

  name = 'Omi'

  clickHandler = () => {
    this.name = 'Omio'
    this.update()
  }

  _getCase = (instance) => {
    console.log(instance)
    this.instance = instance
  }

  _getCasep = (instancep) => {
    instancep.controller.control = this.instance
    this.instance.controller.control = instancep
  }

  datap = {
    swiper: {
      autoplay: true,
      width: 300,
      height: 300,
      grabCursor: true,
      effect: 'coverflow',
      navigation: {
        nextEl: '.swiper-button-next'
      },
      pagination: {
        el: '.swiper-pagination'
      },
      scrollbar: {
        el: '.swiper-scrollbar'
      },
      lazy: {
        loadPrevNext: true
      },
      mousewheel: true,
      controller: true
    },
    imgs: [
      { src: require('./4.jpg')},
      { src: require('./4.jpg')},
      { src: require('./4.jpg')}
    ],
    getCase: this._getCasep,
    name: 'testtwo'
  }

  datas = {
    swiper: {
      autoplay: true,
      navigation: {
        nextEl: '.swiper-button-next'
      },
      pagination: {
        el: '.swiper-pagination'
      },
      lazy: {
        loadPrevNext: true
      },
      mousewheel: true,
      controller: true
    },
    imgs: [
      {
        html : (<div class="swiper-slide">
                  <img data-src={require('./4.jpg')} class="swiper-lazy" />
                  <div class="swiper-lazy-preloader"></div>
                  </div>
                )
      },
      {
        html : (<div class="swiper-slide">
                  <img data-src={require('./4.jpg')} class="swiper-lazy" />
                  <div class="swiper-lazy-preloader"></div>
                  </div>
                )
      },
      {
        html : (<div class="swiper-slide">
                  <img data-src={require('./4.jpg')} class="swiper-lazy" />
                  <div class="swiper-lazy-preloader"></div>
                  </div>
                )
      },
      {
        html : (<div class="swiper-slide">
                  <img data-src={require('./4.jpg')} class="swiper-lazy" />
                  <div class="swiper-lazy-preloader"></div>
                  </div>
                )
      }
    ],
    getCase: this._getCase,
    name: 'testone'
  }

  render() {
    return (
      <div class="app">
        <div style="width: 300px"><o-swiper data={this.datas} /></div>
        <o-swiper data={this.datap} />
      </div>
    )
  }
})
