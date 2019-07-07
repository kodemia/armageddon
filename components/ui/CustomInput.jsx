import React from 'react'

const CustomInput = (props) => {
  const {
    id,
    label,
    type,
    value,
    onChange
  } = props

  return (
    <label
      className='custom-input'
      htmlFor={id}
    >
      <div className='label'>
        { label }
      </div>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
    </label>
  )
}

export default CustomInput
