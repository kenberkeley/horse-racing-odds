import React from 'react'
import { string, number, array, func, oneOfType } from 'prop-types'

export default class Select extends React.Component {
  static propTypes = {
    uid: string.isRequired,
    label: string.isRequired,
    value: oneOfType([number, string]),
    options: array.isRequired,
    onChange: func.isRequired,
    optionLabelField: string,
    optionValueField: string
  }

  static defaultProps = {
    optionLabelField: 'name',
    optionValueField: 'id'
  }

  render () {
    const { uid, label, value, options, onChange, optionLabelField, optionValueField } = this.props
    return (
      <div className='field has-addons' style={{ overflow: 'hidden' }}>
        <p className='control'>
          <label htmlFor={uid} className='button'>
            { label }
          </label>
        </p>
        <div className='control'>
          <div className='select'>
            <select id={uid} onChange={onChange} value={value}>
              {
                options.map(option => (
                  <option key={option[optionValueField]} value={option[optionValueField]}>
                    { option[optionLabelField] }
                  </option>
                ))
              }
            </select>
          </div>
        </div>
      </div>
    )
  }
}
