import React from 'react'
import { Carousel,
  Section
} from 'transactions-interface-web'

import TourSlide from '../components/TourSlide'

const ToursSection = ({ history,
  users,
  path
}) => {
  return (
    <Section extraClass='tours-section center'>
      <p className='tours-section__title h1 bold mb2'>
        Take a tour
      </p>
      <Carousel
        slides={users}
        slideRenderFn={props => {
          return <TourSlide
            history={history}
            path={path}
            {...props}
          />
        }}
      />
    </Section>
  )
}

export default ToursSection
