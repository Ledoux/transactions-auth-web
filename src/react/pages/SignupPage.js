import React from 'react'
import { SignupPage as withState } from 'transactions-user-state'

import SignForm from '../components/SignForm'

const SignupPage = ({ data,
  message
}) => {
  return (
    <main className='page signup-page main'>
      <p className='signup-page__title'>
        Sign Up !
      </p>
      <SignForm endpoint='signup' data={data} message={message}/>
    </main>
  )
}

export default withState(SignupPage)
