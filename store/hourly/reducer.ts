// hourly/reducer
import update from 'immutability-helper'
import { Action as ReduxAction } from 'redux'

interface SetHourlyData extends ReduxAction<'SET_HOURLY_DATA'> { }

type Action =
  | SetHourlyData

export type Hour = {
  dt: string
  temp: number
}

export type HourlyForecast = {
  hours: Record<string, Hour>
}

const initialState: HourlyForecast = {
  hours: {}
}

export const hourlyReducer = (state=initialState, a: Action): HourlyForecast => {
  switch (a.type) {
    case 'SET_HOURLY_DATA':
      return state

    default:
      return state
  }
}
