import {React, useState} from "react";
import { useDispatch } from 'react-redux';
import { getSearchDataResult } from '../../../state/actions/actions';



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
    <div >
      <input
        type='text'
        onKeyPress={handleSearchDataOnKeyPress}
        onChange={handleSearchOnChange}
      />
      <button  onClick={handleSearchData}>send</button>
    </div>
  )
}

export default Search;