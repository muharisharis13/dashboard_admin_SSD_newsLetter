import React, { useReducer } from 'react'
import { MiddleWare } from './Context/Middleware';
import { StateAdmin } from './Context/state/admin';



const initialState = {
  header: false,
  loading: false,
  show: false,
  modal_upload: false,
  modal_reply: false,
  passing: ''

}


export const Context = React.createContext();


const reducer = (state, action) => {
  if (action.type === 'HEADER') {
    return {
      ...state,
      header: action.header
    }
  }
  else if (action.type === 'LOADING') {
    return {
      ...state,
      loading: action.loading
    }
  }
  else if (action.type === 'SHOW') {
    return {
      ...state,
      show: action.show
    }
  }
  else if (action.type === 'UPLOAD_IMAGE') {
    return {
      ...state,
      modal_upload: action.modal_upload
    }
  }
  else if (action.type === 'SHOW_MODAL_REPLY') {
    return {
      ...state,
      modal_reply: action.modal_reply,
      passing: action.passing
    }
  }
  else if (action.type === 'GET_DATA_BERITA') {
    return {
      ...state,
      dataAdmin: action.dataAdmin
    }
  }
  else if (action.type === 'PASSING') {
    return {
      ...state,
      passing: action.passing
    }
  }

  return state
}

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { ...initialState, ...StateAdmin });
  const midDispatch = MiddleWare(dispatch)


  return (
    <Context.Provider value={{ ...state, dispatch, midDispatch }}>
      {children}
    </Context.Provider>
  )
}

export default Store