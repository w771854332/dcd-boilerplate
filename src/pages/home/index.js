import React from 'react'
import PropTypes from 'prop-types'
import chunk from 'lodash/chunk'
import { connect } from 'dva'
import HomeBanner from 'Component/HomeBanner'
import GameBox from 'Component/GameBox'
import Notice from 'Component/Notice'
import GhostBtn from 'Component/GhostBtn'
import Btn from 'Component/Btn'
import CardBox from 'Component/CardBox'
import AwardMask from './components/AwardMask'
import './style'

const CompositeCard = () => {
  return (
    <div className="composite-container">
      <div className="title">恭喜你 32张球队卡已集齐<br/>正在打开…</div>
      <div className="treasure-box">
        <div className="treasure swing" />
        <div className="bk-light" />
      </div>
    </div>
  )
}
function mapStateToProps ({ card }, { location }) {
  return {
    info: {
      ...card,
      card_list: chunk(card.card_list, 8)
    },
    gatherOver: location.state && location.state.over,
    award: location.state && location.state.award
  }
}

@connect(mapStateToProps)
export default class Home extends React.Component {
  state = {
    mask: false
  };
  componentDidMount () {
    if (!this.props.gatherOver) {
      this.props.dispatch({ type: 'card/fetch' })
    }
  }

  render () {
    const { info, gatherOver, award } = this.props
    return (
      <div>
        <AwardMask open={!!award} award={award} />
        <HomeBanner />
        <GameBox>
          <div className="home-box">
            <Notice />
            <div className="card-container">
              {
                gatherOver
                  ? <CompositeCard />
                  : (
                    <React.Fragment>
                      <CardBox
                        isCarousel
                        card_list={info.card_list}
                      />
                      <Btn to="/lottery">开始抽卡X{info.lottery_num}</Btn>
                      <GhostBtn.group>
                        <GhostBtn>分享可多抽2张卡</GhostBtn>
                        <GhostBtn>邀请好友可多抽3张卡</GhostBtn>
                      </GhostBtn.group>
                    </React.Fragment>
                  )
              }
            </div>
            <a className="more">活动规则</a>
          </div>
        </GameBox>
      </div>
    )
  }
}

Home.propTypes = {
  info: PropTypes.object,
  dispatch: PropTypes.func
}
