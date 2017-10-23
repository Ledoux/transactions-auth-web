import React from 'react'
import { SignupPage as withState } from 'transactions-user-state'

import SignForm from '../components/SignForm'

const SignupPage = ({ api,
  data,
  message,
  returnTo
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
        routePath={api && api.signPath} />
    </main>
  )
}

export default withState(SignupPage)
