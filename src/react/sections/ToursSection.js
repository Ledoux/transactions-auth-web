import React from 'react'
import { Carousel,
  Section
} from 'transactions-interface-web'
import { ToursSection as withState } from 'transactions-user-state'

import TourSlide from '../components/TourSlide'

const ToursSection = ({ path,
  slides
}) => {
  return (
    <Section extraClass='tours-section center'>
      <p className='tours-section__title h1 bold mb2'>
        Take a tour
      </p>
      <Carousel slides={slides}
        slideRenderFn={props => <TourSlide path={path} {...props} /> } />
    </Section>
  )
}

export default withState(ToursSection)
