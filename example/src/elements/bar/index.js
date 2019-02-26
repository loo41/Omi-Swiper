import { define, WeElement } from 'omi'
import css from './_index.css'

define('my-bar', class extends WeElement {
  name = 'Bar'

  css() {
    return css
  }

  render(props) {
    return (
      <div class="bar">
        <div>{props.mes}</div>
        <div>
          <a href={props.src} target="_Blank">
            <img src={require('./daima.png')} style="width: 24px" />
          </a>
        </div>
      </div>
    )
  }
})
