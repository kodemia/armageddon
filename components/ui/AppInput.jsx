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
    <div className='custom-input'>
      <label
        className='label'
        htmlFor={id}
      >
        { label }
      </label>
      <input
        className='input'
        id={id}
        type={type}
        value={value}
        onChange={onChange}
      />
      <style jsx>{`
        .custom-input {
          display: flex;
          flex-direction: column;
          margin: 1rem 0;
        }

        .label {
          color: #ffffff;
          padding-bottom: .25rem;
          text-transform: capitalize;
        }

        .input {
          padding: .5rem 1rem;
        }
      `}</style>
    </div>
  )
}

export default CustomInput
