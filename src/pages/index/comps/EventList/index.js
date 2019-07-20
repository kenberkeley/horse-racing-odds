import React from 'react'
import Select from '~/components/Select'
import { EventListType } from '~/types/'
import EventItem from './EventItem/'

export default class EventList extends React.Component {
  static propTypes = {
    eventList: EventListType
  }

  constructor (props) {
    super(props)
    this.state = {
      displayedId: props.eventList[0].id // TODO: undefined?
    }
  }

  componentWillReceiveProps (props) {
    this.setState({
      displayedId: props.eventList[0].id // TODO: undefined?
    })
  }

  handleSelect = evt => {
    this.setState({
      displayedId: +evt.target.value
    })
  }

  render () {
    const { eventList } = this.props
    const { displayedId } = this.state
    const event = eventList.find(item => item.id === displayedId) // TODO: undefined?
    return (
      <div>
        <Select
          uid='event'
          label='Event Name'
          value={displayedId}
          options={eventList}
          onChange={this.handleSelect}
        />
        <EventItem event={event} />
      </div>
    )
  }
}
