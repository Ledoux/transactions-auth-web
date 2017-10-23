import React from 'react'
import { SigninPage as withState } from 'transactions-user-state'

import SignForm from '../components/SignForm'

const SigninPage = ({ api,
  data,
  message,
  returnTo
}) => {
  return (
    <main className='page signin-page main'>
      <p className='signin-page__title'>
        Log to your account!
      </p>
      <SignForm data={data}
        endpoint='signin'
        message={message}
        returnTo={returnTo}
        routePath={api && api.signPath} />
    </main>
  )
}

export default withState(SigninPage)
