import React from 'react'
import { connect } from 'react-redux'

import SignForm from '../components/SignForm'

const SigninPage = ({ data,
  message
}) => {
  return (<main className='page signin-page main'>
    <p className='signin-page__title'>
      Log to your account!
    </p>
    <SignForm endpoint='signin' data={data} message={message} />
  </main>)
}

function mapStateToProps ({flash}) {
  return { data: flash && flash.signinData,
    message: flash && flash.signinMessage,
  }
}
export default connect(mapStateToProps)(SigninPage)
