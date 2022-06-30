import React from 'react';
import NavBarGeneral from './NavBarGeneral';

const GeneralLayout = ({children}) => {

  return (

    <div className='responsiveWidth'>

      <NavBarGeneral />
    
      {children}
    
    </div>


  )

}

export default GeneralLayout;