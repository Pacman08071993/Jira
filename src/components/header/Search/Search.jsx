import {React, useState} from "react";
import { useDispatch } from 'react-redux';
import { getSearchDataResult } from '../../../state/actions/actions';
import './Search.css';

const Search = () => {
  const dispatch = useDispatch()
  const [searchData, setSearchData] = useState(null)

  const handleSearchOnChange = ({ target }) => {
    setSearchData(target.value)
  }

  const handleSearchDataOnKeyPress = e => {
    if( e.key !== 'Enter') return

    dispatch(getSearchDataResult(searchData)())
  }

  const handleSearchData = () => {
    dispatch(getSearchDataResult(searchData)())
  }

  return(
    <div className='Search'>
      <input
        type='text'
        placeholder='search'
        onKeyPress={handleSearchDataOnKeyPress}
        onChange={handleSearchOnChange}
      />
      <button  onClick={handleSearchData}>send</button>
    </div>
  )
}

export default Search;