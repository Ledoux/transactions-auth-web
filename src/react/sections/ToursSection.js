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
      {
        <div>
          <div className='tours-section__title bold px2'>
            click here to browse the platform logged with a specific mode
          </div>
          <Carousel slides={slides}
            slideRenderFn={props => <TourSlide path={path} {...props} /> } />
        </div>
      }
    </Section>
  )
}

export default withState(ToursSection)
