import React from 'react'
import PropTypes from 'prop-types'
import './style'
import('iscroll')
export default function News () {
  return <div className="news">page: News</div>
}
News.propTypes = {
  num: PropTypes.number
}
