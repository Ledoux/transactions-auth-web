import React from 'react'
import { Button, Link } from 'transactions-interface-web'
import { LogoutLink as withState } from 'transactions-user-state'

const LogoutLink = ({ afterShowModal,
  className,
  closeModal,
  showModal,
  signPath
}) => {
  return (
    <Link className={className || 'logout-link'}
      onClick={() => {
        showModal(
          <div className='center'>
            <div className='mb2 h1'>
              Are you sure you want to log out ?
            </div>
            <div className='flex justify-center'>
              <div>
                <form method='post' action={`${signPath}/logout`}>
                  <Button className='button button--alive mr2' type='submit'>
                    Yes
                  </Button>
                </form>
              </div>
              <div>
                <Button className='button button--alive' onClick={closeModal}>
                  No
                </Button>
              </div>
            </div>
          </div>
        )
        afterShowModal && afterShowModal()
      }}
    >
      (logout)
    </Link>
  )
}

export default withState(LogoutLink)
