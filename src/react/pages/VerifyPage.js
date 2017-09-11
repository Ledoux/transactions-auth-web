import React from 'react'
import { Button,
  Icon
} from 'transactions-interface-web'
import { VerifyPage as withState } from 'transactions-user-state'

const VerifyPage = ({ code,
  state
}) => {
  const { error,
    loading,
    success
  } = state
  return (
    <main className='page verify-page main'>
      <h1 className='verify-page__title h2 center'>
        Account Status
      </h1>
      {(!code || error) &&
        <div className='mb2'>Something went wrong. Please try opening your activation link from your email again, and otherwise, please contact us.</div>
      }
      {loading &&
        <div className='mb2'>activating...</div>
      }
      {!error && success &&
        <div>
          <div className='mb2'>
            Account activated!
          </div>
          <div>
            <Icon className='verify-page__icon' icon='user' />
          </div>
          <div>
            <Button
              className='button button--primary'
              onClick={() => {
                // actually we cannot here use href='/'
                // because we need to do a full refresh in order to
                // reset the __INITIAL_STATE__ with the good user
                window.location.assign('/')
              }}
            >
              Go to your home
            </Button>
          </div>
        </div>
      }
    </main>
  )
}

export default withState(VerifyPage)
