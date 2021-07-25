import React from 'react'

const mapInstance = new Map()

const useQuery = (queryKey, queryFn, queryOptions) => {
  const queryKeyRef = React.useRef(mapInstance)
  const cancelRequest = React.useRef(!queryOptions?.enabled ?? false)
  const queryKeys = queryKeyRef.current

  const initialState = {
    status: 'idle',
    data: null,
    error: null
  }

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

    if (queryKeys.has(queryKey)) {
      dispatch({ type: 'success', payload: queryKeys.get(queryKey) })
    } else {
      try {
        console.log(queryKey)
        const response = await queryFn()
        queryKeys.set(queryKey, response)

        if (cancelRequest.current) return

        dispatch({ type: 'success', payload: response })
      } catch (error) {
        if (cancelRequest.current) return
        console.error(error)

        dispatch({ type: 'error', payload: error })
      }
    }
  }, [])

  React.useEffect(() => {
    if (cancelRequest.current) return

    fetchData()
    console.log(queryKeys)

    return () => {
      cancelRequest.current = true
    }
  }, [])

  return {
    isFetching: state.status === 'fetching',
    isSuccess: state.status === 'success',
    isError: state.status === 'error',
    refetch: fetchData,
    ...state
  }
}

export default useQuery
