import React from 'react'
import { Carousel,
  Section
} from 'transactions-interface-web'

import TourSlide from '../components/TourSlide'

const ToursSection = ({ users,
  path
}) => {
  const slides = users && users.sort((a,b) => a.sortIndex - b.sortIndex)
  return (
    <Section extraClass='tours-section center'>
      <p className='tours-section__title h1 bold mb2'>
        Take a tour
      </p>
      <Carousel
        slides={slides}
        slideRenderFn={props => {
          return <TourSlide path={path}
            {...props}
          />
        }}
      />
    </Section>
  )
}

export default ToursSection
