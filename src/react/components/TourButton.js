import classnames from 'classnames'
import React from 'react'
import { Button } from 'transactions-interface-web'
import { TourButton as withState } from 'transactions-user-state'

const TourButton =({ className,
  disabled,
  modeName,
  onTourClick,
  text
}) => {
  return (
    <Button className={classnames(className || 'button button--alive button--cta', {
      'button--disabled': disabled
    })}
      disabled={disabled}
      id={`button--${modeName}`}
      onClick={onTourClick} >
      { text }
    </Button>
  )
}

export default withState(TourButton)
