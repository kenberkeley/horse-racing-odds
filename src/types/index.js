// https://www.freecodecamp.org/news/react-pattern-centralized-proptypes-f981ff672f3b
import { shape, arrayOf, number, string } from 'prop-types'

const OutcomeItemType = shape({
  id: number.isRequired,
  name: string.isRequired,
  winPrice: number // could be undefined
})
const OutcomeListType = arrayOf(OutcomeItemType)

const MarketItemType = shape({
  id: number.isRequired,
  name: string.isRequired,
  outcomeList: OutcomeListType
})
const MarketListType = arrayOf(MarketItemType)

export const EventItemType = shape({
  id: number.isRequired,
  name: string.isRequired,
  meetingName: string.isRequired,
  startTime: number.isRequired,
  marketList: MarketListType
})
export const EventListType = arrayOf(EventItemType)
