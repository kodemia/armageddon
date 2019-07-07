import React from 'react'

import AppInput from '../components/ui/AppInput'

const SignIn = () => (
  <form className='sign-in'>
    <div className='inputs'>
      <AppInput
        id='email'
        label='email:'
        type='email'
      />

      <AppInput
        id='password'
        label='password:'
        type='password'
      />
    </div>
    <style jsx>{`
      .sign-in {
        width: 100%;
        height: 100%;
        background: #181C28;

        display: flex;
        justify-content: center;
        align-items: center;
      }
    `}</style>
  </form>
)

export default SignIn
