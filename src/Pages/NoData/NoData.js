import React from 'react';

import NoDataAsset from '../../asset/3024051.jpg';
import './NoData.Styles.css';

function NoData () {
  return (
    <div className='nodata-container' >
      <h1>Opps! No data have been found</h1>
      <img  alt='No data found' src={NoDataAsset}/>
    </div>
  )
}

export default NoData 
