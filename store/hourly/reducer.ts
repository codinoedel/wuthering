// hourly/reducer
import update from 'immutability-helper'
import { Action as ReduxAction } from 'redux'

import type { LoadState } from '../'

interface SetHourlyData extends ReduxAction<'SET_HOURLY'> {
  data: Hour[]
}

type Action =
  | SetHourlyData

export type Hour = {
  dt: string
  temp: number
  clouds: number
  windDeg: number
  windSpeed: number
}

export type HourlyForecast = {
  loadState: LoadState
  hours: Record<string, Hour>
}

const initialState: HourlyForecast = {
  loadState: 'init',
  hours: {}
}

export const hourlyReducer = (state=initialState, a: Action): HourlyForecast => {
  switch (a.type) {
    case 'FETCH_FORECAST':
      return update(state, { $merge: {
        loadState: 'loading'
      }})

    case 'SET_HOURLY':
      return update(state, { $merge: {
        loadState: 'loaded',
        hours: a.data.reduce((acc, h) => {
          acc[h.dt] = {
            dt: h.dt,
            temp: h.temp,
            clouds: h.clouds,
            windDeg: h.wind_deg,
            windSpeed: h.wind_speed,
          }

          return acc
        }, {})
      }})

    default:
      return state
  }
}

