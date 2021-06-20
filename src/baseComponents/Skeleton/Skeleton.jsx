import React from 'react';
import Skeleton from 'react-loading-skeleton';
import './Skeleton.css';

const Skeletons = ({ count }) => (
  <>
    <div className='Skeletons'>
      <Skeleton circle={true} width={70} height={70} />
      <Skeleton width='100%' height={30} count={5}/>
    </div>
  </>
)

export default Skeletons;