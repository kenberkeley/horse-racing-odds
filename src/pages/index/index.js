import React from 'react'
import DocumentTitle from 'react-document-title'
import ajax from '~/utils/ajax'
import Select from '~/components/Select'
import EventList from './comps/EventList'
import styles from './index.module.css'

const API_URL = 'https://adsfeed.sportsbet.com.au/v1/sportsbook/competitions?classIds=1&detailsLevel=O&numMarkets=1'

export default class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false,
      displayedId: null,
      competitionList: []
    }
  }

  async componentDidMount () {
    this.setState({ isLoading: true })

    const { competitionList } = await ajax({ url: API_URL })
    this.setState({
      isLoading: false,
      displayedId: competitionList.length ? competitionList[0].id : null,
      competitionList
    })
  }

  handleSelect = evt => {
    this.setState({
      displayedId: +evt.target.value
    })
  }

  renderLoading () {
    const msg = 'Loading Data...'
    return (
      <DocumentTitle title={msg}>
        <p className='has-text-centered'>
          { msg }
        </p>
      </DocumentTitle>
    )
  }

  renderNoData () {
    return (
      <p className='has-text-centered is-italic'>
        Sorry, no data to display.
      </p>
    )
  }

  render () {
    const { isLoading, displayedId, competitionList } = this.state
    if (isLoading) {
      return this.renderLoading()
    }
    if (!competitionList.length) {
      return this.renderNoData()
    }

    const { eventList } = competitionList.find(item => item.id === displayedId)
    return (
      <div className={`box ${styles.index}`}>
        <Select
          uid='venue'
          label='Venue'
          value={displayedId}
          options={competitionList}
          onChange={this.handleSelect}
        />
        <EventList eventList={eventList} />
      </div>
    )
  }
}
