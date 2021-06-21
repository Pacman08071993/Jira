import React from 'react';
import { useSelector } from 'react-redux';
import { selectCourses, selectCountCourses, selectLoading } from '../../../state/selectors/selectors';
import Skeletons from '../../../baseComponents/Skeleton/Skeleton';
import Card from './Card/Card';
import './Board.css';

const Board = () => {
  const [readyForRealize = [], inProgress = [], submitted = []] = useSelector(selectCourses);
  const counts = useSelector(selectCountCourses);
  const loading = useSelector(selectLoading);
  
  const spinner = (
    counts.map((count, index) => 
    <div key={`${index}`}>{Array(count).fill(<Skeletons/>)
      .map((elem, index) => <div key={index}>{elem}</div>)}</div>))

  if(loading) {
    return (
      <div className='Board'>
        <div className='container'>{spinner}</div>
      </div>
    )  
  }

  return (
    <div className='Board'>
      <div className='container'>
        <div>
          {!!inProgress.length && inProgress.map(card => <Card key={card.id} data={card}/>)}
        </div>
        <div>
          {!!readyForRealize.length && readyForRealize.map(card => <Card  key={card.id} data={card}/>)}
        </div>
        <div>
          {!!submitted.length && submitted.map(card => <Card key={card.id} data={card}/>)}
        </div>
      </div>
    </div>
  )
}

export default Board;