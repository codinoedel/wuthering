// location/reducer
import update from 'immutability-helper'
import { Action as ReduxAction } from 'redux'

import { LoadState } from '../'

interface FetchLocation extends ReduxAction<'FETCH_LOCATION'> {}

interface SetLocation extends ReduxAction<'SET_LOCATION'> {
  lat: string
  long: string
}

interface SetLocationError extends ReduxAction<'SET_LOCATION_ERROR'> {
  err: string
}

type Action =
  | FetchLocation
  | SetLocation
  | SetLocationError

export type Location = {
  loadState: LoadState
  lat: number | null
  long: number | null
  updatedAt: string
  err: string
}

const initialState: CurrentWeather = {
  loadState: 'init',
  lat: null,
  long: null,
  updatedAt: '',
  err: '',
}

export const locationReducer = (state=initialState, a: Action): Location => {
  switch (a.type) {
    case 'FETCH_LOCATION':
      return update(state, { $merge: {
        loadState: 'loading'
      }})
    case 'SET_LOCATION':
      return {
        loadState: 'loaded',
        lat: a.lat,
        long: a.long,
        err: '',
        updatedAt: new Date().toISOString(),
    }

    case 'SET_LOCATION_ERROR':
      return update(state, { $merge: {
        err: a.err
      }})

    default:
      return state
  }
}
