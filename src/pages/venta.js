import React, { Fragment } from 'react';

import Hero from '../components/properties/hero';
import Properties from '../components/properties/venta';
import Reviews from '../components/properties/reviews';
import Contact from '../components/contact';

export default ()=> {

  return(
    <Fragment>
      <Hero />
      <Properties />
      <Reviews />
      <Contact />
    </Fragment>
  )
}