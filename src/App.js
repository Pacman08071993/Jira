import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './components/header/Header';
import Body from './components/body/Body';
import { getCoursesData, getCoursesCountSkeletons } from './state/actions/actions';
import './App.css';

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCoursesData());
    dispatch(getCoursesCountSkeletons())
  })

  return(
    <div className='App'>
      <Header/>
      <Body/>
    </div>
  )
};

export default App;
