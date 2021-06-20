import * as Types from '../types/types';
import Service from '../../Service/Service';

const requestCourses = () => ({ type: Types.requestCourses })
const getCourses = data => ({ type: Types.getCoursesSuccess, payload: data })
const getCoursesError = error => ({ type: Types.getCoursesError, payload: error })

const requestCoursesCount = () => ({ type: Types.requestCoursesCount })
const getCoursesCount = data => ({ type: Types.getCoursesCount, payload: data })
const getCoursesCountError = error => ({ type: Types.getCoursesCountError, payload: error })

const requestSearch = () => ({ type: Types.requestSearch })
const getSearchData = data => ({ type: Types.getSearchSuccess, payload: data })
const getSearchDataError = error => ({ type: Types.getSearchFailure, payload: error })


export const getCoursesData = () => dispatch => {
  dispatch(requestCourses())
  Service.getCourse()
    .then(r => dispatch(getCourses(r)))
    .catch(e => dispatch(getCoursesError(e)))
}

export const getCoursesCountSkeletons = () => dispatch => {
  dispatch(requestCoursesCount())
  Service.getCountCourses()
    .then(r => dispatch(getCoursesCount(r)))
    .catch(e => dispatch(getCoursesCountError(e)))
}

export const getSearchDataResult = searchValue => () => dispatch => {
  dispatch(requestSearch())
  Service.search(searchValue)
    .then(r => dispatch(getSearchData(r)))
    .catch(e => dispatch(getSearchDataError(e)))
} 