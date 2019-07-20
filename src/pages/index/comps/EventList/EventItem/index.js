import React from 'react'
import dayjs from 'dayjs'
import { EventItemType } from '~/types/'
import OutcomeList from './OutcomeList'

export default class EventItem extends React.Component {
  static propTypes = {
    event: EventItemType
  }

  render () {
    const { event } = this.props
    return (
      <div>
        <p>
          <span className='tag'>
            Event Date: { dayjs.unix(event.startTime).format('DD/MM/YYYY') }
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
