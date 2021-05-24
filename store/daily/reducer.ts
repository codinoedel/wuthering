// daily/reducer
import update from 'immutability-helper'
import { Action as ReduxAction } from 'redux'

interface SetDailyData extends ReduxAction<'SET_DAILY_DATA'> { }

type Action =
  | SetDailyData

export type Day = {
  dt: string
  sunrise: string
  sunset: string
  moonrise: string
  moonset: string
  moon_phase: number
  temp: {
    min: number
    max: number
  }
}

export type DailyForecast = {
  days: Record<string, Day>
}

const initialState: DailyForecast = {
  days: {}
}

export const dailyReducer = (state=initialState, a: Action): DailyForecast => {
  switch (a.type) {
    case 'SET_DAILY_DATA':
      return state

    default:
      return state
  }
}
