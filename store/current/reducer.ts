// current/reducer
import update from 'immutability-helper'
import { Action as ReduxAction } from 'redux'

import { LoadState } from '../'

interface SetCurrent extends ReduxAction<'SET_CURRENT'> {
  data: CurrentData
}

type Action =
  | SetCurrent

export type CurrentData = {
  dt: string
  sunrise: string
  sunset: string
  temp: number
  feelsLike: number
  pressure: number
  humidity: number
  dewPoint: number
  clouds: number
  uvi: number
  visibility: number
  windSpeed: number
  windGust: number
  windDeg: number
  weather: {
    id: string
    main: string
    description: string
    icon: string
  }
}

type Current = {
  loadState: LoadState
  data: CurrentData | null
}

const initialState: Current = {
  loadState: 'init',
  data: null
}

export const currentReducer = (state=initialState, a: Action): Current => {
  switch (a.type) {
    case 'FETCH_FORECAST':
      return update(state, { $merge: {
        loadState: 'loading'
    }})

    case 'SET_CURRENT':
      return update(state, { $merge: {
        loadState: 'loaded',
        data: {
          dt: a.data.dt,
          sunrise: a.data.sunrise,
          sunset: a.data.sunset,
          temp: a.data.temp,
          feelsLike: a.data.feels_like,
          pressure: a.data.pressure,
          humidity: a.data.humidity,
          dewPoint: a.data.dew_point,
          clouds: a.data.clouds,
          uvi: a.data.uvi,
          visibility: a.data.visibility,
          windSpeed: a.data.wind_speed,
          windGust: a.data.wind_gust,
          windDeg: a.data.wind_deg,
          weather: a.data.weather,
        }
      }})
    default:
      return state
  }
}
