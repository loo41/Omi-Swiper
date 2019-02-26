import { define, WeElement, extractClass } from 'omi'
import '../../assets/swiper.js'
import './index.css'

define('o-swiper', class extends WeElement {
  name = 'Swiper'

  installed = () => {
    const { swiper, getCase, name } = this.props.data
    let instance = new Swiper(`#${name}`, Object.assign({}, swiper ? swiper : {}))
    if (getCase) getCase(instance)
  }

  _nav = (navigation) => {
    const { nextEl, prevEl } = navigation
    if (nextEl && prevEl) {
      return (
        <div>
          <div class="swiper-button-prev"> </div>
          <div class="swiper-button-next"> </div>
        </div>
      )
    } else if (nextEl) {
      return <div class="swiper-button-next"> </div>
    } else if (prevEl) {
      return <div class="swiper-button-prev"> </div>
    }
  }

  render(props) {
    const { imgs, swiper, name } = props.data
    return (
      <div>
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
      </div>
    )
  }
})
