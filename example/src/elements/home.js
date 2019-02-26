import { define, WeElement } from 'omi'
import './bar'
import css from './_home.css'
import './comonents/base'
import './comonents/nav'
import './comonents/pag'
import './comonents/auto'
import './comonents/scrollbar'
import './comonents/vertical'
import './comonents/grid'
import './comonents/cube'
import './comonents/coverflow'
import './comonents/thumbs'
import './comonents/lazy'

define('my-home', class extends WeElement {
  name = 'Home'

  css() {
    return css
  }

  render() {
    return (
      <div class="home">
        <div class="head"> </div>
        <div class="content">
          <div class="con-head">
            <div class="con-head__title">Omi-Swiper</div>
            <div class="con-head__des">Swiper component for Omi</div>
            <div class="con-head__nav">
              <div>
                <a href="https://github.com/loo41/Omi-Swiper">Github</a>
              </div>
              <div>
                <a href="https://github.com/loo41/Omi-Swiper/issues">Issuse</a>
              </div>
              <div>
                <a href="https://www.swiper.com.cn/api/hash/211.html">API (CN)</a>
              </div>
              <div>
                <a href="http://idangero.us/swiper/api/">API (EN)</a>
              </div>
            </div>
          </div>
          <div class="comp">
            <div class="comp-box">
              <div class="comp-box_com">
                <my-bar
                  mes="默认设置"
                  src="https://github.com/loo41/Omi-Swiper/tree/master/example/src/elements/comonents/base.js"
                />
                <swiper-base />
              </div>
            </div>
            <div class="comp-box">
              <div class="comp-box_com">
                <my-bar
                  mes="按钮切换"
                  src="https://github.com/loo41/Omi-Swiper/tree/master/example/src/elements/comonents/nav.js"
                />
                <swiper-nav />
              </div>
            </div>
            <div class="comp-box">
              <div class="comp-box_com">
                <my-bar
                  mes="分页器"
                  src="https://github.com/loo41/Omi-Swiper/tree/master/example/src/elements/comonents/pag.js"
                />
                <swiper-pag />
              </div>
            </div>
            <div class="comp-box">
              <div class="comp-box_com">
                <my-bar
                  mes="自动播放"
                  src="https://github.com/loo41/Omi-Swiper/tree/master/example/src/elements/comonents/auto.js"
                />
                <swiper-auto />
              </div>
            </div>
            <div class="comp-box">
              <div class="comp-box_com">
                <my-bar
                  mes="滚动条"
                  src="https://github.com/loo41/Omi-Swiper/tree/master/example/src/elements/comonents/scrollbar.js"
                />
                <swiper-scrollbar />
              </div>
            </div>
            <div class="comp-box">
              <div class="comp-box_com">
                <my-bar
                  mes="垂直切换"
                  src="https://github.com/loo41/Omi-Swiper/tree/master/example/src/elements/comonents/vertical.js"
                />
                <swiper-vertical />
              </div>
            </div>
            <div class="comp-box">
              <div class="comp-box_com">
                <my-bar
                  mes="网格切换"
                  src="https://github.com/loo41/Omi-Swiper/tree/master/example/src/elements/comonents/grid.js"
                />
                <swiper-grid />
              </div>
            </div>
            <div class="comp-box">
              <div class="comp-box_com">
                <my-bar
                  mes="切换效果/cube"
                  src="https://github.com/loo41/Omi-Swiper/tree/master/example/src/elements/comonents/cube.js"
                />
                <swiper-cube />
              </div>
            </div>
            <div class="comp-box">
              <div class="comp-box_com">
                <my-bar
                  mes="切换效果/coverflow"
                  src="https://github.com/loo41/Omi-Swiper/tree/master/example/src/elements/comonents/coverflow.js"
                />
                <swiper-coverflow />
              </div>
            </div>
            <div class="comp-box">
              <div class="comp-box_com">
                <my-bar
                  mes="双向控制/缩略图"
                  src="https://github.com/loo41/Omi-Swiper/tree/master/example/src/elements/comonents/thumbs.js"
                />
                <swiper-thumbs />
              </div>
            </div>
            <div class="comp-box">
              <div class="comp-box_com">
                <my-bar
                  mes="懒加载"
                  src="https://github.com/loo41/Omi-Swiper/tree/master/example/src/elements/comonents/lazy.js"
                />
                <swiper-lazy />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})
