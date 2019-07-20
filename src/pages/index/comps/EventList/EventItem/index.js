import React from 'react'
import dayjs from 'dayjs'
import Countdown, { zeroPad as pad0 } from 'react-countdown-now'
import { EventItemType } from '~/types/'
import OutcomeList from './OutcomeList'

export default class EventItem extends React.Component {
  static propTypes = {
    event: EventItemType
  }

  countdownRenderer ({ completed, hours, minutes, seconds }) {
    const msg = completed
      ? 'already started'
      : `start in ${pad0(hours)}:${pad0(minutes)}:${pad0(seconds)}`
    return ` (${msg})`
  }

  render () {
    const { event } = this.props
    const startTime = dayjs.unix(event.startTime)
    return (
      <div>
        <p>
          <span className='tag'>
            Event Date: { startTime.format('DD/MM/YYYY') }
            {
              startTime.isAfter(new Date()) &&
              <Countdown
                key={event.id}
                date={startTime.toDate()}
                renderer={this.countdownRenderer}
                daysInHours
              />
            }
          </span>
        </p>
        {
          event.marketList.map(marketItem => (
            <OutcomeList
              key={marketItem.id}
              outcomeList={marketItem.outcomeList}
            />
          ))
        }
      </div>
    )
  }
}
