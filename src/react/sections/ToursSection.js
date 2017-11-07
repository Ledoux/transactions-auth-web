import React from 'react'
import { Carousel,
  Section
} from 'transactions-interface-web'
import { ToursSection as withState } from 'transactions-user-state'

import TourSlide from '../components/TourSlide'

const ToursSection = ({ IS_DEVELOPMENT,
  path,
  slides
}) => {
  return (
    <Section extraClass='tours-section center'>
      {
        IS_DEVELOPMENT
        ? (
          <div>
            <p className='tours-section__title bold px2'>
              click here to browse the platform logged with a specific mode
            </p>
            <Carousel slides={slides}
              slideRenderFn={props => <TourSlide path={path} {...props} /> } />
          </div>
        )
        : (
          <div>
            <p className='tours-section__title bold px2'>
              click here to browse the platform as a reviewer
            </p>
            <TourSlide {...slides.find(({ modeName }) => modeName === 'reviewer')}
              path={path}
              text='take a tour' />
          </div>
        )
      }
    </Section>
  )
}

export default withState(ToursSection)
