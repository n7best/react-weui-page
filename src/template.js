import React from 'react';
import HeaderNav from './components/header';

const Template = ( props ) => {
  return (
    <div>
      <HeaderNav/>
      <div className="container" >
        { props.children }
      </div>
    </div>
  )
}
export default Template;