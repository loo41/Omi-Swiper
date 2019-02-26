import { define, WeElement, extractClass } from 'omi'
import  Swiper from '../assets/swiper.js'
import css from '../assets/_swiper.css'

define('o-swiper', class extends WeElement {

  css () {
    return css
  }

  name = 'Swiper'

  installed = () => {
    const { swiper, getCase, name } = this.props.data
    let instance = new Swiper(`#${name}`, Object.assign({}, swiper ? swiper : {}))
    if (getCase) getCase(instance)
  }

  _nav = (navigation) => {
    const { nextEl, prevEl, type } = navigation
      if (nextEl && prevEl) {
        if (type === 'white') {
          return (
            <div>
              <div class="swiper-button-prev swiper-button-white"> </div>
              <div class="swiper-button-next swiper-button-white"> </div>
            </div>
          )
        } else if (type === 'black') {
          return (
            <div>
              <div class="swiper-button-prev swiper-button-black"> </div>
              <div class="swiper-button-next swiper-button-black"> </div>
            </div>
          )
        } 
        return (
          <div>
            <div class="swiper-button-prev"> </div>
            <div class="swiper-button-next"> </div>
          </div>
        )
      } else if (nextEl) {
        if (type === 'white') {
          return <div class="swiper-button-next swiper-button-white"> </div>
        } else if (type === 'black') {
          return <div class="swiper-button-next swiper-button-black"> </div>
        }
        return <div class="swiper-button-next"> </div>
      } else if (prevEl) {
        if (type === 'white') {
          return <div class="swiper-button-prev swiper-button-white"> </div>
        } else if (type === 'black') {
          return <div class="swiper-button-prev swiper-button-black"> </div>
        }
        return <div class="swiper-button-prev"> </div>
      }
  }

  render(props) {
    const { imgs, swiper, name } = props.data
    return (
      <div id={name} {...extractClass(props, "swiper-container")}>
        <div class="swiper-wrapper">
          {imgs ? imgs.map((item, index) => {
            return item.html? item.html : <div class="swiper-slide"><img src={item.src} /></div>
          }) : null}
        </div>

        {swiper['scrollbar'] ? <div class="swiper-scrollbar"> </div> : null}
        {swiper['navigation'] ? this._nav(swiper['navigation']) : null}
        {swiper['pagination'] ? <div class="swiper-pagination"> </div> : null}
      </div>
    )
  }
})
