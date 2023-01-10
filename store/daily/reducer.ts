// daily/reducer
import update from 'immutability-helper'
import { Action as ReduxAction } from 'redux'

import type { LoadState } from '../'

interface SetDaily extends ReduxAction<'SET_DAILY_DATA'> {
  data: DailyData
}

type Action =
  | SetDaily

export type Day = {
  dt: string
  sunrise: string
  sunset: string
  moonrise: string
  moonset: string
  moonPhase: number
  temp: {
    min: number
    max: number
  }
}

export type DailyForecast = {
  loadState: LoadState
  days: Record<string, Day>
}

const initialState: DailyForecast = {
  loadState: 'init',
  days: {}
}

export const dailyReducer = (state=initialState, a: Action): DailyForecast => {
  switch (a.type) {
    case 'FETCH_FORECAST':
      return update(state, { $merge: {
        loadState: 'loading'
      }})

    case 'SET_DAILY':
      return update(state, { $merge: {
        loadState: 'loaded',
        days: a.data.reduce((acc, d) => {
          acc[d.dt] = {
            dt: d.dt,
            sunrise: d.sunrise,
            sunset: d.sunset,
            moonrise: d.moonrise,
            moonset: d.moonset,
            moonPhase: d.moon_phase,
            temp: d.temp,
          }

          return acc
        }, {})
      }})

    default:
      return state
  }
}
