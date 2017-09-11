import React from 'react'
import { Button } from 'transactions-interface-web'
import { TourButton as withState } from 'transactions-user-state'

const TourButton =({ className,
  onTourClick,
  text
}) => {
  return (
    <Button className={className || 'button button--alive button--cta'}
      onClick={onTourClick} >
      { text }
    </Button>
  )
}

export default withState(TourButton)
