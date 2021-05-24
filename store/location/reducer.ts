// location/reducer
import update from 'immutability-helper'
import { Action as ReduxAction } from 'redux'

interface SetLocation extends ReduxAction<'SET_LOCATION'> {
  lat: string
  long: string
}

interface SetLocationError extends ReduxAction<'SET_LOCATION_ERROR'> {
  err: string
}

type Action =
  | SetLocation
  | SetLocationError

export type Location = {
  lat: number | null
  long: number | null
  err: string
}

const initialState: CurrentWeather = {
  lat: null,
  long: null,
  err: '',
}

export const locationReducer = (state=initialState, a: Action): Location => {
  switch (a.type) {
    case 'SET_LOCATION':
      return { lat: a.lat, long: a.long, err: '' }

    case 'SET_LOCATION_ERROR':
      return update(state, { $merge: {
        err: a.err
      }})

    default:
      return state
  }
}
