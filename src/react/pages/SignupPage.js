import React from 'react'
import { connect } from 'react-redux'

import SignForm from '../components/SignForm'

const SignupPage = ({ data,
  message
}) => {
  return (<main className='page signup-page main'>
    <p className='signup-page__title'>
      Become a fact-checker !
    </p>
    <SignForm endpoint='signup' data={data} message={message}/>
  </main>)
}

function mapStateToProps ({flash}) {
  return { data: flash && flash.signupData,
    message: flash && flash.signupMessage,
  }
}
export default connect(mapStateToProps)(SignupPage)
