import React from 'react'
import { Avatar } from 'transactions-interface-web'

import TourButton from './TourButton'

const vowelTest = /^[aeiou]$/i

const TourSlide = ({ email,
  firstName,
  imageUrl,
  isAvailable,
  isPreview,
  lastName,
  modeName,
  path,
  tour
}) => {
  return (
    <div className='tour-slide flex items-center justify-center'>
      {
        isPreview && (
          <div className='tour-slide__preview'>
            <div className='tour-slide__preview__left md-col md-col-6 mb3'>
              <div className='tour-slide__preview__left__title'>
                <i> {firstName} {lastName} </i>
                  {
                    modeName && (
                      <span>
                        (<b>{modeName}</b>)
                      </span>
                    )
                  }
              </div>

            </div>
            <div className='tour-slide__preview__right md-col md-col-6 flex justify-center'>
              <Avatar className='avatar tour-slide__preview__right__avatar'
                imageUrl={imageUrl} />
            </div>
          </div>
        )
      }
      <div className='tour-slide__signin'>
        <div className='tour-slide__signin__available'>
          {
            isAvailable
            ? ''
            : 'Not yet available'
          }
        </div>
        <TourButton disabled={!isAvailable}
          email={email}
          modeName={modeName}
          path={path}
          text={`take a tour as ${vowelTest.test(modeName[0]) ? 'an' : 'a'} ${modeName}`} />
      </div>
    </div>
  )
}

export default TourSlide
