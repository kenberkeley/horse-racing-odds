import React from 'react'
import { OutcomeListType } from '~/types/'

const COLUMNS = [
  /* [<label>, <field>] */
  ['Runner Name', 'name'],
  ['Odds', 'winPrice']
]

export default class OutcomeList extends React.Component {
  static propTypes = {
    outcomeList: OutcomeListType
  }

  render () {
    const { outcomeList } = this.props
    return (
      <table className='table is-hoverable is-fullwidth'>
        <thead className='has-text-weight-medium'>
          <tr>
            {
              COLUMNS.map(col => (
                <td key={col[1]}>
                  { col[0] }
                </td>
              ))
            }
          </tr>
        </thead>
        <tbody>
          {
            outcomeList.map(outcome => (
              <tr key={outcome.id}>
                {
                  COLUMNS.map(col => (
                    <td key={col[1]}>
                      { outcome[col[1]] || '--' }
                    </td>
                  ))
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    )
  }
}
