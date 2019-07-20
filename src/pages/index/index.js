import React from 'react'
import ajax from '~/utils/ajax'
import Select from '~/components/Select'
import EventList from './comps/EventList'

const API_URL = 'https://adsfeed.sportsbet.com.au/v1/sportsbook/competitions?classIds=1&detailsLevel=O&numMarkets=1'

export default class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      displayedId: null,
      competitionList: []
    }
  }

  async componentDidMount () {
    const { competitionList } = await ajax({ url: API_URL })
    this.setState({
      displayedId: competitionList[0].id, // TODO: undefined?
      competitionList
    })
  }

  handleSelect = evt => {
    this.setState({
      displayedId: +evt.target.value
    })
  }

  render () {
    const { displayedId, competitionList } = this.state
    if (!competitionList.length) return null // TODO: show loading

    const { eventList } = competitionList.find(item => item.id === displayedId)
    return (
      <div className='card'>
        <header className='card-header'>
          <div className='card-header-title has-text-weight-normal'>
          <Select
            uid='venue'
            label='Venue'
            value={displayedId}
            options={competitionList}
            onChange={this.handleSelect}
          />
          </div>
        </header>
        <div className='card-content'>
          <EventList eventList={eventList} />
        </div>
      </div>
    )
  }
}
