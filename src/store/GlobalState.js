import { createContext, useReducers, useEffect } from 'react'
import { rootReducer } from './reducer'

export const Datacontext = createContext()

export default DataProvider = (props) => {
  const initialState = {
    auth: {}, login: false, notify: {}, loading: false, user: {}
  }

  const [state, dispatch] = useReducers(rootReducer, initialState)

  useEffect(() => {
    const { accessToken } = state.auth

    if (accessToken) {
      
    }
  })



}