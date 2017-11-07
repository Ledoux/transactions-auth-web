import React from 'react'
import { SignupPage as withState } from 'transactions-user-state'

import SignForm from '../components/SignForm'

const SignupPage = ({ data,
  message,
  returnTo,
  signPath
}) => {
  return (
    <main className='page signup-page main'>
      <p className='signup-page__title'>
        Sign Up !
      </p>
      <SignForm data={data}
        endpoint='signup'
        message={message}
        returnTo={returnTo}
        routePath={signPath} />
    </main>
  )
}

export default withState(SignupPage)
