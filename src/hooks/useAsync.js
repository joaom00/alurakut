import React from 'react'

const useAsync = (fn, options) => {
  const initialState = {
    status: 'idle',
    data: null,
    error: null
  }

  // const cache = React.useRef({})
  const cancelRequest = React.useRef(!options.enabled)

  const fetchReducer = (state, action) => {
    switch (action.type) {
      case 'fetching':
        return { ...initialState, status: 'fetching' }
      case 'success':
        return { ...initialState, status: 'success', data: action.payload }
      case 'error':
        return { ...initialState, status: 'error', error: action.payload }
      default:
        return state
    }
  }

  const [state, dispatch] = React.useReducer(fetchReducer, initialState)

  const fetchData = React.useCallback(async () => {
    dispatch({ type: 'fetching' })

    try {
      const response = await fn()
      const data = await response.json()

      if (cancelRequest.current) return

      dispatch({ type: 'success', payload: data })
    } catch (error) {
      if (cancelRequest.current) return

      dispatch({ type: 'error', payload: error })
    }
  }, [fn])

  React.useEffect(() => {
    if (cancelRequest) return

    fetchData()

    return () => {
      cancelRequest.current = true
    }
  }, [fetchData])

  return {
    isFetching: state.status === 'fetching',
    isSuccess: state.status === 'success',
    isError: state.status === 'error',
    run: fetchData,
    ...state
  }
}

export default useAsync
