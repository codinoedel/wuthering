import { Middleware } from 'redux'

import { useAppSelector } from '../../hooks'
import { AppState } from '../'
import { getIsLocationFetched } from './selectors'
import { fetchingLocation, setLocation, setLocationError } from './actions'

export const locationMiddleware: Middleware<{}, AppState> = ({ dispatch, getState }) => next => action => {
  switch(action.type) {
    case 'FETCH_LOCATION':
      const isLocationFetched = getIsLocationFetched(getState())

      if (!isLocationFetched) {
        const success = (pos: GeolocationPosition) => {
          dispatch(setLocation(pos.coords.latitude, pos.coords.longitude))
        }

        const error = (err: Error) => {
          dispatch(setLocationError(err.message))
        }

        navigator.geolocation.getCurrentPosition(success, error)
      }
      break
  }

  return next(action)
}
