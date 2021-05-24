import { Middleware } from 'redux'
import { AppState } from '../'
import { setLocation, setLocationError } from './actions'

import type { Dispatch, Action } from 'redux'

export const locationMiddleware = (): Middleware<{}, AppState> => (
  ({ dispatch }) => next => action => {
    const success = (pos: GeolocationPosition) => {
      dispatch(setLocation(pos.coords.latitude, pos.coords.longitude))
    }

    const error = (err: Error) => {
      dispatch(setLocationError(err.message))
    }

    navigator.geolocation.getCurrentPosition(success, error)

    return next(action)
  }
)
