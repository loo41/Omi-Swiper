## Omi-Swiper

> Omi ui swiper

## Example

[demo](https://loo41.github.io/Omi-Swiper/)

[api (CN)](https://www.swiper.com.cn/api/hash/211.html)

[api (EN)](http://idangero.us/swiper/api/)


## Use

```js
npm install omi-swiper
```

```js
import { WeElement, define, render } from 'omi'
import 'omi-swiper'

define('my-app', class extends WeElement {

  _getCase = ( instance ) => {}
  
  data = {
    swiper: {
      // 配和外部容器高度可以解决 Swiper 的一些问题
      width: xxx,
      navigation: {
        // 定义切换按钮的颜色
        type: 'white',
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    },
    // 实例为多个时， 必须存在且不唯一
    name： '',
    // 获取实例
    getCase: this._getCase,
    imgs: [
      // 形式需要统一
      // 一种形式
      {src: require('path')}
      // 二种形式 自定义 在懒加载中常用
      {html: <div> </div>}
    ]
  }
  
  render() {
    return (
      // 外层div为控制容器大小
      <div style="height: xxx">
        <o-swiper data={this.data} />
      </div>
    )
  }
})

render(<my-app />, 'body')
```

## props

| 属性   |  值   | 必须    | 描述    |
|--------|-------|---------|---------|
| data   | Object    | 是      | 根属性  |
| data.swiper | Object | 是    | swiper4 的配置对象 |
| data.name | string   | 否    | 如果页面有多个实例，必须存在不重复的 name|
| data.imgs | array    | 是    | 定义数据   |
| data.getCase | function | 否 | 参数为实例对象 |

## Tip

- Swiper 默认样式可能不满足，需要全局覆盖
- Use 里面的注释文字可以解决很多问题
