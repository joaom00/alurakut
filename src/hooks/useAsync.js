import React from 'react'

import useSafeDispatch from './useSafeDispatch'

const defaultInitialState = { status: 'idle', data: null, error: null }

function useAsync(initialState) {
  const initialStateRef = React.useRef({
    ...defaultInitialState,
    ...initialState
  })

  const [{ status, data, error }, setState] = React.useReducer(
    (s, a) => ({ ...s, ...a }),
    initialStateRef.current
  )

  const safeSetState = useSafeDispatch(setState)

  const setData = React.useCallback(
    (data) => safeSetState({ data, status: 'success' }),
    [safeSetState]
  )

  const setError = React.useCallback(
    (error) => safeSetState({ error, status: 'error' }),
    [safeSetState]
  )

  const reset = React.useCallback(
    () => safeSetState(initialStateRef.current),
    [safeSetState]
  )

  const run = React.useCallback(
    (promise) => {
      if (!promise || !promise.then) {
        throw new Error(
          'The argument passed to useAsync().run must be a promise.'
        )
      }

      safeSetState({ status: 'loading' })

      return promise.then(
        (data) => {
          setData(data)
          return data
        },
        (error) => {
          setError(error)
          return Promise.reject(error)
        }
      )
    },
    [safeSetState, setData, setError]
  )

  return {
    isIdle: status === 'idle',
    isLoading: status === 'loading',
    isSuccess: status === 'success',
    isError: status === 'error',
    setData,
    setError,
    error,
    status,
    data,
    run,
    reset
  }
}

export default useAsync
