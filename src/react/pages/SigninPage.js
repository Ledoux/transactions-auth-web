import React from 'react'
import { SigninPage as withState } from 'transactions-user-state'

import SignForm from '../components/SignForm'

const SigninPage = ({ data,
  message
}) => {
  return (
    <main className='page signin-page main'>
      <p className='signin-page__title'>
        Log to your account!
      </p>
      <SignForm endpoint='signin' data={data} message={message} />
    </main>
  )
}

export default withState(SigninPage)
