import React from 'react'

import AppIcon from './AppIcon'

function AppInput(props) {
  const {
    id,
    label,
    type,
    value,
    onChange,
    className,
    leftIcon,
    rightIcon
  } = props

  const inputClassName = `${leftIcon ? 'have-left-icon ' : ''}input${rightIcon ? ' have-right-icon' : ''}`;

  return (
    <div className={`app-input${className ? ` ${className}` : ''}`}>
      <label
        className='label'
        htmlFor={id}
      >
        { label }
      </label>
      <span className='app-input-container'>
        { leftIcon && <AppIcon className='app-input-left-icon' icon={leftIcon} /> }
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          className={inputClassName}
        />
        { rightIcon && <AppIcon className='app-input-right-icon' icon={rightIcon} /> }
      </span>
      <style jsx>{`
        .app-input {
          display: flex;
          flex-direction: column;
          margin: 1rem 0;
        }

        .label {
          color: #ffffff;
          padding-bottom: .25rem;
          text-transform: capitalize;
        }

        .app-input-container {
          position: relative;
          display: flex;
          align-items: center;
        }

        .input {
          padding: .5rem 1rem;
          border-radius: 4px;
          background: transparent;
          border: none;
          color: #ffffff;
        }

        .label,
        .input {
          font-size: 1rem;
          width: 100%;
        }

        .have-left-icon {
          padding-left: 2rem;
        }

        .have-right-icon {
          padding-left: 2rem;
        }
      `}</style>
      <style jsx global>{`
        .app-input-right-icon,
        .app-input-left-icon {
          position: absolute;
          padding: 0 .25rem;
        }

        .app-input-right-icon::before,
        .app-input-left-icon::before {
          font-size: 1.5rem;
          color: #ffffff;
        }
      `}</style>
    </div>
  )
}

export default AppInput
