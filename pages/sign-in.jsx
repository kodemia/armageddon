import React from 'react'

import AppInput from '../components/ui/AppInput'

const SignIn = () => (
  <form className='sign-in'>
    <div className='inputs'>
      <AppInput
        id='email'
        label='email:'
        type='email'
        leftIcon='email'
        className='auth-input'
      />

      <AppInput
        id='password'
        label='password:'
        type='password'
        leftIcon='lock'
        className='auth-input'
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

      @media screen and (min-width: 769px) {
        .inputs {
          padding: 4rem;
          background: #1f2332;
          border-radius: 8px;
        }
      }
    `}</style>
    <style jsx global>{`
      .auth-input {
        min-width: 250px;
      }

      .auth-input .input {
        background: #181C28;
      }
    `}</style>
  </form>
)

export default SignIn
