import * as Types from '../types/types';

const initialState = {
  loading: false,
  error: {},
  numberOfCard: [],
  courseCount: [],
  allCourses: []

};

const reducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case Types.requestCourses: {
      return {
        ...state,
        loading: true
      }
    }

    case Types.getCoursesSuccess: {
      return {
        ...state,
        loading: false,
        allCourses: payload,
      }
    }

    case Types.getCoursesError: {
      return {
        ...state,
        loading: false,
        error: payload
      }
    }

    case Types.getCoursesCount: {
      return {
        ...state,
        courseCount: payload
      }
    }

    case Types.requestSearch: {
      return {
        ...state,
        loading: true
      }
    }

    case Types.getSearchSuccess: {
      return {
        ...state,
        loading: false,
        allCourses: payload
      }
    }

    case Types.getSearchFailure: {
      return {
        ...state,
        loading: false,
        error: payload
      }
    }

    default: return state;
  }
}

export default reducer;