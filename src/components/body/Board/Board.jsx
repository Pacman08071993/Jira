import React from 'react';
import { useSelector } from 'react-redux';
import { selectCourses, selectCountCourses } from '../../../state/selectors/selectors';
import Skeletons from '../../../baseComponents/Skeleton/Skeleton';
import Card from './Card/Card';
import './Board.css';

const Board = () => {
  const [inProgress = [], readyForRealize = [], submitted = []] = useSelector(selectCourses)
  const counts = useSelector(selectCountCourses)
  const loading = useSelector(state => state.loading);
  console.log('counts',counts)

  // const data = useSelector(selectCourses)

  // console.log(545, data)
  console.log(1,inProgress)
  console.log(2,readyForRealize)
  console.log(3,submitted)

  console.log('LOADING ', loading);

  return (
    <div className='Board'>
      <div className='container'>
          {loading && counts.map(count => <div>{Array(count).fill(<Skeletons />)}</div>)}
        <div>
          {!!inProgress.length && inProgress.map(card => <Card data={card}/>)}
        </div>
        <div>
          {!!readyForRealize.length && readyForRealize.map(card => <Card data={card}/>)}
        </div>
        <div>
          {!!submitted.length && submitted.map(card => <Card data={card}/>)}
        </div>
      </div>
    </div>
  )
}

export default Board;