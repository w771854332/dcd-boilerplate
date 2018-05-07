import React from 'react'
import {Link} from 'dva/router'
import PropTypes from 'prop-types'
import './style'

const noop = () => {}
(new Image()).src = require('./images/btn_active.png')
const Btn = ({children, onClick = noop, to, ...props}) => (
  to
    ? <Link className="cpt-btn" to={to} {...props}>{children}</Link>
    : <a className="cpt-btn" href="javascript:;" onClick={onClick} {...props}>{children}</a>
)

Btn.propTypes = {
  onClick: PropTypes.func,
  to: PropTypes.string
}

export default Btn
