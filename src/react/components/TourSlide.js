import React from 'react'
import { Avatar } from 'transactions-interface-web'

import TourButton from './TourButton'

const TourSlide = ({ email,
  firstName,
  helpersCollectionName,
  history,
  imageUrl,
  lastName,
  modeName,
  path,
  tour
}) => {
  console.log('path', path)
  return (
    <div className='tour-slide'>
      <div className='tour-slide__left md-col md-col-6'>
        <div className='tour-slide__left__title'>
          <i> {firstName} {lastName} </i>
            {
              modeName && (
                <span>
                  (<b>{modeName}</b>)
                </span>
              )
            }
        </div>
        <TourButton
          email={email}
          history={history}
          helpersCollectionName={helpersCollectionName}
          path={path}
          text='login'
        />
      </div>
      <div className='tour-slide__right md-col md-col-6 flex justify-center'>
        <Avatar className='avatar tour-slide__right__avatar'
          imageUrl={imageUrl}
        />
      </div>
    </div>
  )
}

export default TourSlide